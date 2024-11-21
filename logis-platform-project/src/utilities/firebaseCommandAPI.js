// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃ Logis Vision Firebase Command API ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// 필요한 Firebase 라이브러리 불러오기
import {initializeApp} from "firebase/app";

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, serverTimestamp, updateDoc, }
    from "firebase/firestore";

import { getAuth, } from "firebase/auth";

import { firebaseConfig } from "@/security/firebaseKey.js";
import { LOGIS_API } from "@/utilities/firebaseAPI.js";


// Firebase 초기화
const fireApp = initializeApp(firebaseConfig);
const database = getFirestore(fireApp);
const auth = getAuth(fireApp);

// API 정의하는 부분
const API = {
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
                            return {
                                id: command.id,
                                datetime: command.datetime,
                                datetime_data: command.datetime.toDate(),
                                destination: command.destination,
                                item: command.item,
                                robot: command.robot,
                                forward: command.forward,
                                state: "ghost",
                            }
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
                targetCommands = targetCommands.filter(command => command.state === "request");

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

        // 새로운 명령어를 생성하는 기능 (item: map[id, ...], destination: map[space, address])
        request: async (item, destination) => {
            try {
                // 점유 가능한 작업 공간 확인하기
                const workspaces = await LOGIS_API.workspace.getAll();
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
                    await LOGIS_API.item.update(item, item.location_data, "progress");
                    await LOGIS_API.incoming.updateState(item.location_data.address, "progress");
                    await LOGIS_API.workspace.updateState(selectedWorkspace, "progress");
                    await LOGIS_API.storage.updateState(destination.address, "progress");

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
                    await LOGIS_API.item.update(item, item.location_data, "progress");
                    await LOGIS_API.storage.updateState(item.location_data.address, "progress");
                    await LOGIS_API.workspace.updateState(selectedWorkspace, "progress");
                    await LOGIS_API.incoming.updateState(destination.address, "progress");

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
        // (**위치 정보에 반영하는 기능 포함됨**)
        complete: async (command) => {
            if (command.state === "lock") {
                console.error("[Error] 잠긴 명령어를 완료할 수 없습니다!!!");
                return 403;
            }

            try {
                // 아이템 정보 얻어오기
                const item = await LOGIS_API.item.getOne(command.item.id);

                // 목적지에 따라서 아이템 및 위치정보 변경하기
                if (command.destination.space === "workspaces") {
                    await LOGIS_API.item.update(item, command.destination, "progress");
                }
                else if (command.destination.space === "storages") {
                    await LOGIS_API.item.update(item, command.destination, "stored");
                }
                else if (command.destination.space === "incomings") {
                    await LOGIS_API.item.update(item, command.destination, "income");
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
        // (**위치 정보에 반영하는 기능 포함됨**)
        delete: async (command) => {
            try {
                // 삭제하려는 명령어가 선행 명령어 종료를 위해 잠겨있거나, 명령어가 수행중인 경우 삭제할 수 없음
                if (command.state === "progress") {
                    console.error("[Error] 이미 수행 중인 명령어 입니다. 삭제할 수 없습니다.");
                    return 403;
                }
                else if (command.state === "completed") {
                    // 명령어 삭제
                    await deleteDoc(doc(database, "commands", command.id));

                    console.log("[System] 명령어를 성공적으로 삭제하였습니다.");
                    return 200;
                }
                else {
                    // 시작 지점 점유 상태 되돌리기
                    if (command.item.location.space === "incomings") {
                        await LOGIS_API.incoming.updateState(command.item.location.address, "empty");
                    }
                    else if (command.item.location.space === "storages") {
                        await LOGIS_API.storage.updateState(command.item.location.address, "empty");
                    }
                    else if (command.item.location.space === "workspaces") {
                        await LOGIS_API.workspace.updateState(command.item.location.address, "empty");
                    }

                    // 도착 지점 점유 상태 되돌리기
                    if (command.destination.space === "incomings") {
                        await LOGIS_API.incoming.updateState(command.destination.address, "empty");
                    }
                    else if (command.destination.space === "storages") {
                        await LOGIS_API.storage.updateState(command.destination.address, "empty");
                    }
                    else if (command.destination.space === "workspaces") {
                        await LOGIS_API.workspace.updateState(command.destination.address, "empty");
                    }

                    // 아이템 정보 불러오기
                    const item_data = await LOGIS_API.item.getOne(command.item.id);

                    // 아이템의 상태 되돌리기
                    if (item_data.location_data.space === "incomings") {
                        await LOGIS_API.item.update(item_data, item_data.location_data, "income");
                    }
                    else if (item_data.location_data.space === "storages") {
                        await LOGIS_API.item.update(item_data, item_data.location_data, "stored");
                    }
                    else if (item_data.location_data.space === "workspaces") {
                        await LOGIS_API.item.update(item_data, item_data.location_data, "full");
                    }

                    // 명령어 삭제
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
export { API as COMMAND_API };