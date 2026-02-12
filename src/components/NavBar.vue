<script setup lang="ts">
import { rootRouteList } from '@/config/routes'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

// Show or hide navbar
// If route name is Check or History, hide navbar
const showNavBar = computed(() => {
  const unShowRouteName = ['Home', 'Check', 'History']
  if (route.name && unShowRouteName.includes(route.name)) {
    return false
  }

  return true
})

/**
 * Get page title
 * Located in src/locales/json
 */
const title = computed(() => {
  if (route.name) {
    return t(`navbar.${route.name}`)
  }

  // return t('navbar.Undefined')
  return ''
})

/**
 * Show the left arrow
 * If route name is in rootRouteList, hide left arrow
 */
const showLeftArrow = computed(() => {
  if (route.name && rootRouteList.includes(route.name)) {
    return false
  }

  return true
})

function onBack() {
  if (window.history.state.back) {
    history.back()
  }
  else {
    router.replace('/')
  }
}
</script>

<template>
  <VanNavBar
    v-if="showNavBar" :title="title" :fixed="true" :left-arrow="showLeftArrow" placeholder clickable
    @click-left="onBack"
  />
</template>
