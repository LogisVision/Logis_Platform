<script setup>
import { useRoute, useRouter } from 'vue-router';
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';
import { Color } from "@/utilities/colorModule.js";

import { ref } from 'vue';
import { LOGIS_API } from "@/utilities/firebaseAPI.js";

// 라우터 초기화
const route = useRoute();
const router = useRouter();

// 새로운 변수
const newColorHex = ref('#000000');
const newColor = ref({ red: 0, green: 0, blue: 0});
const newImage = ref(null);
const newImageURL = ref('');

// 이미지 미리보기
const previewImage = async (event) => {
  const file = event.target.files[0];
  if (file) {
    newImage.value = file;
    newImageURL.value = URL.createObjectURL(file);
  }

  // 이미지 대표 색상 얻어오기
  const color = await Color.getPrimaryColor(newImageURL.value);
  newColorHex.value =  Color.colorDataToHex(color);
  newColor.value = color;
};

// 대기 위치 선택 링크로 이동하는 Handler
const moveToWaitList = () => {
  router.push({
    name: 'waitlist',
    query: {
      option: 'new',
    },
  });
}

// 색상 선택 값 반영 Handler
const changeColor = () => {
  newColor.value = Color.colorHexToData(newColorHex.value);
  console.log(newColor.value);
  console.log(newColorHex.value);
  console.log("[System] 새로운 색상으로 반영되었습니다.");
};

// 아이템을 새롭게 만들어서 추가하는 Handler
const createNewItem = async () => {
  const newLocation = { space: route.query.space, address: route.query.address, };
  const result = await LOGIS_API.item.add(newColor.value, newLocation, newImage.value);
  console.log(result);

  await router.push({name: 'waitlist',});
}
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="text-start mt-4 ms-4 title-box">
        Create a new item
      </div>

      <div class="container mt-3">
        <div class="row">
          <!-- 대기 장소 및 이미지 파일 선택 -->
          <div class="col-12 mb-4">
            <div class="card item-card-box">
              <div class="card-body d-flex justify-content-center align-items-center">
                <!-- Location -->
                <div class="location-box d-flex justify-content-between align-items-center">
                  <div class="location-box location text-truncate">New Wait Location</div>
                  <div class="location-box space text-truncate">{{ route.query.space }}</div>
                  <div class="location-box address text-truncate">{{ route.query.address }}</div>
                </div>

                <!-- Options -->
                <div class="row justify-content-center">
                  <div class="align-self-end">
                    <button class="btn btn-secondary text-truncate rounded-btn location-btn" @click="moveToWaitList">
                      Select
                    </button>
                  </div>
                </div>
              </div>

              <div class="card-body d-flex justify-content-center align-items-center">
                <input id="product-image" type="file" class="form-control-file"
                       accept="image/*" @change="previewImage"/>
              </div>
            </div>
          </div>

          <!-- 결과 및 색상 선택 -->
          <div class="col-12 mb-4">
            <div class="card item-card-box">
              <div class="card-body">
                <!-- Item Image -->
                <div class="col mb-3 d-flex flex-column justify-content-center align-items-center">
                  <img v-if="!newImageURL" src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid item-image">
                  <img v-else :src="newImageURL" alt="New Item Image"
                       class="img-fluid item-image">
                </div>

                <!-- Color Info -->
                <div class="d-flex align-items-center item-color-box">
                  <input type="color" class="form-control form-control-color item-color-select" id="myColor"
                         v-model="newColorHex" @change="changeColor">
                  <div class="d-flex item-color-text align-items-center">{{ newColorHex }}</div>
                </div>

                <!-- Options -->
                <div class="row mt-3 justify-content-center">
                  <div class="col-12 align-self-end">
                    <button class="btn btn-success w-100 text-truncate rounded-btn"
                            :disabled="(!route.query.space || !route.query.address || !newImage)"
                            @click="createNewItem">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
.location-box {
  background-color: var(--black-new-background);
  border-radius: 20px;

  padding: 0.5vh 0.6vw;
  margin: 0 1vw;

  align-content: center;

  color: var(--white-font);
  font-size: 1.2rem;
  font-weight: 700;
}

.location {
  margin: 0 0;

  color: var(--white-font);
}

.space {
  background-color: var(--black-new-finaly-background);

  font-size: 1.1rem;
  font-weight: 400;
}

.address {
  background-color: var(--black-new-finaly-background);

  font-size: 1.1rem;
  font-weight: 400;
}

.location-btn {
  padding: 1vh 3vw;
  margin: 0 1vw;

  border-radius: 30px;

  color: var(--white-font);
  font-size: 1.2rem;
  font-weight: 600;
}

.item-card-box {
  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.item-image {
  width: 40%;
  max-width: 300px;

  border-radius: 20px;
}

.item-color-box {
  width: fit-content;
  height: 6vh;

  margin: 0 auto;

  border-radius: 30px;
  background-color: var(--black-background);
}

.item-color-select {
  width: 14vw;
  height: 6vh;

  --webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-color: transparent;
  border: none;
}

.item-color-select::-webkit-color-swatch {
  border-radius: 30px;
  border: none;
}

.item-color-text {
  width: auto;
  height: 6vh;

  margin: 1vh 2vw 1vh 1vw;

  color: var(--white-font);
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
