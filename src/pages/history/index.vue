<script setup lang='ts'>
import { showDialog, showSuccessToast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const checkListData = JSON.parse(localStorage.getItem('checkListData') || '[]').sort((a, b) => {
  // 转成时间戳
  return new Date(b.updateTime).getTime() - new Date(a.updateTime).getTime()
})
const checkList = ref<any[]>(checkListData)


// 当前激活的标签页
const tabActive = ref(0)
const allCount = computed(() => checkList.value.length)
const syncCount = computed(() => checkList.value.filter(item => item.status === 1).length)
const unsyncCount = computed(() => checkList.value.filter(item => item.status === 0).length)
const activeCheckList = computed(() => {
  if (tabActive.value === 0) {
    return checkList.value
  } else if (tabActive.value === 1) {
    return checkList.value.filter(item => item.status === 0)
  } else {
    return checkList.value.filter(item => item.status === 1)
  }
})

function formatterflightInfoTitle(flightInfo: any = {}) {
  const {
    flightTimeText = '',
    flightNo = '',
    aircraft = '',
    depAirport = '',
    arrAirport = '',
  } = flightInfo

  return `${flightTimeText} ${flightNo} ${aircraft} ${depAirport} - ${arrAirport}`
}

function goCheckPage(id?: number) {
  if (id) {
    router.push(`/check?id=${id}`)
  } else {
    router.push('/check')
  }
}

function handleRemoveCheckList(id: number) {
  // 二次确认是否删除
  showDialog({
    message: '是否确认删除记录？',
    showCancelButton: true,
  })
    .then(() => {
      // on confirm
      checkList.value.splice(checkList.value.findIndex(item => item.id === id), 1)
      localStorage.setItem('checkListData', JSON.stringify(checkList.value))
      showSuccessToast('删除成功')
    })
    .catch(() => {
      // on cancel

    })


}

</script>

<template>
  <div class="historyRecord">
    <!-- 顶部导航栏 -->
    <div class="nav-bar px-2 flex justify-between items-center">
      <div>LOSA检查单</div>
      <van-icon size="30" name="add-o" color="#409eff" @click="goCheckPage()" />
    </div>
    <!-- tab栏 -->
    <div class="tabList py-4 flex justify-center items-center bg-[#fff]">
      <van-tabs v-model:active="tabActive" type="card" :ellipsis="false">
        <van-tab :title="`全部(${allCount})`"></van-tab>
        <van-tab :title="`待同步(${unsyncCount})`"></van-tab>
        <van-tab :title="`已同步(${syncCount})`"></van-tab>
      </van-tabs>
    </div>
    <!-- 占位 -->
    <div class="placeholder" />
    <!-- 记录列表 -->
    <div class="px-2">
      <div v-for="item in activeCheckList" :key="item.id" class="mb-10px">
        <van-swipe-cell>
          <div class="flex justify-between items-center p-2 bg-[#fff] rounded-5px shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            @click="goCheckPage(item.id)">
            <div class="">
              <div class="text-[#333] text-sm font-bold">{{ formatterflightInfoTitle(item.flightInfo || {}) }}</div>
              <div class="text-[#999] text-xs">{{ item.updateTime || '更新时间丢失' }}</div>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-size-12px line-height-12px mr-2"
                :class="item.status === 1 ? 'text-[#52a6ff]' : 'text-[#f59f31]'">
                {{ item.status === 1 ? '已同步' : '待同步' }}
              </span>
              <van-icon name="arrow" color="#999" size="18" @click="" />
            </div>
          </div>
          <template #right v-if="item.status === 0">
            <div class="w-full h-full flex justify-center items-center px-2"
              @click.stop="handleRemoveCheckList(item.id)">
              <van-icon name="delete-o" color="#ff0000" size="30px" />
            </div>
          </template>
        </van-swipe-cell>
      </div>
    </div>

  </div>
</template>

<style scoped lang="less">
.historyRecord {
  background-color: #f5f5f550;
  height: 100%;

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
  }

  .tabList {
    position: fixed;
    top: 55px;
    left: 0;
    right: 0;
    z-index: 999;
    height: 50px;
  }

  .placeholder {
    height: 105px;
    margin-bottom: 10px;
  }
}
</style>

<route lang="json5">
{
  name: 'History'
}
</route>
