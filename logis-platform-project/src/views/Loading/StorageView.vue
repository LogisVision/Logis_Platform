<script setup>
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { ref } from 'vue';
import { LOGIS_API } from '@/utilities/firebaseAPI.js';

// 저장 공간 데이터 받아오기
const storages = ref([]);
const loadAll = ref(false);

const getStorages = async () => {
  const result = await LOGIS_API.storage.getAll();
  console.log(result);
  storages.value = result;
  loadAll.value = true;
}

getStorages();
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
                <div class="storage-card-content pb-2">
                  <div v-if="storage.item" class="storage-item-id">{{ storage.item_data && storage.item_data.id }}</div>
                  <div v-else class="storage-item-id">None</div>

                  <div class="storage-label">{{ storage.id }}</div>
                </div>

                <!-- Item Image -->
                <div class="text-center mb-2">
                  <img v-if="storage.item" :src="(storage.item_data && storage.item_data.image_url)" alt="Item Image"
                       class="img-fluid storage-item-image">
                  <img v-else src="@/assets/images/emptyBox.png" alt="Empty"
                       class="img-fluid storage-item-image">
                </div>

                <!-- Color Info -->
                <div v-if="storage.item" class="text-center storage-item-color-info mb-2"
                     :style="{ backgroundColor: (storage.item_data && storage.item_data.color_hex) }">
                  {{ storage.item_data && storage.item_data.color_hex }}
                </div>
                <div v-else class="text-center storage-item-color-info mb-2">
                  None
                </div>

                <!-- Storage State -->
                <div class="text-center storage-state mb-3">
                  {{ storage.state }}
                </div>

                <!-- Options -->
                <div class="row mt-2 justify-content-center">
                  <div class="col-6 align-self-end">
                    <button class="btn btn-warning w-100 text-truncate rounded-btn">Change</button>
                  </div>
                  <div class="col-6 align-self-end">
                    <button class="btn btn-danger w-100 text-truncate rounded-btn">Empty</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!loadAll" class="d-flex justify-content-center align-items-center" style="height: 100%;">
            <img src="@/assets/images/loadingImage.gif" alt="Loading">
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

.storage-card-content {
  display: flex;
  justify-content: space-between;
}

.storage-item-id {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -2px;
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

.rounded-btn {
  border-radius: 20px;
}
</style>
