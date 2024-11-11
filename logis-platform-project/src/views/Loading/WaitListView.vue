<script setup>
import copyrightBox from '@/components/copyrightsBox.vue';
import headerBox from '@/components/heaaderBox.vue';
</script>

<template>
  <div class="total-layout">
    <header class="header-layout">
      <header-box />
    </header>
    <main class="main-layout">
      <div class="text-start mt-4 ms-4 title-box">
        Items in Wait List
      </div>

      <div class="container mt-4">
        <div class="row flex-wrap overflow-auto">
          <div class="col-4 mb-2" v-for="i in 8" :key="i">
            <div style="background-color: var(--black-secondary-background); border-radius: 20px;">
              <div class="mb-2 d-flex align-items-center">
                <img src="@/assets/images/emptyBox.png" alt="Item Image" class="img-fluid wait-item-image">
                <div class="ms-3 me-3 wait-item-info-box">
                  <div class="wait-item-id">#00000000</div>
                  <!-- Color Info -->
                  <div class="mt-2 text-center wait-item-color-info">None</div>
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
.title-box {
  width: fit-content;

  padding: 5px 20px;

  background-color: var(--black-secondary-background);
  border: 2px solid var(--white-background);
  border-radius: 40px;

  font-size: 1.3rem;
  font-weight: 600;
}

.wait-item-image {
  width: 35%;

  max-width: 100px;
  border-radius: 20px;
}

.wait-item-info-box {
  width: 100%;
}

.wait-item-id {
  font-size: 1.2rem;
  font-weight: 600;
}

.wait-item-color-info {
  width: 70%;

  background-color: #000000;
  border: 2px solid var(--white-background);
  border-radius: 15px;

  color: var(--white-font);
  font-size: 1rem;
  font-weight: 700;
}
</style>
