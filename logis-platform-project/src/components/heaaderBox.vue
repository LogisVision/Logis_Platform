<script setup>
import { ref } from 'vue';
import { getAuth } from "firebase/auth";
import { Auth_API } from "@/utilities/firebaseAuthAPI.js";

// 새로운 변수 선언
const auth = getAuth();
const user = auth.currentUser;
console.log(user);

// 사용자 정보 받아오기
// const users = ref([]);
//
// const getUsers = async () => {
//   const result = await Auth_API.getUserInfo();
//   console.log(result);
//   users.value = result;
// };

// getUsers();

// 이메일로 이름 얻어오기
// const emailToName = (targetEmail) => {
//   for (const user in users.value) {
//     if (user.email === targetEmail) {
//       return user.name;
//     }
//   }
//   return "None";
// };
</script>

<template>
  <div class="login-box">
    <div style="margin-right: 5px;">Hi, </div>
<!--    <div v-if="user" style="font-weight: 500;">{{ user.email }}!</div>-->
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