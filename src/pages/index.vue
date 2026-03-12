<script setup lang='ts'>
import { showDialog, showFailToast, showSuccessToast } from 'vant'
import { useRouter } from 'vue-router'
import { templateDataParsing } from '@/utils/templateDataParsing'
import { queryLosaTemplate } from '@/api/index'

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
  }
  else if (tabActive.value === 1) {
    return checkList.value.filter(item => item.status === 0)
  }
  else {
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
  }
  else {
    router.push('/check')
  }
}

function handleRemoveCheckList(id: number, status: number) {
  if (status === 1)
    return showFailToast('已同步的记录无法删除')
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

// 设置弹窗
const showSetting = ref(false)
const localStorageIpSetting = localStorage.getItem('ipSetting')
// const ipSetting = ref(localStorageIpSetting || '192.168.10.51:443')
const ipSetting = ref(localStorageIpSetting || '192.168.10.50:9201')

function openSetting() {
  showSetting.value = true
}

// 获取最新模板
const getTemplateLoading = ref(false)
async function getLatestTemplate() {
  getTemplateLoading.value = true
  try {
    const response = await queryLosaTemplate(ipSetting.value || 'localhost:3000')
    const res = response.data
    const { templateInfoDTO } = res.data
    // console.log('res', res)
    if (res.code === 200) {
      const jsonRenderData = templateDataParsing(templateInfoDTO)
      // console.log('jsonRenderData', jsonRenderData)
      const checkListTemplate = {
        templateId: templateInfoDTO.templateId,
        templateData: jsonRenderData,
      }
      // 将模板数据存储到本地
      localStorage.setItem('checkListTemplate', JSON.stringify(checkListTemplate))
      showSuccessToast('获取成功')
    }
    else {
      showFailToast(res.msg)
    }
  }
  catch (error) {
    // console.log(error)
    showFailToast(`请求失败${error.code}`)
  }
  finally {
    getTemplateLoading.value = false
  }
}

watch(ipSetting, () => {
  // 将ipSetting保存到本地，下次打开时使用
  localStorage.setItem('ipSetting', ipSetting.value)
})
</script>

<template>
  <div class="historyRecord">
    <!-- 顶部导航栏 -->
    <div class="nav-bar px-2 flex items-center justify-between">
      <div>FLYNOTE 检查单</div>
      <div class="flex gap-4">
        <van-icon size="30" name="setting-o" color="#409eff" @click="openSetting()" />
        <van-icon size="30" name="add-o" color="#409eff" @click="goCheckPage()" />
      </div>
    </div>
    <!-- tab栏 -->
    <div class="tabList py-4 bg-[#fff] flex items-center justify-center">
      <van-tabs v-model:active="tabActive" type="card" :ellipsis="false">
        <van-tab :title="`全部(${allCount})`" />
        <van-tab :title="`待同步(${unsyncCount})`" />
        <van-tab :title="`已同步(${syncCount})`" />
      </van-tabs>
    </div>
    <!-- 占位 -->
    <div class="placeholder" />
    <!-- 记录列表 -->
    <div class="px-2">
      <div v-for="item in activeCheckList" :key="item.id" class="mb-10px">
        <van-swipe-cell>
          <div
            class="p-2 rounded-5px bg-[#fff] flex shadow-[0_0_10px_rgba(0,0,0,0.1)] items-center justify-between"
            @click="goCheckPage(item.id)"
          >
            <div>
              <div class="text-sm text-[#333] w-65 text-nowrap text-ellipsis overflow-hidden">
                {{ formatterflightInfoTitle(item.flightInfo || {}) }}
              </div>
              <div class="text-xs text-[#999]">
                {{ item.updateTime || '更新时间丢失' }}
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span
                class="text-xs mx-2"
                :class="item.status === 1 ? 'text-[#52a6ff]' : 'text-[#f59f31]'"
              >
                {{ item.status === 1 ? '已同步' : '待同步' }}
              </span>
              <van-icon name="arrow" color="#999" size="18" />
            </div>
          </div>
          <template #right>
            <div
              class="px-2 flex h-full w-full items-center justify-center"
              @click.stop="handleRemoveCheckList(item.id, item.status)"
            >
              <van-icon name="delete-o" color="#ff0000" size="30px" />
            </div>
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <!-- 设置弹窗 -->
    <van-popup v-model:show="showSetting" class="setting-popup" round>
      <!-- 弹出框顶部 -->
      <div
        class="px-4 py-2 b-t-1 b-[#bbb] b-solid bg-[#fff] flex max-h-[60vh] w-[90vw] items-center justify-between"
      >
        <div class="font-size-12px">
          设置
        </div>
        <div class="flex gap-4 items-center">
          <van-button size="small" @click="() => showSetting = false">
            确定
          </van-button>
        </div>
      </div>
      <div class="setting-form-grid p-4 bg-[#f8f8f8] flex flex-col gap-2">
        <div class="setting-form-item">
          <span class="label">服务器ip：</span>
          <van-field v-model="ipSetting" placeholder="请输入" inset class="input" />
        </div>
        <div class="flex justify-center">
          <van-button :loading="getTemplateLoading" size="small" color="#1989fa" @click="getLatestTemplate()">
            获取最新模板
          </van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style scoped lang="less">
.historyRecord {
  background-color: #f5f5f550;
  height: 100%;

  /* 顶部导航栏 */
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: calc(50px + var(--safe-top));
    padding-top: var(--safe-top);
    line-height: 50px;
    background-color: #fff;
  }

  /* tab栏 */
  .tabList {
    position: fixed;
    top: calc(50px + var(--safe-top));
    left: 0;
    right: 0;
    z-index: 999;
    height: 50px;
    background-color: #fff;
  }

  /* 占位高度 = nav-bar + tabList */
  .placeholder {
    height: calc(100px + var(--safe-top));
    margin-bottom: 10px;
  }

  /* 设置弹窗 */
  .setting-popup {
    .setting-form-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px 0;
    }

    .setting-form-item {
      display: flex;
      align-items: center;
    }

    .label {
      width: 80px;
      text-align: right;
      margin-right: 0px;
      font-size: 14px;
      white-space: nowrap;
    }

    .input {
      flex: 1;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding: 0 4px;
      font-size: 14px;
    }

    .input::after {
      display: none;
    }
  }
}
</style>

<route lang="json5">
{
  name: 'Home'
}
</route>
