<script setup lang="ts">
const countStore = useCountStore()
</script>

<template>
  <div>
    <div @click="countStore.increment">
      count: {{ countStore.count }}, doubleCount: {{ countStore.doubleCount }}
    </div>
    <NuxtWelcome />
  </div>
</template>
