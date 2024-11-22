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

// 작업라인 데이터 받아오기
const works = ref([]);

const getWorks = async () => {
  const result = await LOGIS_API.workspace.getAll();
  console.log(result);
  works.value = result;
  loadAll.value = true;
}

getWorks();

// 작업라인에 있는 아이템을 삭제하는 handler
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
        Workspace Item Status
      </div>

      <div class="container mt-4">
        <div class="row flex-column overflow-auto no-scrollbar align-items-center workspace-box">
          <div class="mb-4 workspace-list" v-for="work in works" :key="work.id">
            <div class="workspace-list-box">
              <div class="mb-2 d-flex align-items-center">
                <!-- Item Image -->
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <img src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid workspace-item-image"
                       :style="{opacity: 0}" draggable="false">

                  <img src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid workspace-item-image workspace-item-image-background"
                       :style="{opacity: (imageLoad && work.item) ? 0.3 : 1}" draggable="false">
                  <img v-if="work.item" :src="(work.item_data?.image_url)" alt="Item Image"
                       class="img-fluid workspace-item-image workspace-item-image-foreground"
                       @load="imageLoad = true" draggable="false">
                </div>

                <!-- Item Info -->
                <div class="ms-3 me-3 workspace-item-info-box">
                  <!-- Item ID -->
                  <div v-if="work.item" class="workspace-item-id text-truncate">
                    {{ work.item_data?.id }}
                  </div>
                  <div v-else class="workspace-item-id text-truncate">None</div>

                  <!-- Color Info -->
                  <div v-if="work.item" class="mt-2 text-center workspace-item-color-info text-truncate"
                       :style="{
                  backgroundColor: (work.item_data?.color_hex),
                  color: (work.item_data?.text_color_hex)
                   }">
                    {{ work.item_data?.color_hex }}
                  </div>
                  <div v-else class="mt-2 text-center workspace-item-color-info text-truncate">None</div>
                </div>
              </div>

              <!-- 상태 표시 및 버튼 부분 -->
              <div>
                <div class="col-12 align-self-end">
                  <div v-if="work.state === 'full'" class="d-flex col-12 align-self-end">
                    <button class="btn btn-success col-9 text-truncate rounded-btn" disabled>Full</button>
                    <button class="btn btn-danger w-100 text-truncate rounded-btn ms-2 p-1"
                            @click="() => { deleteItem(work.item_data) }">
                      <span class="material-symbols-sharp delete-icon">
                        delete
                      </span>
                    </button>
                  </div>
                  <div v-else-if="work.state === 'progress'" class="col-12 align-self-end">
                    <button class="btn btn-dark w-100 text-truncate rounded-btn" disabled>Progress...</button>
                  </div>
                  <div v-else-if="work.state === 'empty'" class="col-12 align-self-end">
                    <button class="btn btn-light w-100 text-truncate rounded-btn" disabled>Empty</button>
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
.workspace-box {
  padding: 0 10vw;
}

.workspace-list {
  max-width: 500px;
}

.workspace-list-box {
  width: 100%;

  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.workspace-item-image {
  max-width: 100px;
  border-radius: 20px;
}

.workspace-item-image-background {
  position: absolute;
  z-index: 0;
}

.workspace-item-image-foreground {
  position: absolute;
  z-index: 1;
}

.workspace-item-info-box {
  width: 70%;
}

.workspace-item-id {
  font-size: 1.2rem;
  font-weight: 600;
}

.workspace-item-color-info {
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
