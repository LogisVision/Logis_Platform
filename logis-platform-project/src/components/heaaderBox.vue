<script setup>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Auth_API } from "@/utilities/firebaseAuthAPI.js";

// 사용자 정보 받기
const auth = getAuth();
const userData = ref(null);
const userName = ref(null);

// 현재 세션 불러오기
onAuthStateChanged(auth, (user) => {
  if (auth) {
    userData.value = user;
    // console.log(userData.value);
    getUserName();
  }
});

// 이름 얻어오기
const getUserName = async () => {
  if (userData.value) {
    userName.value = await Auth_API.emailToName(userData.value.email);
  }
};
</script>

<template>
  <div v-if="!userData" class="login-box">
    <div style="margin-right: 5px;">Welcome to Logis Vision!</div>
  </div>
  <div v-else class="login-box">
    <div style="margin-right: 5px;">Hi, </div>
    <div style="font-weight: 500;">{{ userName }}!</div>
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  flex-direction: row;

  font-weight: 300;
  margin-right: 30px;
}
</style>