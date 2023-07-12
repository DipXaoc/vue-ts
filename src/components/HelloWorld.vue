<script setup lang="ts">

const props = defineProps<{
  msg: string
}>()

</script>

<template>
  <h1>{{ msg }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
