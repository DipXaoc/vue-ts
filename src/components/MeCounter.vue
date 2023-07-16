<script setup lang="ts">
import { calculation, countStep, startTimer } from '../btns'
import { ref } from "vue";
const count = ref(0);

const updateCount = (bool, value)=> {
  calculation(bool, value);
  count.value = calculation(null);
}

const start = ()=> {

}


</script>

<template>
  <div>
    <div class="me-counter__timer">
      <button type="button">{{ count }}</button>
    </div>
    <div class="me-btns">
      <div class="me-btns__block">
        <template v-for="item in Object.keys(countStep).reverse()">
          <div @click="updateCount(true, Number(item))">
            <img src="../assets/btn51.png" />
          </div>
        </template>
      </div>
      <div class="me-btns__block">
        <template v-for="item in countStep">
          <div @click="updateCount(false, item)">
            <img src="../assets/btn51.png" />
          </div>
        </template>
      </div>
    </div>
    <div @click="startTimer">
      Start
    </div>
  </div>
</template>

<style lang="scss">

.me-btns {
  display: flex;
  flex-direction: row;

  &__block {
    display: flex;
    flex-direction: row;
    padding: 0 10px;

    div {
      width: 120px;
      height: 96px;
      background-color: #1b3e49;
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      margin: 0 10px;

      img {
        width: 100%;
        height: 100%
      }
    }
  }
}
</style>