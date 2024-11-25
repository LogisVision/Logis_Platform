<script setup>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { LOGIS_API } from "@/utilities/firebaseAPI.js";
import { useUserStore } from "@/stores/user.js";

// 라우터 초기화
const router = useRouter();

// 사용자 정보 받기
const userStore = useUserStore();
const userData = userStore.getUserData;

// 새로운 변수
const loadAll = ref(false);

// 로그 불러오기
const logs = ref([]);

const getLogs = async () => {
  let result = await LOGIS_API.log.getAll();
  if (result === "permission-denied") {
    await router.push({name: "blocked"});
  }

  if (result.length > 0) {
    result.sort((first, second) => second.datetime_range.start - first.datetime_range.start);
  }
  logs.value = result;
  loadAll.value = true;
}

getLogs();
const intervalId = setInterval(getLogs, 1000);
onUnmounted(() => {
  clearInterval(intervalId);
});

// 로그 삭제 handler
const deleteLogHandler = async (id) => {
  let result = await LOGIS_API.log.delete(id);
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
      <div class="d-flex flex-row justify-content-start align-items-end">
        <div class="mt-4 ms-4 title-box">
          Demon Server Logs
        </div>
        <div class="d-flex flex-column justify-contents-center align-items-center powered ms-4 mb-1">
          <div class="powered-text">Powered by</div>
          <img src="@/assets/logos/OpenAI.svg" class="openai-logo" alt="OpenAI Logo" draggable="false">
        </div>
      </div>


      <div class="container mt-4">
        <div v-for="log in logs" :key="log.id"
             class="d-flex justify-content-center align-items-center overflow-auto no-scrollbar pt-2 pb-2 log-box mb-3">
          <!-- Log Timetable Information -->
          <div class="ms-2 flex align-content- timetable-box-container">
            <div class="d-flex justify-content-center align-items-stretch mb-2">
              <div class="timetable-box d-flex justify-content-between align-items-center w-100">
                <div class="timetable-box title text-truncate">Start</div>
                <div class="timetable-box time text-truncate">{{ log.datetime_range_data.start?.toLocaleString() }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-stretch">
              <div
                  class="timetable-box end d-flex justify-content-between align-items-center w-100">
                <div class="timetable-box title end text-truncate">End</div>
                <div class="timetable-box time end text-truncate">{{ log.datetime_range_data.end?.toLocaleString() }}</div>
              </div>
            </div>
          </div>

          <!-- Log Type Information -->
          <div class="ms-2 flex align-content-center count-box-container">
            <div
                class="count-box d-flex justify-content-between align-items-center">
              <div class="count-box d-flex flex-column align-items-center">
                <div class="count-box title text-truncate">TOT</div>
                <div class="count-box number text-truncate">{{ log.log_counts.total }}</div>
              </div>
              <div class="count-box info d-flex flex-column align-items-center">
                <div class="count-box info title text-truncate">INF</div>
                <div class="count-box info number text-truncate">{{ log.log_counts.info }}</div>
              </div>
              <div class="count-box warning d-flex flex-column align-items-center">
                <div class="count-box warning title text-truncate">WAN</div>
                <div class="count-box warning number text-truncate">{{ log.log_counts.warning }}</div>
              </div>
              <div class="count-box error d-flex flex-column align-items-center">
                <div class="count-box error title text-truncate">ERR</div>
                <div class="count-box error number text-truncate">{{ log.log_counts.error }}</div>
              </div>
              <div class="count-box critical d-flex flex-column align-items-center">
                <div class="count-box critical title text-truncate">CRI</div>
                <div class="count-box critical number text-truncate">{{ log.log_counts.critical }}</div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="ms-2 description word-wrap multiline-truncate">
            {{ log.description }}
          </div>

          <!-- Delete Button -->
          <button class="btn rounded-btn btn-danger h-100 ms-2 pt-4 pd-4"
                  @click="() => { deleteLogHandler(log.id) }" :disabled="userData.name === ''">
              <span class="ps-2 pe-2 material-symbols-sharp delete-icon">
                delete
              </span>
          </button>
        </div>

        <div v-if="loadAll && logs.length === 0" class="page-container">
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
.powered {
  width: 100px;
}

.log-box {
  width: 100%;

  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.timetable-box-container {
  width: fit-content;
}

.timetable-box {
  background-color: var(--black-current-background);
  border-radius: 20px;

  padding: 0.4vh 0.7vw;
  margin: 0 1vw;

  align-content: center;

  color: var(--white-font);
  font-size: 0.9rem;
  font-weight: 700;
}

.timetable-box.end {
  background-color: var(--black-target-background);
}

.timetable-box.title {
  margin: 0 0;

  color: var(--white-font);
}

.timetable-box.time {
  background-color: var(--black-current-finaly-background);

  font-size: 0.8rem;
  font-weight: 400;
}

.timetable-box.time.end {
  background-color: var(--black-target-finaly-background);

  font-size: 0.8rem;
  font-weight: 400;
}

.count-box-container {
  width: fit-content;
}

.count-box {
  background-color: var(--log-total);
  border-radius: 15px;

  padding: 0.4vh 0.2vw;
  margin: 0 0.3vw;

  color: var(--white-font);
}

.count-box.title {
  width: 2vw;

  text-align: center;
  font-size: 0.6rem;
}

.count-box.number {
  background-color: var(--log-total-number);
  border-radius: 10px;
  width: 80%;

  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
}
.count-box.info {
  background-color: var(--log-info);
}

.count-box.info.number {
  background-color: var(--log-info-number);
}

.count-box.warning {
  background-color: var(--log-warning);
}

.count-box.warning.number {
  background-color: var(--log-warning-number);
}

.count-box.error {
  background-color: var(--log-error);
}

.count-box.error.number {
  background-color: var(--log-error-number);
}

.count-box.critical {
  background-color: var(--log-critical);
}

.count-box.critical.number {
  background-color: var(--log-critical-number);
}

.description {
  width: 25vw;
  height: calc(1.5em * 5 + 0.3em);

  background-color: var(--black-primary-background);
  border-radius: 10px;

  padding: 0.5vh 0.5vw;

  font-size: 0.8rem;
  font-weight: 400;
  color: var(--white-font);
}

.multiline-truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.delete-icon {
  margin: 0 -10px 18px -10px;
  font-size: 1.6rem;
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
