<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { increment, decrement } from './btns'
import { onMounted, ref } from "vue";

const count = ref(increment());

</script>

<template>
  <div>
    <div class="card">
      <button type="button">count is {{ count }}</button>
    </div>
    <div class="me-btns">
      <div class="btn --increment" @click="increment(count)">
        <img src="./assets/btn5.png" />
      </div>
      <div class="btn --decrement" @click="decrement(count)">
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
