<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { calculation } from './btns'
import { ref } from "vue";

const count = ref(0);

const updateCount = (bool)=> {
  calculation(bool);
  count.value = calculation(null);
}

</script>

<template>
  <div>
    <div class="card">
      <button type="button">count is {{ count }}</button>
    </div>
    <div class="me-btns">
      <div class="btn" @click="updateCount(true)">
        <img src="./assets/btn5.png" />
      </div>
      <div class="btn" @click="updateCount(false)">
        <img src="./assets/btn5.png" />
      </div>
    </div>
  </div>
  <HelloWorld msg="Метроном" />
</template>

<style lang="scss">

.me-btns {
  display: flex;
}

.btn {
  width: 120px;
  height: 96px;
  background-color: #1b3e49;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%
  }
}

</style>
