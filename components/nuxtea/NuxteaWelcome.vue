<script setup lang="ts">
const { t, locale } = useI18n()

const title = ref('')
watch(locale, () => title.value = t('welcome'), { immediate: true })

useHead({
  title,
})
</script>

<template>
  <div
    class="min-h-screen"
    flex="~ col items-center"
    bg="white dark:black"
    text="sm sm:base black dark:white"
  >
    <div
      flex="1 ~ col gap-16"
      w="full lg:960px"
      p="x4 t12 b14"
    >
      <div flex="~ col items-center gap-2">
        <a
          href="http://nuxt.com"
          target="_blank" rel="noopener noreferrer"
        >
          <div text="13" class="i-logos-nuxt-icon" />
        </a>
        <h1 font="semibold" text="4xl sm:5xl">
          {{ t('welcome') }}
        </h1>
      </div>
      <div grid="~ cols-10 gap-6">
        <div
          class="relative gradient-mask-l-green gradient-mask-r-blue"
          grid="col-span-10"
          flex="~ col items-center gap-4"
          p="x4 sm:x22 t58px b8"
          border="1 gradient-white dark:gradient-zinc-900 rounded-xl"
        >
          <div class="absolute left-1/2 -top-58px" un--translate="x-1/2">
            <img display="dark:none" src="/nuxtea/get-started-light.svg">
            <img display="none dark:block" src="/nuxtea/get-started.svg">
          </div>
          <h2 text="2xl" font="semibold">
            Get started
          </h2>
          <p text="center">
            Remove this welcome page by replacing
            <span class="rounded p1" font="bold mono" bg="gray-100 dark:white/10">&lt;NuxteaWelcome /&gt;</span>
            in
            <a class="rounded p1" font="bold mono" bg="gray-100 dark:white/10" href="https://nuxt.com/docs/guide/directory-structure/app" target="_blank">app.vue</a>
            with your own code.
          </p>
        </div>
        <div
          class="relative gradient-mask-r-yellow"
          grid="col-span-10 sm:col-span-5 lg:col-span-6"
          bg="white dark:zinc-900"
          border="~ gray-200 hover:transparent dark:transparent rounded-xl"
        >
          <a href="https://nuxt.com/modules" target="_blank" rel="noopener noreferrer">
            <NuxteaWelcomeDes
              min-h="sm:220px md:180px lg:min"
              p="x5 y6"
              title="Modules"
              description="Discover our list of modules to supercharge your Nuxt project. Created by the Nuxt team and community."
              icon="/nuxtea/modules-light.svg"
              icon-hover="/nuxtea/modules-color-light.svg"
              dark-icon="/nuxtea/modules.svg"
              dark-icon-hover="/nuxtea/modules-color.svg"
            />
          </a>
        </div>
        <div
          grid="col-span-10 lg:col-span-4 lg:row-span-2"
          order="last lg:none"
          bg="white dark:zinc-900"
          border="~ gray-200 hover:transparent dark:transparent rounded-xl"
        >
          <a href="http://nuxt.com.docs" target="_blank" rel="noopener noreferrer">
            <div
              class="welcome-doc"
              flex="~ col sm:row lg:col items-center justify-center gap-y-2"
              p="y6 lg:y7 x5"
            >
              <NuxteaWelcomeDes
                title="Documentation"
                description="We highly recommend you take a look at the Nuxt documentation to level up."
              />
              <div flex="shrink-0" class="icon">
                <img h="32 sm:34" display="dark:none" src="/nuxtea/documentation-light.svg" alt="icon">
                <img h="32 sm:34" display="none dark:block" src="/nuxtea/documentation.svg" alt="icon">
              </div>
              <div flex="shrink-0" class="icon-hover hidden">
                <img h="32 sm:34" display="dark:none" src="/nuxtea/documentation-color-light.svg" alt="icon">
                <img h="32 sm:34" display="none dark:block" src="/nuxtea/documentation-color.svg" alt="icon">
              </div>
            </div>
          </a>
        </div>
        <div
          class="relative gradient-mask-r-blue"
          grid="col-span-10 sm:col-span-5 lg:col-span-6"
          bg="white dark:zinc-900"
          border="~ gray-200 hover:transparent dark:transparent rounded-xl"
        >
          <a href="https://nuxt.com/modules" target="_blank" rel="noopener noreferrer">
            <NuxteaWelcomeDes
              min-h="sm:220px md:180px lg:min"
              p="x5 y6"
              title="Examples"
              description="Explore different way of using Nuxt features and get inspired with our list of examples."
              icon="/nuxtea/examples-light.svg"
              icon-hover="/nuxtea/examples-color-light.svg"
              dark-icon="/nuxtea/examples.svg"
              dark-icon-hover="/nuxtea/examples-color.svg"
            />
          </a>
        </div>
      </div>
    </div>
    <NuxteaWelcomeFooter />
  </div>
</template>

<style scoped>
.welcome-doc:hover .icon {
  display: none;
}
.welcome-doc:hover .icon-hover {
  display: block;
}
</style>
