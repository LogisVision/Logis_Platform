<script setup>
import { useRouter } from 'vue-router';

import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';
import { useUserStore } from "@/stores/user.js";

// 라우터 초기화
const router = useRouter();

// 사용자 정보 받기
const userStore = useUserStore();
const userData = userStore.getUserData;

// 권한이 있는지 확인
const check = async () => {
  if (userData.name === '') {
    await router.push({name: "blocked"});
  }
}

check();
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="page-container">
        <span class="ps-2 pe-2 material-symbols-sharp const-icon">
          construction
        </span>
        <div class="const-icon-code">INOP</div>
      </div>
    </main>
    <footer class="footer-layout">
      <copyright-box />
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 22vh 0;
}

.const-icon-code {
  font-size: 4rem;
  font-weight: 700;
  color: var(--white-font);
}

.const-icon {
  margin: 3px 0 0 -1px;
  font-size: 8rem;
  color: var(--white-font);
}
</style>
