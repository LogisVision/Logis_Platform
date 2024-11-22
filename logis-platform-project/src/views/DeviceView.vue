<script setup>
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { ref } from 'vue';
import { LOGIS_API } from '@/utilities/firebaseAPI.js'
import { Color } from "@/utilities/colorModule.js";

// 새로운 변수
const loadAll = ref(false);

// AGV 정보 받아오기
const devices = ref([]);

const getDevices = async () => {
  const response = await LOGIS_API.robot.getAll();
  console.log(response);
  devices.value = response;
  loadAll.value = true;
}

getDevices();
setInterval(getDevices, 1000);

// 상태에 따라 이미지 변환하기
const stateImage = (state) => {
  switch (state) {
    case 'waiting':
      return '@/assets/images/AGV_Model_wait.png';
    case 'start':
      return '@/assets/images/AGV_Model_none.png';
    case 'working':
      return '@/assets/images/AGV_Model_work.png';
    case 'moving':
      return '@/assets/images/AGV_Model_work.png';
    case 'done':
      return '@/assets/images/AGV_Model_wait.png';
    default:
      return '@/assets/images/AGV_Model_none.png';
  }
};

// 상태에 따라 Color 값 변환하기
const stateColor = (state) => {
  switch (state) {
    case 'waiting':
      return 'var(--state-waiting)';
    case 'start':
      return 'var(--state-start)';
    case 'working':
      return 'var(--state-working)';
    case 'moving':
      return 'var(--state-moving)';
    case 'done':
      return 'var(--state-done)';
    default:
      return 'var(--state-none)';
  }
};

