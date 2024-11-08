<script setup>
import {RouterLink, RouterView } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="platform-main">
    <div class="platform-side">
      <!-- Main Logo -->
      <div>
        <img src="./assets/logos/Black_Theme@3x.png" class="main-logo" alt="Logis Vision Logo"/>
      </div>
      <!-- Side Buttons -->
      <ul class="side-button-list">
        <li class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'home' }"
                      :class="{ 'side-button-active': route.name === 'home' }">Home
          </RouterLink>
        </li>
        <li class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'device' }"
                      :class="{ 'side-button-active': route.name === 'device' }">Device
          </RouterLink>
        </li>
        <li class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'load' }"
                      :class="{ 'side-button-active': route.name === 'load' }">Load Base
          </RouterLink>
        </li>
        <li class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'settings' }"
                      :class="{ 'side-button-active': route.name === 'settings' }">Settings
          </RouterLink>
        </li>
      </ul>

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
  height: 100vh;
  width: 22vw;

  position: fixed;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: var(--black-background);
}

.platform-documents {
  height: 100vh;
  width: auto;

  margin-left: 22vw;

  flex-grow: 1;
}

.main-logo {
  width: 80%;
  height: auto;

  margin: 30px 0 20px 15px;

  object-fit: contain;
  align-self: flex-start;
}

.side-button-list {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.side-button-cover {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
}

.side-button {
  width: 90%;
  height: auto;

  background-color: var(--black-background);
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 10px 0;

  color: var(--white-font);
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.side-button:hover {
  background-color: var(--black-button-hover);

  font-weight: 400;
}

.side-button:active {
  background-color: var(--black-button-active);
}

.side-button-active {
  background-color: var(--black-button-active);

  font-weight: 600;
}

.side-button-active:hover {
  background-color: var(--black-button-activ-hover);

  font-weight: 400;
}

</style>
