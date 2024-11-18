<script setup>
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';

import { ref } from 'vue';

const newColor = ref('#000000');
const imageUrl = ref('');

// 이미지 미리보기
const previewImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
  }
}
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">

      <div class="container mt-3">
        <form>
          <label for="myColor" class="form-label">Color picker</label>
          <input type="color" class="form-control form-control-color" id="myColor" v-model="newColor"
                 title="Choose a color" style="width: 100px;">
          <div>{{newColor}}</div>
        </form>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="product-image">Product Image</label>
              <input id="product-image" type="file" class="form-control-file" @change="previewImage"/>
            </div>
          </div>
        </div>
        <div class="row" v-if="imageUrl">
          <div class="col">
            <img :src="imageUrl" alt="Preview" class="img-fluid mt-3"/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-primary">Add Product</button>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card item-card-box">
          <div class="card-body">
            <!-- Item Image -->
            <div class="col mb-2 d-flex flex-column justify-content-center align-items-center">
              <img src="@/assets/images/empty.png" alt="Empty"
                   class="img-fluid item-image">
            </div>

            <!-- Color Info -->
            <div class="text-center item-color-info mb-2">
              None
            </div>

            <!-- Options -->
            <div class="row mt-2 justify-content-center">
              <div class="col-12 align-self-end">
                <button class="btn btn-success w-100 text-truncate rounded-btn">
                  Create
                </button>
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
.item-card-box {
  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.item-image {
  width: 40%;
  max-width: 200px;

  border-radius: 20px;
}

.item-color-info {
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
