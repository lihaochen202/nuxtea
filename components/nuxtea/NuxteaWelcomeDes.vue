<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon?: string
  iconHover?: string
  darkIcon?: string
  darkIconHover?: string
}>()

const isRenderIcon = computed(() => props.icon || props.iconHover || props.darkIcon || props.darkIconHover)
</script>

<template>
  <div flex="~ items-center gap-4" class="welcome-des">
    <div v-if="isRenderIcon" flex="shrink-0">
      <div class="icon">
        <img class="dark:hidden" :src="icon" alt="icon">
        <img class="hidden dark:block" :src="darkIcon" alt="icon">
      </div>
      <div class="icon-hover hidden">
        <img class="dark:hidden" :src="iconHover" alt="icon">
        <img class="hidden dark:block" :src="darkIconHover" alt="icon">
      </div>
    </div>
    <div flex="1">
      <h3 text="xl" font="semibold">
        {{ title }}
      </h3>
      <p text="gray-700 dark:gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.welcome-des:hover .icon {
  display: none;
}
.welcome-des:hover .icon-hover {
  display: block;
}
</style>
