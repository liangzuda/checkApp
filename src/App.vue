<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouteCacheStore } from '@/stores'

const { t } = useI18n()

useHead({
  title: () => t('app.name'),
  meta: [
    {
      name: 'description',
      content: () => t('app.description'),
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#0B0A0A' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const routeCacheStore = useRouteCacheStore()

const keepAliveRouteNames = computed(() => {
  return routeCacheStore.routeCaches.filter(
    name => !['check', 'history'].includes(name)
  )
})

const mode = computed(() => {
  return isDark.value ? 'dark' : 'light'
})

onMounted(() => {
  let startY = 0

  const start = e => {
    startY = e.touches[0].pageY
  }

  const move = e => {
    const y = e.touches[0].pageY
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop === 0 && y > startY) {
      e.preventDefault()
    }
  }

  document.addEventListener('touchstart', start)
  document.addEventListener('touchmove', move, { passive: false })
})
</script>

<template>
  <van-config-provider :theme="mode">
    <nav-bar />
    <router-view v-slot="{ Component }">
      <section class="app-wrapper">
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" />
        </keep-alive>
      </section>
    </router-view>
    <tab-bar />
  </van-config-provider>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  position: relative;
  /* padding: 16px; */
}
</style>
