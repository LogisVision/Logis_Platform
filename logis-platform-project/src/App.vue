<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from "@/stores/user.js";

// 라우터 초기화
const route = useRoute();
const router = useRouter();

// pinia 초기화
const userStore = useUserStore();
const isLoggedIn = userStore.getIsLogin;

</script>

<template>
  <div class="platform-main">
    <div class="platform-side">
      <!-- Main Logo -->
      <div>
        <img src="./assets/logos/Black_Theme@3x.png" class="main-logo" alt="Logis Vision Logo"  draggable="false"
             @click="router.push({ name: 'home' })"/>
      </div>
      <!-- Side Buttons -->
      <ul class="side-button-list">
        <li class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'home' }"
                      :class="{ 'side-button-active': route.name === 'home' }">
            Home
          </RouterLink>
        </li>
        <li class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'device' }"
                      :class="{ 'side-button-active': route.name === 'device' }">
            Device
          </RouterLink>
        </li>
        <li v-if="isLoggedIn" class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'storage' }"
                      :class="{ 'side-button-active': (route.name === 'storage' || route.name === 'waitlist'
                      || route.name === 'new-item' || route.name === 'workspace')  }">
            Loading
          </RouterLink>
        </li>
        <li v-if="route.name === 'storage' || route.name === 'waitlist'
        || route.name === 'new-item' || route.name === 'workspace'" class="side-second-button-cover">
          <RouterLink class="side-second-button text-truncate" :to="{ name: 'storage' }"
                      :class="{ 'side-second-button-active': route.name === 'storage' }">
            Storage
          </RouterLink>
        </li>
        <li v-if="route.name === 'storage' || route.name === 'waitlist'
        || route.name === 'new-item' || route.name === 'workspace'" class="side-second-button-cover">
          <RouterLink class="side-second-button text-truncate" :to="{ name: 'workspace' }"
                      :class="{ 'side-second-button-active': route.name === 'workspace' }">
            Work Space
          </RouterLink>
        </li>
        <li v-if="route.name === 'storage' || route.name === 'waitlist'
         || route.name === 'new-item' || route.name === 'workspace'" class="side-second-button-cover">
          <RouterLink class="side-second-button text-truncate" :to="{ name: 'waitlist' }"
                      :class="{ 'side-second-button-active': route.name === 'waitlist' }">
            Wait List
          </RouterLink>
        </li>
        <li v-if="route.name === 'storage' || route.name === 'waitlist' || route.name === 'new-item'
         || route.name === 'workspace'" class="side-second-button-cover">
          <RouterLink class="side-second-button text-truncate" :to="{ name: 'new-item' }"
                      :class="{ 'side-second-button-active': route.name === 'new-item' }">
            New Item
          </RouterLink>
        </li>
        <li v-if="isLoggedIn" class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'pending-command' }"
                      :class="{ 'side-button-active': (route.name === 'new-command' || route.name === 'pending-command' || route.name === 'completed-command')  }">
            Command
          </RouterLink>
        </li>
        <li v-if="route.name === 'new-command'" class="side-second-button-cover">
          <RouterLink class="side-second-button text-truncate" :to="{ name: 'new-command' }"
                      :class="{ 'side-second-button-active': route.name === 'new-command' }">
            New
          </RouterLink>
        </li>
        <li v-if="route.name === 'new-command' || route.name === 'pending-command' || route.name === 'completed-command'" class="side-second-button-cover">
          <RouterLink class="side-second-button text-truncate" :to="{ name: 'pending-command' }"
                      :class="{ 'side-second-button-active': route.name === 'pending-command' }">
            Requested
          </RouterLink>
        </li>
        <li v-if="route.name === 'new-command' || route.name === 'pending-command' || route.name === 'completed-command'" class="side-second-button-cover">
          <RouterLink class="side-second-button text-truncate" :to="{ name: 'completed-command' }"
                      :class="{ 'side-second-button-active': route.name === 'completed-command' }">
            Completed
          </RouterLink>
        </li>
        <li class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'logs' }"
                      :class="{ 'side-button-active': route.name === 'logs' }">
            Log
          </RouterLink>
        </li>
        <li v-if="isLoggedIn" class="side-button-cover">
          <RouterLink class="side-button" :to="{ name: 'settings' }"
                      :class="{ 'side-button-active': route.name === 'settings' }">
            Settings
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

  margin: 30px 0 20px 20px;

  object-fit: contain;
  align-self: flex-start;

  cursor: pointer;
}

.side-button-list {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Side Button */
.side-button-cover {
  width: 90%;
  height: auto;

  display: flex;
  justify-content: center;
}

.side-button {
  width: 100%;
  height: auto;

  background-color: var(--black-background);
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 10px 0;

  color: var(--white-font);
  font-size: 1.3rem;
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
  background-color: var(--black-button-active-hover);

  font-weight: 400;
}

/* Side Second Button */
.side-second-button-cover {
  width: 90%;
  height: auto;

  display: flex;
  justify-content: flex-end;
}

.side-second-button {
  width: 60%;
  height: auto;

  background-color: var(--black-background);
  border: none;
  border-radius: 50px;
  padding: 5px 20px;
  margin: 10px 0;

  color: var(--white-font);
  font-size: 1.0rem;
  font-weight: 300;
  text-decoration: none;
  text-align: center;

  cursor: pointer;
  transition: background-color 0.5s ease, font-weight 0.5s ease;
}

.side-second-button:hover {
  background-color: var(--black-button-hover);

  font-weight: 400;
}

.side-second-button:active {
  background-color: var(--black-secondary-button-active);
}

.side-second-button-active {
  background-color: var(--black-secondary-button-active);

  font-weight: 600;
}

.side-second-button-active:hover {
  background-color: var(--black-secondary-button-activ-hover);

  font-weight: 400;
}

</style>
