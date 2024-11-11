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
      <!-- Basement Viewer -->
      <div class="container mt-3">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="i in 6" :key="i">
            <div class="card storage-card-box">
              <div class="card-body">
                <!-- Card Header -->
                <div class="storage-card-content pb-2">
                  <div class="storage-item-id">#00000000</div>
                  <div class="storage-label">A / 0</div>
                </div>

                <!-- Item Image -->
                <div class="text-center mb-2">
                  <img src="@/assets/images/emptyBox.png" alt="Item Image"
                       class="img-fluid storage-item-image">
                </div>

                <!-- Color Info -->
                <div class="text-center storage-item-color-info mb-2 ">None</div>

                <!-- Storage State -->
                <div class="text-center storage-state mb-3">
                  Empty Space
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
  font-weight: 600;
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
