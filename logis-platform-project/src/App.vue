<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="platform-main">
    <div class="platform-side">
      <img src="./assets/logos/Black_Theme@3x.png" class="main-logo" alt="Logis Vision Logo"/>
    </div>
    <div class="platform-documents">
      <RouterView/>
    </div>
  </div>
</template>

<style>
.platform-main {
  height: 100vh;
  width: auto;

  display: flex;
}

.platform-side {
  height: auto;
  width: 280px;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: var(--black-background);
}

.platform-documents {
  height: 100vh;
  width: auto;

  flex-grow: 1;
}

.main-logo {
  width: 100%;
  height: auto;

  padding: 20px 60px 20px 20px;

  object-fit: contain;
  align-self: flex-start;
}
</style>
