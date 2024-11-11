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

      <div class="container mt-3">
        <div class="row">
          <div class="col-4 mb-4" v-for="i in 6" :key="i">
            <div class="card load-card-box">
              <div class="card-body">
                <!-- Card Header -->
                <div class="load-card-content pb-2">
                  <div class="load-id">#00000000</div>
                  <div class="load-label">A / 0</div>
                </div>

                <!-- Item Image -->
                <div class="text-center mb-2">
                  <img src="@/assets/images/emptyBox.png" alt="Item Image"
                       class="img-fluid load-item-image">
                </div>

                <!-- Color Info -->
                <div class="text-center load-color-info mb-2 ">None</div>
                <!-- Load State -->
                <div class="text-center load-state mb-3">
                  Empty Space
                </div>

                <!-- Options -->
                <div class="row mt-2 justify-content-center">
                  <div class="col-8">
                    <select class="form-select" id="itemSelection">
                      <option value="" selected>Select an item</option>
                      <option value="item1">Item 1</option>
                      <option value="item2">Item 2</option>
                      <option value="item3">Item 3</option>
                    </select>
                  </div>
                  <div class="col-4 align-self-end">
                    <button class="btn btn-secondary w-100 text-truncate">Decide</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-2">
        <div class="row flex-nowrap overflow-auto">
          <div class="col-3 mb-2" v-for="i in 12" :key="i">
            <div style="background-color: var(--black-secondary-background); border-radius: 20px;">
              <div class="mb-2">
                <img src="@/assets/images/emptyBox.png" alt="Item Image"
                     class="img-fluid wait-item-image">
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
.load-card-box {
  background-color: var(--black-secondary-background);
  border-radius: 20px;
}

.load-card-content {
  display: flex;
  justify-content: space-between;
}

.load-id {
  font-size: 1.5rem;
  font-weight: 600;
}

.load-label {
  color: var(--white-30-font);
  font-size: 1.5rem;
  font-weight: 600;
}

.load-item-image {
  width: 40%;
  max-width: 200px;

  border-radius: 20px;
}

.load-state {
  font-size: 1.2rem;
  font-weight: 600;
}

.load-color-info {
  max-width: 50%;

  background-color: #000000;
  border: 2px solid var(--white-background);
  border-radius: 15px;
  margin: 0 auto;

  color: var(--white-font);
  font-size: 1rem;
  font-weight: 700;
}

.wait-item-image {
  width: 30%;

  max-width: 100px;
  border-radius: 20px;
}
</style>
