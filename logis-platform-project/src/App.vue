<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="platform-main">
    <div class="platform-side">
      <img src="./assets/logos/Black_Theme@3x.png" class="main-logo" alt="Logis Vision Logo"/>

      <button class="test-button">Home</button>
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

.test-button {
  width: 80%;
  height: auto;

  display: flex;
  align-items: center;

  background-color: var(--black-background);

  color: white;
  font-size: 20px;
  font-weight: 400;

  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, font-weight 0.3s ease;
}

.test-button:hover {
  background-color: var(--black-secondary-background);

  font-weight: 600;
}
</style>
