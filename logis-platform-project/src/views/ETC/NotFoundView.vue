<script setup>
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="page-container">
        <span class="ps-2 pe-2 material-symbols-sharp not-found-icon">
                indeterminate_question_box
        </span>
        <div class="not-found-code">404</div>
        <div class="not-found-message">End of Road!</div>
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

.not-found-code {
  font-size: 7rem;
  font-weight: 700;
  color: var(--white-font);
}

.not-found-message {
  font-size: 2rem;
  color: var(--white-font);
}

.not-found-icon {
  margin: 3px 0 0 -1px;
  font-size: 8rem;
  color: var(--white-font);
}
</style>
