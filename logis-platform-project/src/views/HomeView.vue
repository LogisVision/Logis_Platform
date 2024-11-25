<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { Auth_API } from "@/utilities/firebaseAuthAPI.js";
import { useUserStore } from "@/stores/user.js";

// 라우터 초기화
const router = useRouter();

// 사용자 정보 받기
const userStore = useUserStore();
const userData = userStore.getUserData;

// 새로운 변수 선언
const selectedUser = ref("admin");
const selectedEmail = ref("admin@itdice.net");
const numbers = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
const inputPassword = ref("");

// 사용자 정보 받아오기
const users = ref([]);

const getUsers = async () => {
  const result = await Auth_API.getUserInfo();
  if (result === "permission-denied") {
    await router.push({name: "blocked"});
  }

  users.value = result;
};

getUsers();

// 로그인 관리
const loginHandler = async (email, password) => {
  const result = await Auth_API.login(email, password);
  router.go(0);
  console.log(result);
};

// 로그아웃 관리
const logoutHandler = async () => {
  const result = await Auth_API.logout();
  router.go(0);
  console.log(result);
}
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout d-flex flex-column justify-content-center align-items-center">
      <div class="container mt-3">
        <div class="row">
          <div v-if="userData.name !== ''" class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div class="hello-msg mb-4">Hello, {{ userData.name }}!</div>
          </div>
          <div v-else class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div class="hello-msg mb-4">Hello, {{ selectedUser }}!</div>
            <div class="user-box col-8 text-center pt-3 pb-3 mb-3"
                 v-for="user in users"
                 @click="selectedUser = user.name; selectedEmail = user.email" :class="{'user-box-active': selectedUser === user.name}">
              {{ user.name }}
            </div>
          </div>
          <div class="col-lg-6 login-area d-flex flex-wrap justify-content-center align-items-center">
            <div class="password-text-box col-12 text-center flex-glow-0 flex-shrink-0 mb-2">
              {{'*'.repeat(inputPassword.length)}}
            </div>
            <div class="password-box col-3 flex-glow-0 flex-shrink-0 text-center pt-4 pb-4 m-2"
                 v-for="num in numbers"
                 @click="inputPassword += num">
              {{ num }}
            </div>
            <div class="clear-btn col-3 flex-glow-0 flex-shrink-0 text-center pt-4 pb-4 m-2"
                 @click="inputPassword = ''">
              <span class="ps-2 pe-2 material-symbols-sharp password-icon">
                refresh
              </span>
              <div style="opacity: 0;">.</div>
            </div>
            <div class="password-box col-3 flex-glow-0 flex-shrink-0 text-center pt-4 pb-4 m-2"
                 @click="inputPassword += '0'">
              0
            </div>

            <div v-if="userData.name === ''" class="login-btn col-3 flex-glow-0 flex-shrink-0 text-center pt-4 pb-4 m-2"
                 @click="() => { loginHandler(selectedEmail, inputPassword) }">
              <span class="ps-2 pe-2 material-symbols-sharp password-icon">
                login
              </span>
              <div style="opacity: 0;">.</div>
            </div>
            <div v-else class="logout-btn col-3 flex-glow-0 flex-shrink-0 text-center pt-4 pb-4 m-2"
                 @click="logoutHandler">
              <span class="ps-2 pe-2 material-symbols-sharp password-icon">
                logout
              </span>
              <div style="opacity: 0;">.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer-layout">
      <copyright-box />
    </footer>
  </div>
</template>

<style scoped>
.hello-msg {
  font-size: 2rem;
  font-weight: 700;
}

.login-area {
  height: fit-content;
}

.user-box {
  background-color: var(--black-button-hover);
  border-radius: 25px;

  font-size: 1.5rem;
  font-weight: 500;

  cursor: pointer;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.user-box:hover {
  background-color: var(--black-button-hover-over);
}

.user-box:active {
  background-color: var(--black-button-active);
  font-weight: 700;
}

.user-box-active {
  background-color: var(--black-button-active);
  font-weight: 700;
}

.user-box-active:hover {
  background-color: var(--black-button-active-hover);
  font-weight: 700;
}

.password-text-box {
  height: 5vh;
  background-color: var(--black-button-basic);
  border-radius: 25px;

  font-size: 2rem;
  font-weight: 700;
}

.password-box {
  background-color: var(--black-button-hover);
  border-radius: 25px;

  font-size: 1.5rem;
  font-weight: 500;

  cursor: pointer;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.password-box:hover {
  background-color: var(--black-button-hover-over);
}

.password-box:active {
  background-color: var(--black-new-background);
  font-weight: 700;
}

.clear-btn {
  position: relative;

  background-color: var(--black-current-background);
  border-radius: 25px;

  font-size: 1.3rem;
  font-weight: 500;

  cursor: pointer;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.login-btn {
  position: relative;

  background-color: var(--black-new-background);
  border-radius: 25px;

  font-size: 1.3rem;
  font-weight: 500;

  cursor: pointer;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.logout-btn {
  position: relative;

  background-color: var(--black-warn-background);
  border-radius: 25px;

  font-size: 1.3rem;
  font-weight: 500;

  cursor: pointer;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.password-icon {
  margin: -10px 0 0 0;

  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2rem;
  color: var(--white-font);
}
</style>
