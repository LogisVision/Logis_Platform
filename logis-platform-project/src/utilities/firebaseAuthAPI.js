// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃ Logis Vision Firebase Authentication API ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

import {initializeApp} from "firebase/app";

import {collection, getDocs, getFirestore} from "firebase/firestore";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut, } from "firebase/auth";

import { firebaseConfig } from "@/security/firebaseKey.js";
import { useUserStore } from "@/stores/user.js";

// Firebase 초기화
const fireApp = initializeApp(firebaseConfig);
const database = getFirestore(fireApp);
const auth = getAuth(fireApp);

// pinia 초기화
const userStore = useUserStore();
const setLogin = userStore.login;
const setLogout = userStore.logout;

// Logis Vision의 Firebase Authentication 제어 부분
const API = {
    // 유저 정보 불러오기
    getUserInfo: async () => {
        try {
            // 모든 유저정보 불러오기
            const querySnapshot = await getDocs(collection(database, "users"));
            return querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
        }
        catch (error) {
            console.error("[Error] 알 수 없는 오류!!!");
            return error.code;
        }
    },

    // 이메일을 이름으로 바꾸는 기능 (email: string)
    emailToName: async (email) => {
        try {
            // 모든 유저정보 불러오기
            const querySnapshot = await getDocs(collection(database, "users"));
            const users= querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });

            // 일치하는 이메일 확인하기
            for (const user of users) {
                if (user.email === email) {
                    return user.name;
                }
            }

            return null;
        }
        catch (error) {
            console.error("[Error] 알 수 없는 오류!!!");
            return error.code;
        }
    },

    // 실질적으로 로그인 처리하는 부분 (email: string, password: string)
    loginVerify: async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        }
        catch (error) {
            console.error("[Error] 알 수 없는 오류!!!");
            return error.code;
        }
    },

    // 로그인 관리 기능 (email: string, password: string)
    login: async (email, password) => {
        try {
            // 로그인 시도
            const result = await API.loginVerify(email, password);

            // 로그인 결과 확인
            if (result === true) {
                const name = await API.emailToName(email);
                setLogin(name, email);
                console.log("[System] 로그인 성공");
                return 200;
            }
            else if (result === "auth/invalid-email") {
                console.error("[Error] 이메일 형식이 잘못되었습니다.");
                alert("등록된 이메일 형식이 잘못되었습니다.");
                return 404;
            }
            else if (result === "auth/invalid-credential") {
                console.error("[Error] 사용자 이름이나 비밀번호가 일치하지 않습니다.");
                alert("사용자 이름과 비밀번호가 일치하지 않습니다.");
                return 404;
            }
            else if (result === "auth/user-disabled" || result === "auth/user-not-found" || result === "auth/user-mismatch") {
                console.error("[Error] 해당 사용자 계정은 사용할 수 없습니다.");
                alert("해당 사용자 계정을 사용할 수 없습니다.");
                return 404;
            }
        }
        catch (error) {
            console.error("[Error] 알 수 없는 오류!!!");
            return error.code;
        }
    },

    // 로그아웃
    logout: async () => {
        try {
            setLogout();
            await signOut(auth);
            return true;
        }
        catch (error) {
            console.error("[Error] 알 수 없는 오류!!!");
            return error.code;
        }
    }
}

export { API as Auth_API };
