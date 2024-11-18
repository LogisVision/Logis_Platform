<script setup>
import { useRoute, useRouter } from 'vue-router';
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { ref } from 'vue';
import { LOGIS_API } from '@/utilities/firebaseAPI.js';

// 라우터 초기화
const route = useRoute();
const router = useRouter();

const imageLoad = ref(false);

// 아이템 정보 받아오기
const item = ref(null);

const getItem = async () => {
  const itemID = route.query.itemID;
  const result = await LOGIS_API.item.getOne(itemID);
  console.log(result);
  item.value = result;
};

getItem();

// 최종적으로 새로운 Command를 만들고 Requested Command View로 이동하는 Handler
const createCommand = async () => {
  const itemID = route.query.itemID;
  const destination = {
    address: route.query.address,
    space: route.query.space
  };

  const itemObject = await LOGIS_API.item.getOne(itemID);
  if (itemObject) {
    const result = await LOGIS_API.command.request(itemObject, destination);
    console.log(result);
    await router.push({name: 'pending-command'});
  }
  else {
    // 해당 아이템이 없음
    console.error("[Error] 해당 아이템에 대한 자세한 정보가 없습니다.");
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
        Create a New Command
      </div>

      <div class="container mt-4">
        <div class="row flex-wrap overflow-auto no-scrollbar">
          <div class="col-5 mb-2 ms-4">
            <div class="new-command-box d-flex flex-column justify-content-center align-items-center">
              <div class="mt-4 item-box">
                <div class="d-flex align-items-center">
                  <!-- Item Image -->
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <img v-if="item" :src="(item.image_url)" alt="Item Image" @load="imageLoad = true"
                         class="img-fluid item-image">
                    <img v-if="!imageLoad" src="@/assets/images/empty.png" alt="Empty"
                         class="img-fluid item-image">
                  </div>

                  <div class="ms-3 me-3 item-info-box">
                    <!-- Item ID -->
                    <div class="item-id text-truncate">{{ item?.id }}</div>

                    <!-- Color Info -->
                    <div v-if="item" class="mt-2 text-center item-color-info text-truncate"
                         :style="{
                  backgroundColor: (item?.color_hex),
                  color: (item?.text_color_hex)
                   }">
                      {{ item.color_hex }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 d-flex justify-content-between mb-4">
                <div class="location-box d-flex justify-content-between align-items-center">
                  <div class="location-box location text-truncate">Current</div>
                  <div class="location-box space text-truncate">{{ item?.location_data.space }}</div>
                  <div class="location-box address text-truncate">{{ item?.location_data.address }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2 mb-2 row">
            <div class="d-flex flex-column justify-content-center align-items-center">
      <span class="material-symbols-sharp next-icon">
        arrow_forward_ios
      </span>
            </div>
          </div>
          <div class="col-5 mb-2 row">
            <div class="new-command-box d-flex flex-column justify-content-center align-items-center">
              <div class="mt-4 d-flex justify-content-between mb-4">
                <div class="location-box location-box-destination d-flex justify-content-between align-items-center">
                  <div class="location-box location-box-destination location text-truncate">Destination</div>
                  <div class="location-box space-destination text-truncate">{{ route.query.space }}</div>
                  <div class="location-box address-destination text-truncate">{{ route.query.address }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center" style="margin-top: 3vh">
          <button class="btn btn-success text-truncate rounded-btn create-btn"
                  :disabled="!(route.query.itemID && route.query.space && route.query.address)"
                  @click="createCommand">
            Create
          </button>
        </div>
      </div>
    </main>
    <footer class="footer-layout">
      <copyright-box />
    </footer>
  </div>
</template>

<style scoped>
.new-command-box {
  width: 100%;

  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.item-box {
  width: 80%;

  background-color: var(--black-finaly-background);
  border-radius: 20px;
}

.item-image {
  max-width: 100px;
  border-radius: 20px;
}

.item-info-box {
  width: 50%;
}

.item-id {
  font-size: 1.2rem;
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

.location-box {
  background-color: var(--black-current-background);
  border-radius: 20px;

  padding: 0.5vh 1vw;
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

.next-icon {
  margin: 5px 0 0 -1px;
  font-size: 3rem;
  color: var(--white-font);
}

.create-btn {
  height: 6vh;
  width: 50%;

  border-radius: 50px;
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
