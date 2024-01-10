<script setup lang="ts">
const links = [
  { name: 'chat', icon: 'i-logos-discord-icon?mask' },
  { name: 'twitter', icon: 'i-logos-twitter?mask' },
  { name: 'github', icon: 'i-logos-github-icon?mask' },
]
const resolveLink = (name: string) => `https://${name}.nuxt.dev`

const { locale } = useI18n()
const localeIcon = computed(() => {
  const iconMap: Record<string, string> = {
    en: 'i-icon-park-solid-chinese-one',
    zhCN: 'i-icon-park-solid-english',
  }
  return iconMap[locale.value] ?? ''
})
function toggleLocale() {
  locale.value = locale.value === 'en' ? 'zhCN' : 'en'
}
</script>

<template>
  <footer
    class="relative h-70px w-full"
    flex="~ between-center"
    border="t gray-200 dark:gray-900"
    text="gray-700 dark:gray-300"
    p="x4 sm:x6 lg:x8"
  >
    <a
      absolute="~ center-t"
      class="w-70px text-center"
      bg="white dark:black"
      href="http://nuxt.com"
      target="_blank" rel="noopener noreferrer"
    >
      <i class="i-logos-nuxt-icon inline-block" />
    </a>
    <div text="sm">
      © 2016-{{ new Date().getFullYear() }} Nuxt - MIT License
    </div>
    <ul flex="~ gap-3" text="sm">
      <li v-for="link in links" :key="link.name">
        <a
          target="_blank" rel="noopener noreferrer"
          :href="resolveLink(link.name)"
        >
          <i
            class="block"
            text="hover:black dark:hover:white"
            transition="color-300"
            :class="link.icon"
          />
        </a>
      </li>
      <li>
        <i
          class="block hover:cursor-pointer"
          text="hover:black dark:hover:white"
          transtion="color-300"
          :class="localeIcon"
          @click="toggleLocale"
        />
      </li>
    </ul>
  </footer>
</template>
