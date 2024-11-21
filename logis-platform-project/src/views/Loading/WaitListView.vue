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
const title = ref('Items in Wait List');

// 제목 변경하기
const changeTitle = () => {
  if (route.query.option === 'select') {
    title.value = 'Please select an item to storage';
  }
  else if (route.query.option === 'new') {
    title.value = 'Please select an item to wait';
  }
  else {
    title.value = 'Items in Wait List';
  }
}

// 입고라인 데이터 받아오기
const incomings = ref([]);

const getIncomes = async () => {
  const result = await LOGIS_API.incoming.getAll();
  console.log(result);
  incomings.value = result;
  loadAll.value = true;
}

changeTitle();
getIncomes();

// 새로운 명령어 만드는 링크로 이동하는 handler
const moveToNewCommand = (item_id, address) => {
  router.push({
    name: 'new-command',
    query: {
      itemID: item_id,
      space: 'storages',
      address: address,
    },
  });
};

// 새로운 아이템 만드는 링크로 이동하는 handler
const moveToNewItem = (address) => {
  router.push({
    name: 'new-item',
    query: {
      space: 'incomings',
      address: address,
    },
  });
};

// 입고 라인에 있는 아이템을 삭제하는 handler
const deleteItem = async (item_data) => {
  const result = await LOGIS_API.item.delete(item_data);
  console.log(result);
  router.go(0);
}
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="text-start mt-4 ms-4 title-box">
        {{ title }}
      </div>

      <div class="container mt-4">
        <div class="row flex-wrap overflow-auto no-scrollbar">
          <div class="col-4 mb-2" v-for="income in incomings" :key="income.id">
            <div class="wait-list-box">
              <div class="mb-2 d-flex align-items-center">
                <!-- Item Image -->
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid wait-item-image"
                       :style="{opacity: 0}">

                  <img src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid wait-item-image wait-item-image-background"
                       :style="{opacity: (imageLoad && income.item) ? 0.3 : 1}">
                  <img v-if="income.item" :src="(income.item_data?.image_url)" alt="Item Image"
                       class="img-fluid wait-item-image wait-item-image-foreground"
                       @load="imageLoad = true">
                </div>

                <!-- Item Info -->
                <div class="ms-3 me-3 wait-item-info-box">
                  <!-- Item ID -->
                  <div v-if="income.item" class="wait-item-id text-truncate">
                    {{ income.item_data?.id }}
                  </div>
                  <div v-else class="wait-item-id text-truncate">None</div>

                  <!-- Color Info -->
                  <div v-if="income.item" class="mt-2 text-center wait-item-color-info text-truncate"
                       :style="{
                  backgroundColor: (income.item_data?.color_hex),
                  color: (income.item_data?.text_color_hex)
                   }">
                    {{ income.item_data?.color_hex }}
                  </div>
                  <div v-else class="mt-2 text-center wait-item-color-info text-truncate">None</div>
                </div>
              </div>

              <!-- 상태 표시 및 버튼 부분 -->
              <div v-if="route.query.option === 'select'">
                <div v-if="income.state === 'income'" class="col-12 align-self-end">
                  <button class="btn btn-success w-100 text-truncate rounded-btn"
                  @click="() => { moveToNewCommand(income.item_data?.id, route.query.storageID) }">
                    Select
                  </button>
                </div>
                <div v-else-if="income.state === 'progress'" class="col-12 align-self-end">
                  <button class="btn btn-dark w-100 text-truncate rounded-btn" disabled>Progress...</button>
                </div>
                <div v-else-if="income.state === 'empty'" class="col-12 align-self-end">
                  <button class="btn btn-light w-100 text-truncate rounded-btn" disabled>Empty</button>
                </div>
              </div>
              <div v-else-if="route.query.option === 'new'">
                <div v-if="income.state === 'income'" class="col-12 align-self-end">
                  <button class="btn btn-light w-100 text-truncate rounded-btn" disabled>
                    Income
                  </button>
                </div>
                <div v-else-if="income.state === 'progress'" class="col-12 align-self-end">
                  <button class="btn btn-dark w-100 text-truncate rounded-btn" disabled>Progress...</button>
                </div>
                <div v-else-if="income.state === 'empty'" class="col-12 align-self-end">
                  <button class="btn btn-success w-100 text-truncate rounded-btn"
                          @click="() => { moveToNewItem(income.id) }">
                    Select
                  </button>
                </div>
              </div>
              <div v-else>
                <div class="col-12 align-self-end">
                  <div v-if="income.state === 'income'" class="d-flex col-12 align-self-end">
                    <button class="btn btn-success col-9 text-truncate rounded-btn" disabled>Income</button>
                    <button class="btn btn-danger w-100 text-truncate rounded-btn ms-2 p-1" @click="() => { deleteItem(income.item_data) }">
                      <span class="material-symbols-sharp delete-icon">
                        delete
                      </span>
                    </button>
                  </div>
                  <div v-else-if="income.state === 'progress'" class="col-12 align-self-end">
                    <button class="btn btn-dark w-100 text-truncate rounded-btn" disabled>Progress...</button>
                  </div>
                  <div v-else-if="income.state === 'empty'" class="col-12 align-self-end">
                    <button class="btn btn-light w-100 text-truncate rounded-btn" disabled>Empty</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!loadAll" class="loading-box">
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
.wait-list-box {
  width: 100%;

  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.wait-item-image {
  max-width: 100px;
  border-radius: 20px;
}

.wait-item-image-background {
  position: absolute;
  z-index: 0;
}

.wait-item-image-foreground {
  position: absolute;
  z-index: 1;
}

.wait-item-info-box {
  width: 50%;
}

.wait-item-id {
  font-size: 1.2rem;
  font-weight: 600;
}

.wait-item-color-info {
  background-color: #000000;
  border: 2px solid var(--white-background);
  border-radius: 15px;

  color: var(--white-font);
  font-size: 1rem;
  font-weight: 700;
}

.delete-icon {
  position: absolute;
  transform: translateX(-50%) translateY(-48%);

  font-size: 1.3rem;
  color: var(--white-font);
}
</style>
