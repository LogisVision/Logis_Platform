<script setup>
import {useUserStore} from "@/stores/user.js";

// 사용자 정보 받기
const userStore = useUserStore();
const userData = userStore.getUserData;

</script>

<template>
  <div v-if="userData.name === ''" class="login-box">
    <div class="hello-msg">Welcome to Logis Vision!</div>
  </div>
  <div v-else class="login-box">
    <div class="hello-msg">Hi, </div>
    <div class="user-name-msg">{{ userData.name }}!</div>
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  flex-direction: row;

  font-weight: 300;
  margin-right: 30px;
}

.hello-msg {
  margin-right: 5px;
}

.user-name-msg {
  font-weight: 500;
}
</style>