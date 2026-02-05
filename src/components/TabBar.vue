<script setup lang="ts">
import { rootRouteList } from '@/config/routes'

const active = ref(0)
const route = useRoute()

const show = computed(() => {
  if (route.name && rootRouteList.includes(route.name)) {
    return true
  }
  return false
})
</script>

<template>
  <van-tabbar v-if="show" v-model="active" route placeholder>
    <!-- <van-tabbar-item replace to="/">
      {{ $t('tabbar.home') }}
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile">
      {{ $t('tabbar.profile') }}
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item> -->
    
    <!-- <van-tabbar-item icon="records-o" replace to="/check">
      检查单
    </van-tabbar-item>
    <van-tabbar-item icon="browsing-history-o" replace to="/history">
      历史记录
    </van-tabbar-item> -->
  </van-tabbar>
</template>
