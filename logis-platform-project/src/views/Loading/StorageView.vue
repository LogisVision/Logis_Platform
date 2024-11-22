<script setup>
import { useRoute, useRouter } from 'vue-router';
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { ref } from 'vue';
import { LOGIS_API } from '@/utilities/firebaseAPI.js';

// 라우터 초기화
const route = useRoute();
const router = useRouter();

// 새로운 변수
const loadAll = ref(false);
const imageLoad = ref(false);

// 저장 공간 데이터 받아오기
const storages = ref([]);

const getStorages = async () => {
  const result = await LOGIS_API.storage.getAll();
  console.log(result);
  storages.value = result;
  loadAll.value = true;
}

getStorages();
setInterval(getStorages, 1000);

// 선택 화면 이동 Handler
const moveToSelectView = (storage_id) => {
  router.push({
    name: 'waitlist',
    query: {
      option: 'select',
      storageID: storage_id,
    },
  });
}

// 물건 삭제 Handler (***모든 공간에서 삭제됨!!!***)
const deleteItem = async (address, item) => {
  await LOGIS_API.storage.removeItem(address);
  await LOGIS_API.item.delete(item);
  await LOGIS_API.storage.updateState(address, 'empty');
  router.go(0);
}
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <!-- Basement Viewer -->
      <div class="container mt-3">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="storage in storages" :key="storage.id">
            <div class="card storage-card-box">
              <div class="card-body">
                <!-- Card Header -->
                <div class="storage-card-head pb-2">
                  <div v-if="storage.item" class="storage-item-id text-truncate">
                    {{ storage.item_data?.id }}
                  </div>
                  <div v-else class="storage-item-id text-truncate">None</div>

                  <div class="storage-label">{{ storage.id }}</div>
                </div>

                <!-- Item Image -->
                <div class="col mb-2 d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid storage-item-image" draggable="false"
                       :style="{opacity: 0}">

                  <img src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid storage-item-image storage-item-image-background"
                       :style="{opacity: (imageLoad && storage.item) ? 0.3 : 1}" draggable="false">
                  <img v-if="storage.item" :src="storage.item_data?.image_url"
                       alt="Item Image" class="img-fluid storage-item-image storage-item-image-foreground"
                       @load="imageLoad = true" draggable="false">
                </div>

                <!-- Color Info -->
                <div v-if="storage.item" class="text-center storage-item-color-info mb-2"
                     :style="{
                  backgroundColor: (storage.item_data?.color_hex),
                  color: (storage.item_data?.text_color_hex)
                   }">
                  {{ storage.item_data?.color_hex }}
                </div>
                <div v-else class="text-center storage-item-color-info mb-2">
                  None
                </div>

                <!-- Storage State -->
                <div class="text-center storage-state mb-3">
                  {{ storage.state.toUpperCase() }}
                </div>

                <!-- Options -->
                <div v-if="storage.state === 'empty'" class="row mt-2 justify-content-center">
                  <div class="col-12 align-self-end">
                    <button class="btn btn-success w-100 text-truncate rounded-btn"
                    @click="() => { moveToSelectView(storage.id)}">
                      New
                    </button>
                  </div>
                </div>
                <div v-else-if="storage.state === 'stored'" class="row mt-2 justify-content-center">
                  <div class="col-6 align-self-end">
                    <!-- 구현되지 않은 기능-->
                    <button class="btn btn-warning w-100 text-truncate rounded-btn" disabled>Change</button>
                  </div>
                  <div class="col-6 align-self-end">
                    <button class="btn btn-danger w-100 text-truncate rounded-btn"
                            @click="() => { deleteItem(storage.id, storage.item_data) }">
                      Empty
                    </button>
                  </div>
                </div>
                <div v-else class="row mt-2 justify-content-center">
                  <div class="col-12 align-self-end">
                    <button class="btn btn-dark w-100 text-truncate rounded-btn" disabled>...</button>
                  </div>
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
.storage-card-box {
  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.storage-card-head {
  width: 100%;

  display: flex;
  justify-content: space-between;
}

.storage-item-id {
  width: 80%;

  font-size: 1.5rem;
  font-weight: 500;
}

.storage-label {
  color: var(--white-30-font);
  font-size: 1.5rem;
  font-weight: 600;
}

.storage-item-image {
  width: 40%;
  max-width: 200px;

  border-radius: 20px;
}

.storage-item-image-background {
  position: absolute;
  z-index: 0;
  scale: 95%;
}

.storage-item-image-foreground {
  position: absolute;
  z-index: 1;
  scale: 95%;
}

.storage-state {
  font-size: 1.2rem;
  font-weight: 600;
}

.storage-item-color-info {
  max-width: 50%;

  background-color: #000000;
  border: 2px solid var(--white-background);
  border-radius: 15px;
  margin: 0 auto;

  color: var(--white-font);
  font-size: 1rem;
  font-weight: 700;
}
</style>