</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="container mt-3">
        <div class="row">
          <div class="col-lg-6 pb-3" v-for="device in devices" :key="device.id">
            <div class="card device-card-box">
              <div class="card-body">
                <!-- Card Header -->
                <div class="device-card-head pb-2">
                  <div class="device-id"
                       :style="{ backgroundColor: device.id === 'A' ? 'var(--main-left-color)' : 'var(--main-right-color)' }">
                    {{ device.id }}
                  </div>
                  <div class="device-label">Logis Vision AGV</div>
                </div>

                <!-- AGV Image -->
                <div class="device-image-box ps-2 pe-2">
                  <img v-if="device.state === 'waiting' || device.state === 'done'"
                       src="@/assets/images/AGV_Model_none.png" alt="AGV"
                       class="img-fluid" draggable="false" :class="{ 'img-flipped': device.id === 'A'}">
                  <img v-else-if="device.state === 'working' || device.state === 'moving'"
                       src="@/assets/images/AGV_Model_work.png" alt="AGV"
                       class="img-fluid" draggable="false" :class="{ 'img-flipped': device.id === 'A'}">
                  <img v-else src="@/assets/images/AGV_Model_none.png" alt="AGV"
                       class="img-fluid" draggable="false" :class="{ 'img-flipped': device.id === 'A'}">
                </div>

                <!-- Command Type -->
                <div class="col-12 text-center command-type pt-1 pb-1">Pending Command</div>

                <!-- AGV Command -->
                <div class="d-flex justify-content-center align-items-center overflow-auto no-scrollbar pt-2 pb-2 command-box mb-1">
                  <!-- Robot ID and State -->
                  <div class="ms-2 d-flex justify-content-start align-items-center command-state-box">
                    <div class="flex justify-content-center align-items-center command-state-text text-truncate ps-3 pe-3">
                      <div class="text-truncate command-state-id">
                        {{ device.command.id || "None" }}
                      </div>
                      <div class="text-truncate command-state-time">
                        {{ device.command.datetime_data?.toLocaleString() || "No Data" }}
                      </div>
                      <div class="text-truncate mt-1">
                        {{ device.command.state }}
                      </div>
                    </div>
                  </div>

                  <!-- Item Information -->
                  <div class="ms-2 ps-3 pe-3 item-box">
                    <div class="pt-2 pb-2  item-info-box">
                      <!-- Item ID -->
                      <div class="item-id text-truncate">
                        {{ device.command.item?.id || "None" }}
                      </div>

                      <!-- Color Info -->
                      <div v-if="device.command.item" class="mt-1 text-center ps-1 pe-1 item-color-info text-truncate"
                           :style="{
                        backgroundColor: Color.colorDataToHex(device.command.item.color),
                        color: Color.getTextColor(device.command.item.color)
                      }">
                        {{ Color.colorDataToHex(device.command.item.color) }}
                      </div>
                      <div v-else class="mt-1 text-center ps-1 pe-1 item-color-info text-truncate">
                        No data
                      </div>
                    </div>
                  </div>

                  <!-- Location Information -->
                  <div class="ms-2 flex align-content-center location-box-container">
                    <div class="d-flex justify-content-center align-items-stretch mb-2">
                      <div class="location-box d-flex justify-content-between align-items-center w-100">
                        <div class="location-box location text-truncate">Current</div>
                        <div class="location-box space text-truncate">{{ device.command.item?.location.space || "None" }}</div>
                        <div class="location-box address text-truncate">{{ device.command.item?.location.address || "X" }}</div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-stretch">
                      <div
                          class="location-box location-box-destination d-flex justify-content-between align-items-center w-100">
                        <div class="location-box location-box-destination location text-truncate">Destination</div>
                        <div class="location-box space-destination text-truncate">{{ device.command.destination?.space || "None" }}</div>
                        <div class="location-box address-destination text-truncate">{{ device.command.destination?.address || "X" }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- AGV State -->
                <div class="device-state text-center" :style="{ backgroundColor: stateColor(device.state) }">
                  {{ device.state.toUpperCase() }}
                </div>
              </div>
            </div>
          </div>
          <div v-if="!loadAll" class="loading-box">
            <img src="@/assets/images/loadingImage.gif" alt="Loading" draggable="false">
          </div>
        </div>
      </div>
    </main>
    <footer class="footer-layout">
      <copyright-box />
    </footer>
  </div>
</template>

<style scoped>
.device-card-box {
  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.device-card-head {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1vw;
}

.device-id {
  width: fit-content;

  padding: 0.8vh 1.3vw;

  background-color: var(--black-finaly-background);
  border-radius: 15px;

  font-size: 2.2rem;
  font-weight: 500;
}

.device-label {
  color: var(--white-30-font);
  font-size: 1.2rem;
  font-weight: 600;
}

.device-image-box {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.command-type {
  width: 100%;

  background-color: var(--black-finaly-background);
  border-radius: 20px;

  font-size: 0.9rem;
  font-weight: 600;
}

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

.command-state-text {
  width: 10vw;

  font-size: 0.7rem;
  font-weight: 600;
}

.command-state-id {
  font-size: 0.8rem;
  font-weight: 700;
}

.command-state-time {
  font-size: 0.6rem;
  font-weight: 500;
}

.item-box {
  width: 10vw;
  height: auto;

  background-color: var(--black-finaly-background);
  border-radius: 20px;
}

.item-info-box {
  width: 100%;
}

.item-id {
  width: 100%;

  font-size: 0.9rem;
  font-weight: 600;
}

.item-color-info {
  background-color: #000000;
  border: 2px solid var(--white-background);
  border-radius: 15px;

  color: var(--white-font);
  font-size: 0.6rem;
  font-weight: 700;
}

.location-box-container {
  width: 14vw;
}

.location-box {
  background-color: var(--black-current-background);
  border-radius: 20px;

  padding: 0.2vh 0.4vw;
  margin: 0 0.1vw;

  align-content: center;

  color: var(--white-font);
  font-size: 0.8rem;
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

  font-size: 0.7rem;
  font-weight: 400;
}

.space-destination {
  background-color: var(--black-target-finaly-background);

  font-size: 0.7rem;
  font-weight: 400;
}

.address {
  background-color: var(--black-current-finaly-background);

  font-size: 0.7rem;
  font-weight: 400;
}

.address-destination {
  background-color: var(--black-target-finaly-background);

  font-size: 0.7rem;
  font-weight: 400;
}

.delete-icon {
  margin: 3px 0 0 -1px;
  font-size: 1.2rem;
  color: var(--white-font);
}

.device-state {
  width: 100%;

  padding: 1.5vh 0;

  background-color: var(--black-finaly-background);
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
