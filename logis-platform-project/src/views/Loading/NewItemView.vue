<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { LOGIS_API } from "@/utilities/firebaseAPI.js";
import { Color } from "@/utilities/colorModule.js";
import { useUserStore } from "@/stores/user.js";

// 라우터 초기화
const route = useRoute();
const router = useRouter();

// 사용자 정보 받기
const userStore = useUserStore();
const userData = userStore.getUserData;

// 새로운 변수
const newColorHex = ref('#000000');
const newColor = ref({ red: 0, green: 0, blue: 0});
const newImage = ref(null);
const newImageURL = ref('');
const uploading = ref(false);

// 이미지 자르기 변수
const cropper = ref(null);
const croppedImage = ref(null);
const croppedImageURL = ref('');

// 이미지 미리보기
const previewImage = async (event) => {
  const file = event.target.files[0];
  if (file) {
    newImage.value = file;
    newImageURL.value = URL.createObjectURL(file);
  }
};

// 이미지 자르기
const getCroppedImage = async () => {
  if (cropper.value) {
    const canvas = cropper.value.getCroppedCanvas();
    croppedImageURL.value = canvas.toDataURL();

    canvas.toBlob((blob) => {
      console.log(newImage.value);
      const fileName = newImage.value.name.split('.')[0] + '.png';
      croppedImage.value = new File([blob], fileName,
          { type: blob.type, lastModified: Date.now() });
      console.log(croppedImage.value);
    });

    // 이미지 대표 색상 얻어오기
    const color = await Color.getPrimaryColor(croppedImageURL.value);
    newColorHex.value =  Color.colorDataToHex(color);
    newColor.value = color;
  }
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
  uploading.value = true;
  const newLocation = { space: route.query.space, address: route.query.address, };
  const result = await LOGIS_API.item.add(newColor.value, newLocation, croppedImage.value);
  console.log(result);

  await router.push({name: 'waitlist',});
}

// 권한이 있는지 확인
const check = async () => {
  if (userData.name === '') {
    await router.push({name: "blocked"});
  }
}

check();
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="d-flex flex-row justify-content-start align-items-end">
        <div class="mt-4 ms-4 title-box">
          Create a new item
        </div>
        <div class="d-flex flex-column justify-contents-center align-items-center powered ms-4 mb-1">
          <div class="powered-text">Powered by</div>
          <img src="@/assets/logos/OpenAI.svg" class="openai-logo" alt="OpenAI Logo" draggable="false">
        </div>
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

              <div class="card-body d-flex justify-content-center align-items-center file-box">
                <!-- 파일 추가 버튼 및 안내문 영역 -->
                <label v-if="!newImage" for="product-image">
                  <span v-if="(!route.query.space || !route.query.address)" class="btn btn-dark rounded-btn file-btn">
                    Please set the location first
                  </span>
                  <span v-else class="btn btn-light rounded-btn file-btn">Select Picture</span>
                </label>

                <!-- 파일 삭제 버튼 -->
                <button v-if="route.query.space && route.query.address && newImage" class="btn btn-danger rounded-btn file-btn" @click="() => { router.go(0) }">
                  Remove
                </button>

                <!-- 파일 이름 -->
                <div v-if="(!route.query.space || !route.query.address)"></div>
                <div v-else-if="newImage" class="file-name ms-3">{{ newImage?.name }}</div>
                <div v-else class="file-name ms-3">No Picture</div>

                <!-- 실제 Input -->
                <input id="product-image" type="file" class="form-control-file file-upload" name="product-image"
                       accept="image/*" @change="previewImage" :disabled="(!route.query.space || !route.query.address)"/>
              </div>
            </div>
          </div>

          <!-- 결과 및 색상 선택 -->
          <div class="col-12 mb-4">
            <div class="card item-card-box">
              <div class="card-body">
                <!-- Item Image -->
                <div class="col mb-3 d-flex flex-row justify-content-center align-items-center">
                  <div class="cropper-box me-4" v-if="newImage">
                    <vue-cropper ref="cropper" v-if="newImageURL" :src="newImageURL"
                                 :aspectRatio="1" :zoomable="false" :auto-crop-area="1"></vue-cropper>
                    <button class="btn btn-secondary mt-3 rounded-btn w-100" @click="getCroppedImage">Crop</button>
                  </div>
                  <img v-if="!croppedImage" src="@/assets/images/empty.png" alt="Empty"
                       class="img-fluid item-image" draggable="false">
                  <img v-else :src="croppedImageURL" alt="New Item Image"
                       class="img-fluid item-image" draggable="false">
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
                            :disabled="(!route.query.space || !route.query.address || !croppedImage || uploading)"
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

      <div v-if="uploading" class="wrapper-box"></div>
      <div v-if="uploading" class="floating-loading-box">
        <img class="img-fluid loading-img" src="@/assets/images/loadingImage.gif" alt="Loading" draggable="false">
        <div class="loading-text">
          Creating new item
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

.file-box {
  background-color: var(--black-finaly-background);
  border-radius: 20px;
}

.file-name {
  font-weight: 500;
  font-size: 1.1rem;
}

.file-upload {
  display: none;
}

.item-card-box {
  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.item-image {
  width: 60%;
  max-width: 300px;

  border-radius: 20px;
}

.cropper-box {
  width: 60%;

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
