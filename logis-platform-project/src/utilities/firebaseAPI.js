// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃ Logis Vision Firebase API ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// 필요한 Firebase 라이브러리 불러오기
import {initializeApp} from "firebase/app";

import { addDoc, collection, deleteDoc, deleteField, doc, getDoc, getDocs, getFirestore, serverTimestamp, updateDoc, }
    from "firebase/firestore";

import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes, } from "firebase/storage";

import { getAuth, } from "firebase/auth";

import { firebaseConfig } from "@/security/firebaseKey.js";

import { Color } from "@/utilities/colorModule.js";


// Firebase 초기화
const fireApp = initializeApp(firebaseConfig);
const database = getFirestore(fireApp);
const storage = getStorage(fireApp);
const auth = getAuth(fireApp);


// API 정의하는 부분
const API = {
    // 아이템 관련 API
    item: {
        // 이미지 파일의 주소를 가져오는 기능 (file_name: string)
        getImageData: async (file_name) => {
            const extensions = ["png", "jpg", "jpeg", "gif"];

            for (const extension of extensions) {
                try {
                    return await getDownloadURL(
                        ref(storage, `picture/${file_name}.${extension}`)
                    );
                }
                catch (error) {
                    if (error.code === "storage/object-not-found") {
                        continue;
                    }
                    else {
                        console.error("[Error] 알 수 없는 오류!!!");
                        return error.code;
                    }
                }
            }
        },

        // 컬러 정보를 Hex String으로 가공하는 기능 (color: map[red, green, blue])
        colorDataToHex: (color) => {
            let colorHEX = "#";
            colorHEX += color.red.toString(16).toUpperCase().padStart(2, "0");
            colorHEX += color.green.toString(16).toUpperCase().padStart(2, "0");
            colorHEX += color.blue.toString(16).toUpperCase().padStart(2, "0");

            return colorHEX;
        },

        // 아이템 데이터 가공하는 기능 (item: map[id, ...])
        modData: async (item) => {
            try {
                // 아이템의 이미지 불러오기
                const imageURL = await API.item.getImageData(item.file_name);

                // 텍스트 컬러 결정하기
                const textColor = Color.getTextColor(item.color);

                // 아이템의 색상 HEX string으로 변환하기
                let colorHEX = API.item.colorDataToHex(item.color);

                // 아이템의 위치 정보 불러오기
                const locationRef = item.location;
                const locationSnap = await getDoc(locationRef);

                // 아이템의 위치 정보가 존재하는 지 확인
                if (locationSnap.exists()) {
                    const locationData = { id: locationSnap.id, ...locationSnap.data() };
                    const location = { space: locationRef.parent.id, address: locationRef.id };
                    return {
                        id: item.id,
                        location: item.location,
                        location_data: location,
                        color:
                            {
                                red: item.color.red,
                                green: item.color.green,
                                blue: item.color.blue
                            },
                        text_color_hex: textColor,
                        color_hex: colorHEX,
                        file_name: item.file_name,
                        image_url: imageURL,
                        state: item.state,
                    };
                }
                else {
                    // 아이템의 위치 정보를 찾지 못한 경우
                    console.error("[Error] 아이템의 위치 정보를 찾을 수 없습니다.");
                    return 404;
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 하나의 아이템을 불러오는 기능 (id: string)
        getOne: async (id) => {
            try {
                const docSnapshot = await getDoc(doc(database, "items", id));

                // 아이템의 내부 데이터 가공
                // 해당 ID의 아이템이 존재하는 지 확인하기
                if (docSnapshot.exists()) {
                    const item = { id: docSnapshot.id, ...docSnapshot.data() };

                    // 아이템 데이터 가공하기
                    return await API.item.modData(item);
                }
                else
                {
                    // 아이템 정보를 찾지 못한 경우
                    console.error("[Error] 아이템 정보를 찾을 수 없습니다.");
                    return 404;
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },
        
        // 여러 개의 아이템을 불러오는 기능
        getAll: async () => {
            try {
                // 모든 아이템을 불러오기
                const querySnapshot = await getDocs(collection(database, "items"));
                const items = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                // 아이템의 내부 데이터 가공
                const newItemsPending = items.map(async (item) => {
                    // 아이템 데이터 가공하기
                    return await API.item.modData(item);
                });

                return await Promise.all(newItemsPending);
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 새로운 아이템 추가하는 기능 (color: map[red, green, blue], newLocation: map[space, address], file: File)
        add: async (color, newLocation, file) => {
            // 파일명 생성하기
            const timestamp = Date.now();
            const fileName = `${timestamp}_${file.name.split('.')[0]}`;
            const uploadFileName = `${fileName}.${file.name}`;

            // 아이템 위치 정보 레퍼런스 만들기
            const locationRef = doc(database, newLocation.space, newLocation.address);

            // 새로운 아이템 만들기
            const newItem = {
                color: color,
                file_name: fileName,
                location: locationRef,
                state: "income",
            };

            // 업로드 시도하기
            try {
                const itemRef = await addDoc(collection(database, "items"), newItem);
                await uploadBytes(ref(storage, `picture/${uploadFileName}`), file);

                // 위치 정보에도 데이터 반영하기
                await API.item.locationAdd(itemRef, newLocation, "income");

                console.log("[System] 새로운 아이템이 성공적으로 등록되었습니다.");
                return 201;
            }
            catch (error) {
                console.error("[Error] 새로운 아이템 등록에 실패하였습니다.");
                return error.code;
            }
        },

        // 아이템의 정보(위치 및 상태)를 변경하는 기능 (item: map[id, ...], newLocation: map[space, address], newState: string)
        update: async (item, newLocation, newState) => {
            // 변경된 위치 정보와 상태 정보 생성
            const locationRef = doc(database, newLocation.space, newLocation.address);
            const newItemData = {
                location: locationRef,
                state: newState,
            };

            // 변경 정보 업로드 하기
            try {
                const itemRef = doc(database, "items", item.id);

                // 위치 정보에 반영하기
                await API.item.locationDelete(item);
                await API.item.locationAdd(itemRef, newLocation, newState);

                await updateDoc(doc(database, "items", item.id), newItemData);
                console.log("[System] 아이템 정보가 성공적으로 변경되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 아이템 정보를 변경하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 아이템을 삭제하는 기능 (item: map[id, ...])
        delete: async (item) => {
            try {
                // 아이템 이미지 삭제
                await deleteObject(ref(storage, `picture/${item.file_name}.*`));

                // 아이템 삭제
                await deleteDoc(doc(database, "items", item.id));

                // 위치 정보에도 데이터 반영하기
                await API.item.locationDelete(item);

                console.log("[System] 아이템 정보를 성공적으로 삭제하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 아이템 정보를 삭제하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 위치정보에서 아이템 정보를 삭제하는 기능 (item: map[id, ...])
        locationDelete: async (item) => {
            try {
                if (item.location_data.space === "incomings") {
                    await API.incoming.removeItem(item.location_data.address);
                    await API.incoming.updateState(item.location_data.address, "empty");
                }
                else if (item.location_data.space === "workspaces") {
                    await API.workspace.removeItem(item.location_data.address);
                    await API.workspace.updateState(item.location_data.address, "empty");
                }
                else if (item.location_data.space === "storages") {
                    await API.storage.removeItem(item.location_data.address);
                }

                console.log("[System] 해당 위치 정보에서 아이템을 성공적으로 제거하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 해당 위치 정보에서 아이템을 제거하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 위치정보에서 아이템 정보를 추가하는 기능 (itemRef: itemRef, newLocation: map[space, address], state: string)
        locationAdd: async (itemRef, newLocation, state) => {
            try {
                if (newLocation.space === "incomings") {
                    await API.incoming.addItem(newLocation.address, itemRef);
                    await API.incoming.updateState(newLocation.address, state);
                }
                else if (newLocation.space === "workspaces") {
                    await API.workspace.addItem(newLocation.address, itemRef);
                    await API.workspace.updateState(newLocation.address, state);
                }
                else if (newLocation.space === "storages") {
                    await API.storage.addItem(newLocation.address, itemRef);
                    await API.storage.updateState(newLocation.address, state);
                }

                console.log("[System] 해당 위치정보에 아이템을 성공적으로 추가하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 해당 위치정보에 아이템을 추가하는데 실패하였습니다.");
                return error.code;
            }
        }
    },

    // 입고라인 관련 API
    incoming: {
        // 하나의 입고라인 데이터를 얻는 기능
        getOne: async (id) => {
            try {
                const docSnapshot = await getDoc(doc(database, "incomings", id));

                // 입고라인 데이터 가공
                // 입고라인 데이터가 있는지 확인하기
                if (docSnapshot.exists()) {
                    let incoming = { id: docSnapshot.id, ...docSnapshot.data() };

                    // 아이템이 있으면 정보 가져오기
                    const itemRef = incoming.item;
                    if (itemRef) {
                        const item = await API.item.getOne(itemRef.id);
                        return {
                            id: incoming.id,
                            state: incoming.state,
                            item: incoming.item,
                            item_data: item,
                        };
                    }
                    else {
                        return {
                            id: incoming.id,
                            state: incoming.state,
                        };
                    }
                }
                else {
                    // 입고라인 데이터를 찾지 못한 경우
                    console.error("[Error] 해당 입고라인 데이터를 찾을 수 없습니다.");
                    return 404;
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 모든 입고라인 데이터를 얻는 기능
        getAll: async () => {
            try {
                // 모든 입고라인 데이터 받아오기
                const querySnapshot = await getDocs(collection(database, "incomings"));
                const incomings = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                // 입고라인 데이터에 맞는 아이템 정보 가져오기
                const newIncomingsPending = incomings.map(async (incoming) => {
                   const itemRef = incoming.item;
                   if (itemRef) {
                       const item = await API.item.getOne(itemRef.id);
                       return {
                           id: incoming.id,
                           state: incoming.state,
                           item: incoming.item,
                           item_data: item,
                       };
                   }
                   else {
                       return {
                           id: incoming.id,
                           state: incoming.state,
                       };
                   }
                });

                // 새로운 입고라인 데이터 반환하기
                return await Promise.all(newIncomingsPending);
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 입고라인 상태를 업데이트하는 기능 (id: string, state: string)
        updateState: async (id, state) => {
            // 변경된 상태 정보 생성
            const newIncomingData = {
                state: state,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "incomings", id), newIncomingData);
                console.log("[System] 입고라인 상태가 성공적으로 업데이트 되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 입고라인 상태를 변경하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 입고라인에 아이템을을 추가하는 기능 (**state 변경은 포함 안됨**)
        addItem: async (id, item) => {
            // 변경된 상태 정보 생성
            const newIncomingData = {
                item: item,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "incomings", id), newIncomingData);
                console.log("[System] 입고라인에 아이템을 성공적으로 추가하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 입고라인에 아이템을 추가하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 입고라인의 아이템을 제거하는 기능 (**state 변경은 포함 안됨**)
        removeItem: async (id) => {
            // 삭제 명령어가 포함된 정보 생성
            const removeItemData = {
                item: deleteField(),
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "incomings", id), removeItemData);
                console.log("[System] 입고라인의 아이템을 성공적으로 제거하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 입고라인의 아이템을 제거하는데 실패하였습니다.");
                return error.code;
            }
        }
    },

    // 작업공간 관련 API
    workspace: {
        // 하나의 작업공간 데이터를 얻는 기능
        getOne: async (id) => {
            try {
                const docSnapshot = await getDoc(doc(database, "workspaces", id));

                // 작업공간 데이터 가공
                // 작업공간 데이터가 있는 지 확인하기
                if (docSnapshot.exists()) {
                    let workspace = { id: docSnapshot.id, ...docSnapshot.data() };

                    // 아이템이 있으면 정보 가져오기
                    const itemRef = workspace.item;
                    if (itemRef) {
                        const item = await API.item.getOne(itemRef.id);
                        return {
                            id: workspace.id,
                            state: workspace.state,
                            item: workspace.item,
                            item_data: item,
                        };
                    }
                    else {
                        return {
                            id: workspace.id,
                            state: workspace.state,
                        };
                    }
                }
                else {
                    // 작업공간 데이터를 찾지 못한 경우
                    console.error("[Error] 해당 작업공간 데이터를 찾을 수 없습니다.");
                    return 404;
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 모든 작업공간 데이터를 얻는 기능
        getAll: async () => {
            try {
                // 모든 작업공간 데이터 받아오기
                const querySnapshot = await getDocs(collection(database, "workspaces"));
                const workspaces = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                // 작업공간 데이터에 맞는 아이템 정보 가져오기
                const newWorkspacesPending = workspaces.map(async (workspace) => {
                    const itemRef = workspace.item;
                    if (itemRef) {
                        const item = await API.item.getOne(itemRef.id);
                        return {
                            id: workspace.id,
                            state: workspace.state,
                            item: workspace.item,
                            item_data: item,
                        }
                    }
                    else {
                        return {
                            id: workspace.id,
                            state: workspace.state,
                        };
                    }
                });

                // 새로운 작업공간 데이터 반환하기
                return await Promise.all(newWorkspacesPending);
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 작업공간 상태를 업데이트하는 기능 (id: string, state: string)
        updateState: async (id, state) => {
            // 변경된 상태 정보 생성
            const newWorkspaceData = {
                state: state,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "workspaces", id), newWorkspaceData);
                console.log("[System] 작업공간 상태가 성공적으로 업데이트 되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 작업공간 상태를 변경하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 작업공간에 아이템을 추가하는 기능 (**state 변경은 포함 안됨**)
        addItem: async (id, item) => {
            // 변경된 상태 정보 생성
            const newWorkspaceData = {
                item: item,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "workspaces", id), newWorkspaceData);
                console.log("[System] 작업공간에 아이템을 성공적으로 추가하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 작업공간에 아이템을 추가하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 작업공간에 아이템을 제거하는 기능 (**state 변경은 포함 안됨**)
        removeItem: async (id) => {
            // 삭제 명령어가 포함된 정보 생성
            const removeItemData = {
                item: deleteField(),
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "workspaces", id), removeItemData);
                console.log("[System] 작업공간의 아이템을 성공적으로 제거하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 작업공간의 아이템을 제거하는데 실패하였습니다.");
                return error.code;
            }
        }
    },

    // 저장공간 관련 API
    storage: {
        // 하나의 저장공간 데이터를 얻는 기능
        getOne: async (id) => {
            try {
                const docSnapshot = await getDoc(doc(database, "storages", id));

                // 저장공간 데이터 가공
                // 저장공간 데이터가 있는지 확인하기
                if (docSnapshot.exists()) {
                    let storage = { id: docSnapshot.id, ...docSnapshot.data() };

                    // 아이템이 있으면 정보 가져오기
                    const itemRef = storage.item;
                    if (itemRef) {
                        const item = await API.item.getOne(itemRef.id);
                        return {
                            id: storage.id,
                            state: storage.state,
                            item: storage.item,
                            item_data: item,
                        };
                    }
                    else {
                        return {
                            id: storage.id,
                            state: storage.state,
                        };
                    }
                }
                else {
                    // 저장공간 데이터를 찾지 못한 경우
                    console.error("[Error] 해당 저장공간 데이터를 찾을 수 없습니다.");
                    return 404;
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 모든 저장공간 데이터를 얻는 기능
        getAll: async () => {
            try {
                // 모든 저장공간 데이터 받아오기
                const querySnapshot = await getDocs(collection(database, "storages"));
                const storages = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                // 저장공간 데이터에 맞는 아이템 정보 가져오기
                const newStoragesPending = storages.map(async (storage) => {
                    const itemRef = storage.item;

                    if (itemRef) {
                        const item = await API.item.getOne(itemRef.id);
                        return {
                            id: storage.id,
                            state: storage.state,
                            item: storage.item,
                            item_data: item,
                        }
                    }
                    else {
                        return {
                            id: storage.id,
                            state: storage.state,
                        };
                    }
                });

                // 새로운 저장공간 데이터 반환하기
                return await Promise.all(newStoragesPending);
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },


        // 저장공간 상태를 업데이트하는 기능 (id: string, state: string)
        updateState: async (id, state) => {
            // 변경된 상태 정보 생성
            const newStorageData = {
                state: state,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "storages", id), newStorageData);
                console.log("[System] 저장공간 상태가 성공적으로 업데이트 되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 저장공간 상태를 변경하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 저장공간에 아이템을 추가하는 기능 (**state 변경은 포함 안됨**)
        addItem: async (id, item) => {
            // 변경된 상태 정보 생성
            const newStorageData = {
                item: item,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "storages", id), newStorageData);
                console.log("[System] 저장공간에 아이템을 성공적으로 추가하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 저장공간에 아이템을 추가하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 저장공간에 아이템을 제거하는 기능 (**state 변경은 포함 안됨**)
        removeItem: async (id) => {
            // 삭제 명령어가 포함된 정보 생성
            const removeItemData = {
                item: deleteField(),
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "storages", id), removeItemData);
                console.log("[System] 저장공간의 아이템을 성공적으로 제거하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 저장공간의 아이템을 제거하는데 실패하였습니다.");
                return error.code;
            }
        }
    },

    // AGV 로봇 관련 API
    robot: {
        // 하나의 AGV 상태 데이터를 얻는 기능
        getOne: async (id) => {
            try {
                const docSnapshot = await getDoc(doc(database, "robots", id));

                if (docSnapshot.exists()) {
                    let robot = { id: docSnapshot.id, ...docSnapshot.data() };
                    return {
                        id: robot.id,
                        state: robot.state,
                        location: robot.location,
                    }
                }
                else {
                    console.error("[Error] 해당 AGV 데이터를 찾을 수 없습니다.");
                    return 404;
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 모든 AGV 상태 데이터를 얻는 기능
        getAll: async () => {
            try {
                const querySnapshot = await getDocs(collection(database, "robots"));
                const robots = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        state: doc.data().state,
                        location: doc.data().location,
                    };
                });

                return robots;
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // AGV 상태를 업데이트하는 기능 (id: string, state: string, location: map[space, address])
        updateState: async (id, state, location) => {
            // 변경된 상태 정보 생성
            const newRobotData = {
                state: state,
                location: location,
            }

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "robots", id), newRobotData);
                console.log("[System] AGV 상태가 성공적으로 업데이트 되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] AGV 상태를 변경하는데 실패하였습니다.");
                return error.code;
            }
        }
    },

    // AGV 로봇 명령어 관련 API
    command: {
        // 모든 명령어를 불러오는 기능
        getAll: async () => {
            try {
                // 모든 명령어 불러오기
                const querySnapshot = await getDocs(collection(database, "commands"));
                const commands = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                // 명령어 내부 선행 명령어 데이터 가공하기
                const newCommandsPending = commands.map(async (command) => {
                    const forwardCommandRef = command.forward;
                    if (forwardCommandRef) {
                        const forwardDocSnapshot = await getDoc(forwardCommandRef);

                        if (forwardDocSnapshot.exists()) {
                            const forwardCommand = { id: forwardDocSnapshot.id, ...forwardDocSnapshot.data() };

                            return {
                                id: command.id,
                                datetime: command.datetime,
                                datetime_data: command.datetime.toDate(),
                                destination: command.destination,
                                item: command.item,
                                robot: command.robot,
                                forward: command.forward,
                                forward_data: forwardCommand,
                                state: command.state,
                            }
                        }
                        else {
                            // 선행 명령어를 찾지 못한 경우
                            console.error("[Error] 선행 명령어를 찾을 수 없습니다.");
                            return 404;
                        }
                    }
                    else {
                        return {
                            id: command.id,
                            datetime: command.datetime,
                            datetime_data: command.datetime.toDate(),
                            destination: command.destination,
                            item: command.item,
                            robot: command.robot,
                            state: command.state,
                        }
                    }
                });

                return await Promise.all(newCommandsPending);
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 수행이 완료되지 않은 명령어를 불러오는 기능
        getRequested: async () => {
            try {
                // 모든 명령어 불러오기
                const commands = await API.command.getAll();

                // 수행이 완료되지 않은 명령어 추출하기
                return commands.filter(command => command.state !== "completed");
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 목표 AGV가 가장 먼저 수행해야 할 명령어를 불러오는 기능 (id: string)
        getTargetOne: async (id) => {
            try {
                // 수행되지 않은 명령어 불러오기
                const requestedCommands = await API.command.getRequested();

                // 해당 로봇에게 주어진 명령어만 추출하기
                let targetCommands = requestedCommands.filter(command => command.robot === id);
                targetCommands = targetCommands.filter(command => command.state === "target");

                if (targetCommands.length > 0) {
                    targetCommands.sort((first, second) => second.datetime - first.datetime);

                    return targetCommands[0];
                }
                else {
                    return { state: "none", };
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 수행이 완료된 명령어를 불러오는 기능
        getDone: async () => {
            try {
                // 모든 명령어 불러오기
                const commands = await API.command.getAll();

                // 수행이 완료된 명령어 추출하기
                return commands.filter(command => command.state === "completed");
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 새로운 명령어를 생성하는 기능 (item: map[id, ...], destination: map[space, address]
        request: async (item, destination) => {
            try {
                // 점유 가능한 작업 공간 확인하기
                const workspaces = await API.workspace.getAll();
                workspaces.sort((a, b) => a.id.localeCompare(b.id));
                let selectedWorkspace = "-1";

                for (const workspace of workspaces) {
                    if (workspace.state === "empty") {
                        selectedWorkspace = workspace.id;
                        break;
                    }
                }

                // 더 이상 명령어를 추가할 수 없음
                if (selectedWorkspace === "-1") {
                    console.error("[Error] 모든 작업공간이 점유 상태이므로 명령어를 추가할 수 없습니다.");
                    return 403;
                }

                // 입출고에 따른 별도의 명령어 작성
                if (item.location_data.space === "incomings" && destination.space === "storages") {
                    // [입고 절차]
                    // 각 공간과 아이템을 점유 상태로 만들기
                    await API.item.update(item, item.location_data, "progress");
                    await API.incoming.updateState(item.location_data.address, "progress");
                    await API.workspace.updateState(selectedWorkspace, "progress");
                    await API.storage.updateState(destination.address, "progress");

                    // 첫 번째 명령어 만들기
                    const newFirstCommand = {
                        datetime: serverTimestamp(),
                        destination: {
                            address: selectedWorkspace,
                            space: "workspaces",
                            state: "progress",
                        },
                        item: {
                            id: item.id,
                            color: {
                                red: item.color.red,
                                green: item.color.green,
                                blue: item.color.blue,
                            },
                            location: {
                                address: item.location_data.address,
                                space: item.location_data.space,
                                state: "progress",
                            },
                            state: "progress",
                        },
                        robot: "B",
                        state: "request"
                    };

                    // 첫 번째 명령어 전송
                    const firstCommandRef = await addDoc(collection(database, "commands"), newFirstCommand);
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // 두 번째 명령어 만들기
                    const newSecondCommand = {
                        datetime: serverTimestamp(),
                        destination: {
                            address: destination.address,
                            space: destination.space,
                            state: "progress",
                        },
                        item: {
                            id: item.id,
                            color: {
                                red: item.color.red,
                                green: item.color.green,
                                blue: item.color.blue,
                            },
                            location: {
                                address: selectedWorkspace,
                                space: "workspaces",
                                state: "progress",
                            },
                            state: "progress",
                        },
                        robot: "A",
                        state: "lock",
                        forward: firstCommandRef,
                    }

                    // 두 번째 명령어 전송
                    await addDoc(collection(database, "commands"), newSecondCommand);

                    console.log("[System] 새로운 명령어가 생성되었습니다!");
                    return 201;
                }
                else if (item.location_data.space === "storages" && destination.space === "incomings") {
                    // [출고 절차]
                    // 각 공간과 아이템을 점유 상태로 만들기
                    await API.item.update(item, item.location_data, "progress");
                    await API.storage.updateState(item.location_data.address, "progress");
                    await API.workspace.updateState(selectedWorkspace, "progress");
                    await API.incoming.updateState(destination.address, "progress");

                    // 첫 번째 명령어 만들기
                    const newFirstCommand = {
                        datetime: serverTimestamp(),
                        destination: {
                            address: selectedWorkspace,
                            space: "workspaces",
                            state: "progress",
                        },
                        item: {
                            id: item.id,
                            color: {
                                red: item.color.red,
                                green: item.color.green,
                                blue: item.color.blue,
                            },
                            location: {
                                address: item.location_data.address,
                                space: item.location_data.space,
                                state: "progress",
                            },
                            state: "progress",
                        },
                        robot: "A",
                        state: "request"
                    };

                    // 첫 번째 명령어 전송
                    const firstCommandRef = await addDoc(collection(database, "commands"), newFirstCommand);
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // 두 번째 명령어 만들기
                    const newSecondCommand = {
                        datetime: serverTimestamp(),
                        destination: {
                            address: destination.address,
                            space: destination.space,
                            state: "progress",
                        },
                        item: {
                            id: item.id,
                            color: {
                                red: item.color.red,
                                green: item.color.green,
                                blue: item.color.blue,
                            },
                            location: {
                                address: selectedWorkspace,
                                space: "workspaces",
                                state: "progress",
                            },
                            state: "progress",
                        },
                        robot: "B",
                        state: "lock",
                        forward: firstCommandRef,
                    }

                    // 두 번째 명령어 전송
                    await addDoc(collection(database, "commands"), newSecondCommand);

                    console.log("[System] 새로운 명령어가 생성되었습니다!");
                    return 201;
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 명령어를 완료 처리하는 기능 (command: map[id, ...])
        complete: async (command) => {
            if (command.state === "lock") {
                console.error("[Error] 잠긴 명령어를 완료할 수 없습니다!!!");
                return 403;
            }

            try {
                // 아이템 정보 얻어오기
                const item = await API.item.getOne(command.item.id);

                // 목적지에 따라서 아이템 및 위치정보 변경하기
                if (command.destination.space === "workspaces") {
                    await API.item.update(item, command.destination, "progress");
                }
                else if (command.destination.space === "storages") {
                    await API.item.update(item, command.destination, "stored");
                }
                else if (command.destination.space === "incomings") {
                    await API.item.update(item, command.destination, "income");
                }

                // 명령어 상태 변경하기
                await API.command.update(command.id, "completed");

                console.log("[System] 명령어를 완료처리 하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 선행 명령어가 완료되었는지 확인하는 기능
        check: async () => {
            try {
                // 수행되지 않은 명령어 불러오기
                const requestedCommands = await API.command.getRequested();

                // 잠긴 명령어만 불러오기
                const lockedCommands = requestedCommands.filter(command => command.state === "lock");

                for (const command of lockedCommands) {
                    if (command.forward_data.state === "completed") {
                        await API.command.update(command.id, "request");
                        console.log("[System] 선행 명령어가 수행이 완료되어 명령어의 잠금이 해제되었습니다.");
                        return 200;
                    }
                }
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 명령어의 상태를 업데이트 하는 기능 (id: string, state: string)
        update: async (id, state) => {
            // 변경된 상태 정보 생성
            const newCommandData = {
                state: state,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "commands", id), newCommandData);
                console.log("[System] 명령어 상태가 성공적으로 업데이트 되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 명령어 상태를 변경하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 명령어를 삭제하는 기능 (command: map[id, ...])
        delete: async (command) => {
            try {
                // 삭제하려는 명령어가 선행 명령어 종료를 위해 잠겨있거나, 명령어가 수행중인 경우 삭제할 수 없음
                if (command.state === "progress") {
                    console.error("[Error] 이미 수행 중인 명령어 입니다. 삭제할 수 없습니다.");
                    return 403;
                }
                else {
                    await deleteDoc(doc(database, "commands", command.id));

                    console.log("[System] 명령어를 성공적으로 삭제하였습니다.");
                    return 200;
                }
            }
            catch (error) {
                console.error("[Error] 아이템 정보를 삭제하는데 실패하였습니다.");
                return error.code;
            }
        }
    }
}

// Export
export { API as LOGIS_API };