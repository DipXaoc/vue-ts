<script setup lang="ts">

const props = defineProps<{
  msg: string
}>()

</script>

<template>
  <h1 v-html="props.msg" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
