// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃ Logis Vision Firebase API ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// 필요한 Firebase 라이브러리 불러오기
import { initializeApp } from "firebase/app";

import {
    getFirestore, getDoc, getDocs, doc, addDoc, updateDoc, deleteDoc, collection, deleteField,
} from "firebase/firestore";

import {
    getStorage, getDownloadURL, ref, uploadBytes, deleteObject,
} from "firebase/storage";

import {
    getAuth,
} from "firebase/auth";

import { firebaseConfig } from "@/security/firebaseKey.js";


// Firebase 초기화
const fireApp = initializeApp(firebaseConfig);
const database = getFirestore(fireApp);
const storage = getStorage(fireApp);
const auth = getAuth(fireApp);


// API 정의하는 부분
const API = {
    // 아이템 관련 API
    item: {
        // 하나의 아이템을 불러오는 기능
        getOne: async (id) => {
            try {
                const docSnapshot = await getDoc(doc(database, "items", id));

                // 아이템의 내부 데이터 가공
                // 해당 ID의 아이템이 존재하는 지 확인하기
                if (docSnapshot.exists()) {
                    const item = { id: docSnapshot.id, ...docSnapshot.data() };
                    
                    // 아이템의 이미지 불러오기
                    const imageURL = await getDownloadURL(
                        ref(storage, `picture/${item.file_name}.*`),
                    );

                    // 아이템의 색상 HEX String으로 변환하기
                    let colorHEX = "#";
                    colorHEX += item.color.red.toString(16).toUpperCase().padStart(2, "0");
                    colorHEX += item.color.green.toString(16).toUpperCase().padStart(2, "0");
                    colorHEX += item.color.blue.toString(16).toUpperCase().padStart(2, "0");

                    // 아이템의 위치 정보 불러오기
                    const locationRef = item.location;
                    const locationSnap = await getDoc(locationRef);

                    // 아이템의 위치 정보가 존재하는 지 확인
                    if (locationSnap.exists()) {
                        const locationData = { id: locationSnap.id, ...locationSnap.data() };
                        const location = { space: locationData.parent.id, address: locationData.address.id };
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
                    // 아이템의 이미지 불러오기
                    const imageURL = await getDownloadURL(
                        ref(storage, `picture/${item.file_name}.*`),
                    );

                    // 아이템의 색상 HEX String으로 변환하기
                    let colorHEX = "#";
                    colorHEX += item.color.red.toString(16).toUpperCase().padStart(2, "0");
                    colorHEX += item.color.green.toString(16).toUpperCase().padStart(2, "0");
                    colorHEX += item.color.blue.toString(16).toUpperCase().padStart(2, "0");

                    // 아이템의 위치 정보 불러오기
                    const locationRef = item.location;
                    const locationSnap = await getDoc(locationRef);

                    // 아이템의 위치 정보 가공하기
                    const locationData = { id: locationSnap.id, ...locationSnap.data() };
                    const location = { space: locationData.parent.id, address: locationData.address.id };

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
                        color_hex: colorHEX,
                        file_name: item.file_name,
                        image_url: imageURL,
                        state: item.state,
                    };
                });

                return await Promise.all(newItemsPending);
            }
            catch (error) {
                console.error("[Error] 알 수 없는 오류!!!");
                return error.code;
            }
        },

        // 새로운 아이템 추가하는 기능
        add: async (color, location, file) => {
            // 파일명 생성하기
            const timestamp = Date.now();
            const fileName = `${timestamp}_${file.name.split('.')[0]}`;
            const uploadFileName = `${fileName}.${file.name}`;

            // 아이템 위치 정보 레퍼런스 만들기
            const locationRef = doc(database, location.space, location.address);

            // 새로운 아이템 만들기
            const newItem = {
                color: color,
                file_name: fileName,
                location: locationRef,
                state: "income",
            };

            // 업로드 시도하기
            try {
                await addDoc(collection(database, "items"), newItem);
                await uploadBytes(ref(storage, `picture/${uploadFileName}`), file);
                // TODO - 위치 정보에도 데이터 반영하기
                console.log("[System] 새로운 아이템이 성공적으로 등록되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 새로운 아이템 등록에 실패하였습니다.");
                return error.code;
            }
        },

        // 아이템의 정보(위치 및 상태)를 변경하는 기능
        update: async (id, location, state) => {
            // 변경된 위치 정보와 상태 정보 생성
            const locationRef = doc(database, location.space, location.address);
            const newItemData = {
                location: locationRef,
                state: state,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "items", id), newItemData);
                // TODO - 위치 정보에도 데이터 반영하기
                console.log("[System] 아이템 정보가 성공적으로 변경되었습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 아이템 정보를 변경하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 아이템을 삭제하는 기능
        delete: async (item) => {
            try {
                // 아이템 이미지 삭제
                await deleteObject(ref(storage, `picture/${item.file_name}.*`));

                // 아이템 삭제
                await deleteDoc(doc(database, "items", item.id));

                // TODO - 위치 정보에도 데이터 반영하기

                console.log("[System] 아이템 정보를 성공적으로 삭제하였습니다.");
            }
            catch (error) {
                console.error("[Error] 아이템 정보를 삭제하는데 실패하였습니다.");
                return error.code;
            }
        }
    },

    // 입고라인 관련 API
    incoming: {
        // 하나의 입고라인 데이터 얻는 기능
        getOne: async (id) => {
            try {
                const docSnapshot = await getDoc(doc(database, "incomings", id));

                // 입고라인 데이터 가공
                // 입고라인 데이터가 있는 지 확인하기
                if (docSnapshot.exists()) {
                    let incoming = { id: docSnapshot.id, ...docSnapshot.data() };

                    // 아이템이 있으면 정보 가져오기
                    const itemRef = incoming.item;
                    if (itemRef) {
                        const item = await API.item.getOne(itemRef.id);
                        incoming = {
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

        // 모든 입고라인 데이터 얻는 기능
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

        // 입고라인 상태를 업데이트하는 기능
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
        addItem: async (item) => {
            // 변경된 상태 정보 생성
            const newIncomingData = {
                item: item,
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "incomings", item.id), newIncomingData);
                console.log("[System] 입고라인에 아이템을 성공적으로 추가하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 입고라인에 아이템을 추가하는데 실패하였습니다.");
                return error.code;
            }
        },

        // 입고라인에 아이템을 제거하는 기능 (**state 변경은 포함 안됨**)
        removeItem: async (id) => {
            // 삭제 명령어가 포함된 정보 생성
            const removeItemData = {
                item: deleteField(),
            };

            // 변경 정보 업로드 하기
            try {
                await updateDoc(doc(database, "incomings", id), removeItemData);
                console.log("[System] 입고라인에 아이템을 성공적으로 제거하였습니다.");
                return 200;
            }
            catch (error) {
                console.error("[Error] 입고라인에 아이템을 제거하는데 실패하였습니다.");
                return error.code;
            }
        }
    },

    // 작업 공간 관련 API
    workspace: {
        getOne: async (id) => {

        },

        getAll: async () => {

        },

        updateState: async (id, state) => {

        },

        addItem: async (item) => {

        },

        removeItem: async () => {

        }
    },

    // 저장 공간 관련 API
    storage: {
        getOne: async (id) => {

        },

        getAll: async () => {

        },

        updateState: async (id, state) => {

        },

        addItem: async (item) => {

        },

        removeItem: async () => {

        }
    },

    // AGV 로봇 관련 API
    robot: {
        getOne: async (id) => {

        },

        getAll: async () => {

        },

        updateState: async (id, state) => {

        }
    },

    // AGV 로봇 명령어 관련 API
    command: {
        getAll: async () => {

        },
        getLa
    }
}

// Export
export { API as LOGIS_API };