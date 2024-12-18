<script setup>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { COMMAND_API } from "@/utilities/firebaseCommandAPI.js";
import { Color } from "@/utilities/colorModule.js";
import { useUserStore } from "@/stores/user.js";

// 라우터 초기화
const router = useRouter();

// 사용자 정보 받기
const userStore = useUserStore();
const userData = userStore.getUserData;

// 새로운 변수
const loadAll = ref(false);

// 완료된 명령어 받아오기
const completedCommands = ref([]);

const getCompletedCommands = async () => {
  if (userData.name === '') {
    await router.push({name: "blocked"});
  }

  let result = await COMMAND_API.command.getDone();
  if (result === "permission-denied") {
    await router.push({name: "blocked"});
  }

  if (result.length > 0) {
    result.sort((first, second) => second.datetime - first.datetime);
  }
  // console.log(result);
  completedCommands.value = result;
  loadAll.value = true;
}

getCompletedCommands();
const intervalId = setInterval(getCompletedCommands, 1000);
onUnmounted(() => {
  clearInterval(intervalId);
});

// 명령어를 삭제하는 Handler
const deleteCommand = async (command) => {
  const result = await COMMAND_API.command.delete(command);
  if (result === "permission-denied") {
    await router.push({name: "blocked"});
  }
}
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="text-start mt-4 ms-4 title-box">
        Completed Commands
      </div>

      <div class="container mt-4">
        <div v-for="command in completedCommands" :key="command.id"
             class="d-flex justify-content-center align-items-center overflow-auto no-scrollbar pt-2 pb-2 command-box mb-3">
          <!-- Robot ID and State -->
          <div class="ms-2 d-flex justify-content-start align-items-center command-state-box">
            <div class="d-flex justify-content-center align-items-center pt-4 pb-4 ps-4 pe-4 command-robot-id"
                 :style="{ backgroundColor: command.robot === 'A' ? 'var(--main-left-color)' : 'var(--main-right-color)'}">
              {{ command.robot }}
            </div>

            <div class="flex justify-content-center align-items-center command-state-text text-truncate ps-3 pe-3">
              <div class="text-truncate command-state-id">
                {{ command.id }}
              </div>
              <div class="text-truncate command-state-time">
                {{ command.datetime_data.toLocaleString() }}
              </div>
              <div class="text-truncate mt-1">
                {{ command.state }}
              </div>
            </div>
          </div>

          <!-- Item Information -->
          <div class="ms-4 ps-3 pe-3 item-box">
            <div class="pt-2 pb-2  item-info-box">
              <!-- Item ID -->
              <div class="item-id text-truncate">
                {{ command.item.id }}
              </div>

              <!-- Color Info -->
              <div class="mt-2 text-center ps-4 pe-4 item-color-info text-truncate"
                   :style="{
                  backgroundColor: Color.colorDataToHex(command.item.color),
                   color: Color.getTextColor(command.item.color)
                }">
                {{ Color.colorDataToHex(command.item.color) }}
              </div>
            </div>
          </div>

          <!-- Location Information -->
          <div class="ms-2 flex align-content-center location-box-container">
            <div class="d-flex justify-content-center align-items-stretch mb-2">
              <div class="location-box d-flex justify-content-between align-items-center w-100">
                <div class="location-box location text-truncate">Current</div>
                <div class="location-box space text-truncate">{{ command.item.location.space }}</div>
                <div class="location-box address text-truncate">{{ command.item.location.address }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-stretch">
              <div
                  class="location-box location-box-destination d-flex justify-content-between align-items-center w-100">
                <div class="location-box location-box-destination location text-truncate">Destination</div>
                <div class="location-box space-destination text-truncate">{{ command.destination.space }}</div>
                <div class="location-box address-destination text-truncate">{{ command.destination.address }}</div>
              </div>
            </div>
          </div>

          <!-- Delete Button -->
          <div class="d-flex flex-column">
            <button class="btn rounded-btn btn-danger" :disabled="command.state === 'progress'"
                    @click="() => { deleteCommand(command) }">
              <span class="ps-2 pe-2 material-symbols-sharp delete-icon">
                delete
              </span>
            </button>
          </div>
        </div>

        <div v-if="loadAll && completedCommands.length === 0" class="page-container">
          <span class="ps-2 pe-2 material-symbols-sharp nothing-icon">
                mood_bad
          </span>
          <div class="nothing-message">There is nothing here!</div>
        </div>

        <div v-if="!loadAll" class="loading-box">
          <img src="@/assets/images/loadingImage.gif" alt="Loading" draggable="false">
        </div>
      </div>

    </main>
    <footer class="footer-layout">
      <copyright-box />
    </footer>
  </div>
</template>

<style scoped>
.command-box {
  width: 100%;

  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.command-state-box {
  width: auto;

  background-color: var(--black-finaly-background);
  border-radius: 20px;
}

.command-robot-id {
  height: 100%;

  font-size: 2.2rem;
  font-weight: 700;

  background-color: var(--main-left-color);
  border-radius: 20px;
}

.command-state-text {
  width: 15vw;

  font-size: 1.2rem;
  font-weight: 600;
}

.command-state-id {
  font-size: 1.2rem;
  font-weight: 700;
}

.command-state-time {
  font-size: 0.8rem;
  font-weight: 500;
}

.item-box {
  width: 16vw;
  height: auto;

  background-color: var(--black-finaly-background);
  border-radius: 20px;
}

.item-info-box {
  width: 100%;
}

.item-id {
  width: 100%;

  font-size: 1.0rem;
  font-weight: 600;
}

.item-color-info {
  background-color: #000000;
  border: 2px solid var(--white-background);
  border-radius: 15px;

  color: var(--white-font);
  font-size: 1rem;
  font-weight: 700;
}

.location-box-container {
  width: 28vw;
}

.location-box {
  background-color: var(--black-current-background);
  border-radius: 20px;

  padding: 0.5vh 0.6vw;
  margin: 0 1vw;

  align-content: center;

  color: var(--white-font);
  font-size: 1.2rem;
  font-weight: 700;
}

.location-box-destination {
  background-color: var(--black-target-background);
}

.location {
  margin: 0 0;

  color: var(--white-font);
}

.space {
  background-color: var(--black-current-finaly-background);

  font-size: 1.1rem;
  font-weight: 400;
}

.space-destination {
  background-color: var(--black-target-finaly-background);

  font-size: 1.1rem;
  font-weight: 400;
}

.address {
  background-color: var(--black-current-finaly-background);

  font-size: 1.1rem;
  font-weight: 400;
}

.address-destination {
  background-color: var(--black-target-finaly-background);

  font-size: 1.1rem;
  font-weight: 400;
}

.delete-icon {
  margin: 3px 0 0 -1px;
  font-size: 2rem;
  color: var(--white-font);
}

.page-container {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10vh 0;
}

.nothing-message {
  font-size: 3rem;
  font-weight: 700;
  color: var(--white-30-font);
}

.nothing-icon {
  margin: 3px 0 0 -1px;
  font-size: 8rem;
  color: var(--white-30-font);
}
</style>
