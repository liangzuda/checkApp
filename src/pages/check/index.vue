<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { showDialog, showToast } from 'vant'
import { accountOption, aircraftOption, airportOption, flightPhaseCheckItemInitData, mainRemarkInitData } from './data'
import { useRoute, useRouter } from 'vue-router'

dayjs.extend(utc)
const route = useRoute()
const router = useRouter()

// 深拷贝
function deepClone<T>(data: T): T {
  return JSON.parse(JSON.stringify(data))
}

// 生成一个随机的id
function generateRandomId() {
  // 使用时间戳加盐
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`
}

// 如果url有携带id，则需要从本地储存匹配
const checkListIdFromUrl = route.query.id
const checkListData = JSON.parse(localStorage.getItem('checkListData') || '[]')
let tempData = null
const defaultData = {
  id: generateRandomId(), // 检查单id
  status: 0, // 检查单状态 1已同步 0待同步
  account: '张三(213658)', // 上传账号
  updateTime: '', // 更新时间
  flightInfo: {
    flightTimeText: '', // 航班时间
    flightNo: '', // 航班号
    aircraft: '', // 飞机号
    depAirport: '', // 起飞机场
    arrAirport: '', // 到达机场
  },
  flightPhaseCheckItemData: deepClone(flightPhaseCheckItemInitData), // 阶段检查数据
  mainRemarkInitData: deepClone(mainRemarkInitData), // 备注数据
}

// 初始化检查单数据
if (checkListIdFromUrl) {
  tempData = checkListData.find(item => item.id === checkListIdFromUrl) || defaultData
}
else {
  tempData = defaultData
}

// 如果检查单的状态为已同步，则页面为只读状态
const onlyRead = tempData.status === 1

// 返回历史记录页面
function goBack() {
  if (!onlyRead)
    handleSaveCheckList()
  // 前往历史记录页面
  router.push('/history')
}

// 暂存检查单
function handleSaveCheckList() {
  // if (!validationForm()) return
  tempData.updateTime = `${dayjs().utc().format('YYYY-MM-DD HH:mm:ss')}Z`
  // 将tempData保存到localStore, 如果url有id的，则更新对应的
  if (checkListIdFromUrl) {
    checkListData.forEach((item, index) => {
      if (item.id === checkListIdFromUrl) {
        checkListData.splice(index, 1, tempData)
      }
    })
  }
  else {
    checkListData.push(tempData)
  }
  localStorage.setItem('checkListData', JSON.stringify(checkListData))
  showToast('保存成功')
}

// 同步检查单
function handleSyncCheckList() {
  if (!validationForm())
    return
  tempData.updateTime = `${dayjs().utc().format('YYYY-MM-DD HH:mm:ss')}Z`
  // 模拟同步成功
  showDialog({ title: '提示', message: '同步成功' }).then(() => {
    // 同步成功后，将状态改为已同步
    tempData.status = 1
    // 将tempData保存到localStore, 如果url有id的，则更新对应的
    if (checkListIdFromUrl) {
      checkListData.forEach((item, index) => {
        if (item.id === checkListIdFromUrl) {
          checkListData.splice(index, 1, tempData)
        }
      })
    }
    else {
      checkListData.push(tempData)
    }
    localStorage.setItem('checkListData', JSON.stringify(checkListData))
    // 前往历史记录页面
    router.push('/history')
  })
}

// 账号信息
const tempAccount = ref(tempData.account)

// 是否展示航班信息
const showFlightInfo = ref(true)

// 航班信息
const form = reactive(tempData.flightInfo)

// 航班时间
const showTimePicker = ref(false) // 时间选择器显示
const activeTabTimePicker = ref(0) // 选择器tab切换
// 默认值回显
form.flightTimeText = `${dayjs().utc().format('YYYY-MM-DD')}`
const currentDate = ref([dayjs().utc().format('YYYY'), dayjs().utc().format('MM'), dayjs().utc().format('DD')]) // 日期

// 航班时间选择
function onTimeConfirm() {
  // form.flightTimeText = `${dayjs(`${currentDate.value.join('-')} ${currentTime.value.join(':')}`).format('YYYY-MM-DD HH:mm:ss')}Z`
  form.flightTimeText = `${dayjs(`${currentDate.value.join('-')}`).format('YYYY-MM-DD')}`
  showTimePicker.value = false
}

/* ===== 可输入下拉 ===== */
const showDropdown = ref(false) // 下拉显示
const search = ref('') // 搜索内容
const currentField = ref<'aircraft' | 'dep' | 'arr' | 'account'>('aircraft') // 当前输入字段
const currentFieldCn = ref<'飞机号' | '起飞机场' | '到达机场' | '账号'>('飞机号') // 当前输入字段中文

const options = {
  // 飞机号
  aircraft: aircraftOption,
  // 起飞机场
  dep: airportOption,
  // 到达机场
  arr: airportOption,
  // 账号
  account: accountOption,
}

// 飞机号popup选择
function openAircraft() {
  currentField.value = 'aircraft'
  currentFieldCn.value = '飞机号'
  openDropdown()
}
// 起飞机场popup选择
function openDep() {
  currentField.value = 'dep'
  currentFieldCn.value = '起飞机场'
  openDropdown()
}
// 到达机场popup选择
function openArr() {
  currentField.value = 'arr'
  currentFieldCn.value = '到达机场'
  openDropdown()
}
// 账号popup选择
function openAccount() {
  currentField.value = 'account',
  currentFieldCn.value = '账号'
  openDropdown()
}
// 下拉选择
function openDropdown() {
  search.value = ''
  showDropdown.value = true
}

// 搜索结果
const filteredList = computed(() => {
  const list = options[currentField.value] || [] // 当前字段对应的数据列表
  return list.filter(i => i.label.toLowerCase().includes(search.value.toLowerCase())) // 搜索结果,包含搜索内容的项
})

// 选择,根据当前字段赋值
function onSelect(val: string) {
  if (currentField.value === 'aircraft')
    form.aircraft = val
  if (currentField.value === 'dep')
    form.depAirport = val
  if (currentField.value === 'arr')
    form.arrAirport = val
  if (currentField.value === 'account')
    tempAccount.value = val
  showDropdown.value = false
}

const titleText = computed(() => {
  const defaultTitle = ''
  const mmdd = `${dayjs(form.flightTimeText).format('MM-DD')}`
  const flightInfoTitle = `${mmdd} ${form.flightNo} ${form.aircraft} ${form.depAirport}-${form.arrAirport}`
  return showFlightInfo.value ? defaultTitle : flightInfoTitle
})

function validationForm() {
  if (!form.flightTimeText) {
    showToast('请选择航班时间')
    return false
  }
  if (!form.flightNo) {
    showToast('请输入航班号')
    return false
  }
  if (!form.aircraft) {
    showToast('请选择飞机号')
    return false
  }
  if (!form.depAirport) {
    showToast('请选择起飞机场')
    return false
  }
  if (!form.arrAirport) {
    showToast('请选择到达机场')
    return false
  }
  return true
}

// 同步
const showSync = ref(false)

// 所有飞行阶段列表： 航前准备 驾驶舱准备 推开及滑出 起飞 爬升 巡航 下降 进近着陆 滑入 关车
const flightPhaseList = ['航前准备', '驾驶舱准备', '推开及滑出', '起飞', '爬升', '巡航', '下降', '进近着陆', '滑入', '关车']
const activeTab = ref(0) // tabs切换
const activeCollapsed = ref('') // 当前飞行阶段检查项展开的折叠面板
const flightPhaseCheckItemData = ref(tempData.flightPhaseCheckItemData) // 飞行阶段检查项选择和渲染数据

const activeFlightPhaseCheckItemData = computed(() => flightPhaseCheckItemData.value[activeTab.value]) // 当前飞行阶段检查项选择和渲染数据
const activeProgramExecution = computed(() => activeFlightPhaseCheckItemData.value.programExecution) // 当前飞行阶段程序执行数据
const activeCheckListExecution = computed(() => activeFlightPhaseCheckItemData.value.checkListExecution) // 当前飞行阶段检查项执行数据
const activeCockpitIntegrity = computed(() => activeFlightPhaseCheckItemData.value.cockpitIntegrity) // 当前飞行阶段驾驶舱完整性数据
const activeTem = computed(() => activeFlightPhaseCheckItemData.value.tem) // 当前飞行阶段温度数据

function handleChangeTab(_: number) {
  if (activeFlightPhaseCheckItemData.value?.items?.length === 1) {
    activeCollapsed.value = '1'
  }
  else {
    activeCollapsed.value = '' // 重置飞行阶段检查项折叠面板
  }
}

function calculateItemNotPassCount(details) {
  let count = 0
  details.forEach((detail) => {
    if (detail.status === 2)
      count++
  })
  return count > 99 ? '99+' : count
}

function handleTogglePassStutas(subItem, item) {
  if (onlyRead)
    return
  if (subItem.status === 1) {
    subItem.status = 2
  }
  else {
    subItem.status = 1
  }
  // 获取UTC标准时间
  const utcTime = `${dayjs().utc().format('HH:mm:ss')}Z`
  subItem.updateTime = utcTime
  item.updateTime = utcTime
}

// 程序执行popup
const showProgramExecution = ref(false) // popup显示
const programExecutionData = activeProgramExecution // 程序执行选择和渲染数据
const programExecutionCount = computed(() => { // 总触发次数
  let count = 0
  programExecutionData.value.forEach((item) => {
    item.subItems.forEach((subItem) => {
      if (subItem.triggerCount) {
        count += subItem.triggerCount
      }
    })
  })
  return count > 99 ? '99+' : count
})
// 计算TEM子项触发次数的总和
function getProgramExecutionSubItemsTotalSum(subItems: { name: string, triggerCount: number }[]) {
  let count = 0
  subItems.forEach((item) => {
    count += Number(item.triggerCount)
  })
  return count > 99 ? '99+' : count
}
const activeCollapsedProgramExecution = ref('') // 当前程序执行展开的折叠面板
function handleOpenProgramExecution() {
  showProgramExecution.value = true
}

// 检查单执行popup
const showCheckListExecution = ref(false) // popup显示
const checkListExecutionData = activeCheckListExecution // 检查单执行选择和渲染数据
const checkedListExecutionCount = computed(() => { // 选择的大项数
  let count = 0
  checkListExecutionData.value.forEach((item) => {
    if (item.checked.length)
      count++
  })
  return count > 99 ? '99+' : count
})
// 驾驶舱整肃性popup
const showCockpitIntegrity = ref(false) // popup显示
const cockpitIntegrityData = activeCockpitIntegrity // 驾驶舱整肃性选择和渲染数据
const cockpitIntegrityCount = computed(() => { // 选择的大项数
  let count = 0
  cockpitIntegrityData.value.forEach((item) => {
    if (item.checked)
      count++
  })
  return count > 99 ? '99+' : count
})
// TEM popup
const showTem = ref(false) // popup显示
const activeTabtem = ref(0) // TEM tabs切换
const temTabs = ['操纵差错', '程序性差错', '通信差错', '环境威胁', '心理/生理性威胁', '公司方面威胁'] // TEM tabs：操纵差错 程序性差错 通信差错 环境威胁 心理/生理性威胁 公司方面威胁
const temData = activeTem // TEM选择和渲染数据
const activeTemData = computed(() => temData.value[activeTabtem.value]) // 当前TEM选择和渲染数据
const activeCollapsedTem = ref('') // 当前TEM展开的折叠面板
const temCount = computed(() => { // 总触发次数
  let count = 0
  temData.value.forEach((tem) => {
    tem.items.forEach((item) => {
      item.subItems.forEach((subItem) => {
        if (subItem.triggerCount) {
          count += subItem.triggerCount
        }
      })
    })
  })
  return count > 99 ? '99+' : count
})

// 打开检查单执行
function handleOpenCheckListExecution() {
  showCheckListExecution.value = true
}

// 打开驾驶舱整肃性
function handleOpenCockpitIntegrity() {
  if (cockpitIntegrityData.value?.length)
    showCockpitIntegrity.value = true
  else showToast('航前准备阶段无整肃性')
}

// 打开TEM
function handleOpenTem() {
  // activeTabtem.value = 0
  // activeCollapsedTem.value = '' // 重置TEM折叠面板
  showTem.value = true
}
// TEM tabs切换
function handleChangeTabTem(_: number) {
  // activeCollapsedTem.value = '' // 重置TEM折叠面板
}
// 计算TEM子项触发次数的总和
function getTemSubItemsTotalSum(subItems: { name: string, triggerCount: number }[]) {
  let count = 0
  subItems.forEach((item) => {
    count += Number(item.triggerCount)
  })
  return count > 99 ? '99+' : count
}

const showLongPressDialog = ref(false)
const currentSubItem = ref(null)
const tempTemSubItemCount = ref(0)
let longPressTimer = null
let isLongPress = false

function onTouchStartTemSubItem(subItem) {
  isLongPress = false
  longPressTimer = setTimeout(() => {
    isLongPress = true
    if (onlyRead)
      return
    showLongPressDialog.value = true
    currentSubItem.value = subItem
    tempTemSubItemCount.value = Number(subItem.triggerCount) || 0
  }, 600)
}

function onTouchEndTemSubItem() {
  clearTimeout(longPressTimer)
}

function onTouchCancelTemSubItem() {
  clearTimeout(longPressTimer)
}

function handleClickTemSubItem(subItem) {
  if (onlyRead)
    return
  if (isLongPress)
    return // 长按后不再触发点击
  subItem.triggerCount++
}

function handleConfirmLongPressDialog() {
  if (!currentSubItem.value)
    return

  currentSubItem.value.triggerCount = Number(tempTemSubItemCount.value)
  showLongPressDialog.value = false
  currentSubItem.value = null
}

function handleCancelLongPressDialog() {
  showLongPressDialog.value = false
  currentSubItem.value = null
}

// 备注
const remarkHeight = ref(0)
const remarkAnchors = [0, 100, 150, window.innerHeight * 0.6]
const remarkInput = ref(null)
const remarkList = ref(null)
const tempReferenceItem = ref(null)
const tempRemark = ref('')
const remarkTitle = ref('备注')

function handleOpenRemark(subItem?) {
  // console.log('subItem', subItem)
  if (subItem) {
    remarkList.value = subItem.remarks
    remarkTitle.value = subItem.content
    tempReferenceItem.value = subItem.referenceItem
  }
  else {
    remarkList.value = tempData.mainRemarkInitData
    remarkTitle.value = 'MARKER'
    tempReferenceItem.value = null
  }

  remarkHeight.value = window.innerHeight * 0.6

  if (onlyRead)
    return

  // 获得输入框焦点
  // setTimeout(() => remarkInput.value?.focus(), 50)
  remarkInput.value?.focus()
}

function heightChange(e) {
  if (e.height <= 100)
    remarkHeight.value = 0
}

function handleAddQuickIdentifier(identifier: string) {
  tempRemark.value += `${identifier};`
  // setTimeout(() => remarkInput.value?.focus(), 50)
}

function handleSaveRemark() {
  // if (!tempRemark.value?.length) {
  //   remarkInput.value?.focus()
  //   return showToast('请输入备注内容')
  // }

  if (tempRemark.value?.length) {
    // UTC标准时间，使用dayjs
    const dateTime = `${dayjs().utc().format('YYYY/MM/DD HH:mm:ss')}Z`
    const newRemark = {
      content: tempRemark.value,
      // 当前时间
      updateTime: dateTime,
    }
    // 头插
    remarkList.value.unshift(newRemark)
    // showSuccessToast('保存成功')
  }

  tempReferenceItem.value = null
  tempRemark.value = ''
  remarkList.value = null
  remarkHeight.value = 0
}

function handleRemoveRemark(item) {
  // 二次确认是否删除
  showDialog({
    message: '是否确认删除备注？',
    showCancelButton: true,
  })
    .then(() => {
      // on confirm
      const index = remarkList.value.findIndex(r => r === item)
      if (index !== -1) {
        remarkList.value.splice(index, 1) // 原地修改
      }
      // showSuccessToast('删除成功')
    })
    .catch(() => {
      // on cancel

    })
}

function handleCancelRemark() {
  tempReferenceItem.value = null
  remarkList.value = null
  remarkHeight.value = 0
}
</script>

<template>
  <div class="check-page">
    <!-- 顶部导航栏 -->
    <div class="nav-bar">
      <div class="nav-bar-warp">
        <div class="flex items-center justify-center">
          <van-icon name="arrow-left" class="mr-1" @click="goBack" />
          <span
            class="text-nowrap text-ellipsis overflow-hidden" :class="[
              showFlightInfo ? 'font-size-16px' : 'font-size-12px',
              onlyRead ? '' : 'w-45',
            ]"
          >
            {{ titleText }}
          </span>
          <span v-show="!showFlightInfo" @click="() => showFlightInfo = true">
            <van-icon name="arrow-down" color="#409eff" size="24" />
          </span>
        </div>
        <div class="operation">
          <!-- <van-icon size="30" name="add-o" color="#409eff" @click="handleCreateCheckList" /> -->
          <template v-if="!onlyRead">
            <VanButton size="small" color="#409eff" @click="showSync = true">
              同步
            </VanButton>
            <!-- <VanButton size="small" color="#70b603" @click="handleSaveCheckList">
              暂存
            </VanButton> -->
          </template>
          <template v-else>
            <span class="font-size-12px c-[#409eff]">已同步：{{ tempData.updateTime || '2026-01-06 13:67:45' }}</span>
          </template>
        </div>
      </div>
    </div>
    <!-- 占位 -->
    <div class="placeholder" />
    <!-- 航班信息 -->
    <div v-show="showFlightInfo" class="flight-info mt-6px py-12px pr-12px bg-[#fff]">
      <!-- 同步账号 -->
      <div v-if="onlyRead" class="mb-4px pl-12px">
        <span class="label">同步账号：{{ tempData.account }}</span>
      </div>
      <div class="form-grid">
        <!-- 航班时间 -->
        <div class="form-item">
          <!-- <span class="label">航班时间：</span> -->
          <span class="label">航班日期：</span>
          <template v-if="!onlyRead">
            <van-field v-model="form.flightTimeText" readonly inset class="input" @click="showTimePicker = true" />
          </template>
          <template v-else>
            {{ form.flightTimeText }}
          </template>
        </div>

        <!-- 航班号 -->
        <div class="form-item">
          <span class="label">航班号：</span>
          <template v-if="!onlyRead">
            <van-field v-model="form.flightNo" placeholder="请输入" inset class="input" />
          </template>
          <template v-else>
            {{ form.flightNo }}
          </template>
        </div>

        <!-- 飞机号 -->
        <div class="form-item">
          <span class="label">飞机号：</span>
          <template v-if="!onlyRead">
            <van-field
              v-model="form.aircraft" placeholder="可输入" is-link inset class="input" readonly
              @focus="openAircraft"
            />
          </template>
          <template v-else>
            {{ form.aircraft }}
          </template>
        </div>

        <!-- 起飞机场 -->
        <div class="form-item">
          <span class="label">起飞机场：</span>
          <template v-if="!onlyRead">
            <van-field
              v-model="form.depAirport" placeholder="可输入" is-link inset class="input" readonly
              @focus="openDep"
            />
          </template>
          <template v-else>
            {{ form.depAirport }}
          </template>
        </div>

        <!-- 着陆机场 -->
        <div class="form-item">
          <span class="label">着陆机场：</span>
          <template v-if="!onlyRead">
            <van-field
              v-model="form.arrAirport" placeholder="可输入" is-link inset class="input" readonly
              @focus="openArr"
            />
          </template>
          <template v-else>
            {{ form.arrAirport }}
          </template>
        </div>

        <div v-if="!onlyRead" class="form-item flex justify-end">
          <VanButton size="small" color="#70b603" @click="() => { if (validationForm()) showFlightInfo = false }">
            确定
          </VanButton>
        </div>
      </div>
    </div>

    <!-- 飞行阶段tab栏 -->
    <van-tabs
      v-model:active="activeTab" class="mt-6px" offset-top="50" title-active-color="#1989fa" sticky
      @change="handleChangeTab"
    >
      <van-tab
        v-for="itemTabs, indexTabs in flightPhaseList" :key="indexTabs" :title="itemTabs"
        :title-style="{ fontSize: '16px' }"
      >
        <!-- 主要内容 -->
        <div class="mainContent">
          <!-- 程序执行、检查单执行、驾驶舱整肃性、TEM -->
          <div class="card flex items-center justify-evenly">
            <div class="pop-button emphasis-style" @click="handleOpenProgramExecution">
              程序执行
              <div v-show="programExecutionCount" class="circle">
                {{ programExecutionCount }}
              </div>
            </div>
            <div class="pop-button emphasis-style" @click="handleOpenCheckListExecution">
              检查单执行
              <div v-show="checkedListExecutionCount" class="circle">
                {{ checkedListExecutionCount }}
              </div>
            </div>
            <div
              class="pop-button weaken-style" :class="cockpitIntegrityData?.length ? '' : 'opacity-50'"
              @click="handleOpenCockpitIntegrity"
            >
              驾驶舱整肃性
              <div v-show="cockpitIntegrityCount" class="circle">
                {{ cockpitIntegrityCount }}
              </div>
            </div>
            <div class="pop-button weaken-style" @click="handleOpenTem">
              TEM
              <div v-show="temCount" class="circle">
                {{ temCount }}
              </div>
            </div>
          </div>
          <!-- 各飞行阶段检查项 -->
          <van-collapse v-model="activeCollapsed" accordion>
            <!-- 各阶段大项 -->
            <van-collapse-item
              v-for="item, index in activeFlightPhaseCheckItemData.items" :key="index"
              :name="`${Number(index) + 1}`"
            >
              <template #title>
                <div class="flex items-center justify-between">
                  <!-- 大项名称 -->
                  <div class="font-size-16px font-bold">
                    {{ item.name }}
                  </div>

                  <!-- 大项操作区 -->
                  <div class="c-[#999] mr-2 flex gap-2 items-center justify-center position-relative">
                    <!-- 选中的条数 -->
                    <div
                      v-show="calculateItemNotPassCount(item.details)"
                      class="font-size-12px c-[#fff] mr-2 rounded-2xl bg-[#ff0000] flex h-5 w-5 items-center right-0 top--6px justify-center position-absolute"
                    >
                      {{ calculateItemNotPassCount(item.details) }}
                    </div>
                    <!-- 最近一次操作时间 -->
                    <div
                      v-if="calculateItemNotPassCount(item.details)"
                      class="font-size-10px c-[#999] text-right w-160px right-0 top--24px position-absolute"
                    >
                      <!-- 2026-01-19 10:23:25Z -->
                      {{ item.updateTime || '' }}
                    </div>
                  </div>
                </div>
              </template>
              <div class="p-2 bg-[#f0f0f0]">
                <!-- 大项下的子项 -->
                <van-swipe-cell
                  v-for="subItem, subIndex in item.details" :key="subIndex"
                  @open="handleOpenRemark(subItem)"
                >
                  <div class="mb-2">
                    <div
                      class="p-2 b-1 b-solid flex shadow-[0_0_10px_rgba(0,0,0,0.1)] items-center justify-between position-relative touch-pan-y"
                      :class="subItem.status === 1 ? 'bg-[#f2f2f2] b-[#99999945]' : 'bg-[#fdf6ec] b-[#ffa200]'"
                      @click="() => { if (onlyRead) handleOpenRemark(subItem); else handleTogglePassStutas(subItem, item) }"
                    >
                      <!-- 小项名称 -->
                      <div class="c-[#000]">
                        {{ subItem.content }}
                      </div>
                      <!-- 子项操作区 -->
                      <div class="c-[#999] mr-2 flex gap-2 items-end justify-center position-relative">
                        <!-- 不适用 -->
                        <div class="right-10px top--6px position-absolute">
                          <svg
                            v-if="subItem.status === 2" t="1768977236745" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6643" width="20" height="20"
                          >
                            <path
                              d="M511.563 65.144c-246.87 0-446.998 200.128-446.998 446.998S264.693 959.12 511.563 959.14 958.56 759.011 958.56 512.141 758.433 65.144 511.563 65.144zM785.211 785.79c-35.561 35.561-76.954 63.473-123.03 82.961-47.672 20.164-98.348 30.388-150.619 30.388s-102.946-10.224-150.619-30.388c-46.076-19.488-87.469-47.401-123.03-82.961-35.561-35.561-63.473-76.954-82.962-123.03-20.164-47.672-30.388-98.348-30.388-150.618s10.224-102.946 30.388-150.619c19.489-46.076 47.401-87.469 82.962-123.03 35.56-35.561 76.954-63.473 123.03-82.962 47.672-20.164 98.348-30.388 150.619-30.388s102.946 10.224 150.619 30.388c46.076 19.489 87.469 47.401 123.03 82.962 35.561 35.56 63.473 76.954 82.962 123.03 20.164 47.672 30.388 98.348 30.388 150.619s-10.224 102.946-30.388 150.618c-19.489 46.076-47.401 87.47-82.962 123.03z"
                              fill="#ffa200" p-id="6644"
                            />
                            2
                            <path
                              d="M690.087 336.983c-11.715-11.716-30.711-11.716-42.426 0L513.535 471.109 379.41 336.983c-11.716-11.716-30.711-11.716-42.427 0-11.715 11.716-11.715 30.711 0 42.427l134.126 134.126-134.126 134.125c-11.715 11.716-11.715 30.71 0 42.426 5.858 5.858 13.536 8.787 21.213 8.787s15.355-2.929 21.213-8.787l134.126-134.126 134.126 134.126c5.857 5.858 13.535 8.787 21.213 8.787s15.355-2.929 21.213-8.787c11.716-11.716 11.716-30.71 0-42.426L555.961 513.535 690.087 379.41c11.716-11.716 11.716-30.711 0-42.427z"
                              fill="#ffa200" p-id="6645"
                            />
                          </svg>
                        </div>
                        <!-- 最近一次操作时间 -->
                        <div
                          v-if="subItem.status === 2"
                          class="font-size-10px c-[#999] text-right w-160px right-0 top--18px position-absolute"
                        >
                          <!-- 2026-01-19 10:23:25Z -->
                          {{ subItem.updateTime || '' }}
                        </div>
                      </div>
                    </div>
                    <!-- 最新的一条备注 -->
                    <div
                      v-if="subItem.remarks && subItem.remarks.length > 0"
                      class="font-size-12px mx-2 px-2 py-2 rounded-b-[10px] bg-[#ebf3fc] flex justify-between"
                    >
                      <div class="w-60% text-nowrap text-ellipsis overflow-hidden" :title="subItem.remarks[0].content">
                        {{ subItem.remarks[0].content }}
                      </div>
                      <div>{{ dayjs(subItem.remarks[0].updateTime).utc().format('HH:mm:ss') }}Z</div>
                    </div>
                  </div>
                  <template #right>
                    <div class="w-20px" />
                  </template>
                  <template #left>
                    <div class="w-20px" />
                  </template>
                </van-swipe-cell>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </van-tab>
    </van-tabs>

    <!-- 备注 固定悬浮按钮 -->
    <van-floating-bubble
      v-if="!remarkHeight" class="opacity-50" axis="xy" magnetic="x" :gap="{ x: 24, y: 60 }"
      icon="records-o" @click.stop="() => handleOpenRemark()"
    />
    <!-- 备注 弹出框 -->
    <van-floating-panel
      v-model:height="remarkHeight" class="my-floating-panel" :content-draggable="true"
      :magnetic="false" :anchors="remarkAnchors" @height-change="heightChange"
    >
      <!-- 弹出框顶部 -->
      <template #header>
        <div
          class="px-4 py-2 b-t-1 b-[#bbb] rounded-t-[10px] b-solid bg-[#fff] flex shadow-[0_0_10px_rgba(0,0,0,0.1)] items-center justify-between"
        >
          <div class="font-size-12px w-50 text-nowrap text-ellipsis overflow-hidden" :title="remarkTitle">
            {{ remarkTitle }}
          </div>
          <div class="flex gap-4 items-center">
            <van-button v-show="!onlyRead" size="small" color="#70b603" @click="handleSaveRemark">
              <span class="px-2">保存</span>
            </van-button>
            <van-button size="small" @click="handleCancelRemark">
              <span class="px-2">收起</span>
            </van-button>
          </div>
        </div>
      </template>
      <!-- 弹出框内容 -->
      <div class="p-2 bg-[#f8f8f8] h-full">
        <!-- 编辑区 -->
        <div v-show="!onlyRead" class="font-size-14px p-2 rounded-t-[10px] bg-[#fff] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <van-field
            ref="remarkInput" v-model="tempRemark" rows="2" autosize type="textarea" maxlength="200"
            placeholder="请输入备注" show-word-limit
          />
          <div class="quick-identifier">
            <div class="queick-item" @click="handleAddQuickIdentifier('X')">
              X
            </div>
            <div class="queick-item" @click="handleAddQuickIdentifier('√')">
              √
            </div>
            <div class="queick-item" @click="handleAddQuickIdentifier('+')">
              +
            </div>
          </div>
        </div>
        <!-- 参考项区 -->
        <div
          v-if="tempReferenceItem?.inputs?.length > 0 || tempReferenceItem?.checkbox?.list?.length > 0"
          class="font-size-12px mt-2 p-4 rounded-[10px] bg-[#fff]"
        >
          <!-- 填空类型 -->
          <div v-for="input in tempReferenceItem.inputs" :key="input" class="reference-item-input mb-2">
            <!-- 一组输入模板 -->
            <template v-for="item in input.fields" :key="item">
              <!-- 文本 -->
              <span v-if="item.type === 'text'">
                {{ item.value }}
              </span>
              <!-- 输入框 -->
              <template v-else>
                <van-field v-model="item.value" class="input" input-align="center" :disabled="onlyRead" />
                <span class="mr-2">{{ item.unit }}</span>
              </template>
            </template>
          </div>
          <!-- 复选类型 -->
          <div class="">
            <van-checkbox-group v-model="tempReferenceItem.checkbox.checked" shape="square" :disabled="onlyRead">
              <van-checkbox v-for="item in tempReferenceItem.checkbox.list" :key="item" :name="item.code" class="mb-2">
                {{ item.text }}
              </van-checkbox>
            </van-checkbox-group>
          </div>
        </div>
        <!-- 展示区 -->
        <div v-for="item, index in remarkList" :key="index" class="mt-2">
          <div class="font-size-14px p-2 rounded-[10px] bg-[#fff] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div class="flex items-center justify-between">
              <div class="c-[#999]">
                {{ item.updateTime }}
              </div>
              <div v-if="!onlyRead" @click="handleRemoveRemark(item)">
                <van-icon size="14" name="close" />
              </div>
            </div>

            <div>{{ item.content }}</div>
          </div>
        </div>
      </div>
    </van-floating-panel>

    <!-- 检查单执行 弹出框 -->
    <van-popup v-model:show="showCheckListExecution" position="bottom" round>
      <div class="p-4 bg-[#fff] flex items-center justify-between">
        <div>
          检查单执行
        </div>
        <div class="flex gap-2 items-center">
          <van-button size="small" color="#70b603" @click="showCheckListExecution = false">
            确定
          </van-button>
        </div>
      </div>
      <div class="p-2 bg-[#f9f9f9]">
        <div v-for="item, index in checkListExecutionData" :key="index">
          <div class="randed-[10px] font-size-16px font-bold p-2 bg-[#fff] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            {{ `${Number(index) + 1}、${item.name}` }}
          </div>
          <div class="p-2 b-l-1 b-r-1 b-[#f0f0f0] b-solid bg-[#f5f5f5]">
            <van-checkbox-group
              v-model="item.checked" shape="square" class="font-size-14px gap-2 grid grid-cols-2"
              :disabled="onlyRead"
            >
              <van-checkbox v-for="child in item.children" :key="child" :name="child" icon-size="12px">
                {{ child }}
              </van-checkbox>
            </van-checkbox-group>
          </div>
        </div>
        <div class="bg-[#f9f9f9] h-20" />
      </div>
    </van-popup>
    <!-- 驾驶舱整肃性 弹出框 -->
    <van-popup v-model:show="showCockpitIntegrity" position="bottom" round>
      <div class="p-4 bg-[#fff] flex items-center justify-between">
        <div>
          驾驶舱整肃性
        </div>
        <div class="flex gap-2 items-center">
          <van-button size="small" color="#70b603" @click="showCockpitIntegrity = false">
            确定
          </van-button>
        </div>
      </div>
      <div class="p-2 bg-[#f9f9f9]">
        <div v-for="item, index in cockpitIntegrityData" :key="index">
          <div
            class="randed-[10px] font-size-14px mb-4 p-2 b-1 b-solid shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            :class="item.checked ? 'bg-[#ecf5ff] c-[#007aff]  b-[#b8daff]' : 'bg-[#fff] b-[#fff]'"
          >
            <van-checkbox v-model="item.checked" shape="square" icon-size="12px" :disabled="onlyRead">
              {{ item.name }}
            </van-checkbox>
          </div>
          <!-- 选择框 -->
        </div>
      </div>
      <div class="bg-[#f9f9f9] h-20" />
    </van-popup>
    <!-- TEM 弹出框 -->
    <van-popup v-model:show="showTem" position="bottom" round>
      <div class="p-4 bg-[#fff] flex items-center justify-between">
        <div>
          TEM
        </div>
        <div class="flex gap-2 items-center">
          <van-button size="small" color="#70b603" @click="showTem = false">
            确定
          </van-button>
        </div>
      </div>
      <van-tabs
        v-model:active="activeTabtem" title-active-color="#1989fa" :ellipsis="false"
        @change="handleChangeTabTem"
      >
        <van-tab v-for="itemTemTabs, indexTemTabs in temTabs" :key="indexTemTabs" :title="itemTemTabs">
          <div class="max-h-[70vh] overflow-y-auto">
            <van-collapse v-model="activeCollapsedTem" accordion>
              <van-collapse-item v-for="item, index in activeTemData.items" :key="index" :name="`${Number(index) + 1}`">
                <template #title>
                  <div class="flex items-center justify-between">
                    <div class="font-size-14px font-bold">
                      {{ item.name }}
                    </div>
                    <!-- 触发总次数 -->
                    <div
                      v-show="getTemSubItemsTotalSum(item.subItems)"
                      class="font-size-12px c-[#fff] mr-2 rounded-2xl bg-[#ff0000] flex h-5 w-5 items-center justify-center"
                    >
                      {{ getTemSubItemsTotalSum(item.subItems) }}
                    </div>
                  </div>
                </template>
                <div class="p-2 bg-[#f9f9f9]">
                  <div
                    v-for="subItem, subIndex in item.subItems" :key="subIndex"
                    class="mb-4 p-2 b-1 b-solid flex select-none shadow-[0_0_10px_rgba(0,0,0,0.1)] items-center justify-between position-relative"
                    :class="subItem.triggerCount ? 'bg-[#fdf6ec] b-[#f5dcb5]' : 'bg-[#f2f2f2] b-[#99999945]'"
                    @click="handleClickTemSubItem(subItem)" @touchstart="onTouchStartTemSubItem(subItem)"
                    @touchend="onTouchEndTemSubItem" @touchmove="onTouchCancelTemSubItem"
                  >
                    <div class="c-[#000]">
                      {{ subItem.name }}
                    </div>
                    <div
                      v-show="subItem.triggerCount"
                      class="font-size-10px c-[#fff] rounded-2xl bg-[#ff0000] flex h-4 w-4 items-center right--2 top--2 justify-center position-absolute"
                    >
                      {{ subItem.triggerCount > 99 ? '99+' : subItem.triggerCount }}
                    </div>
                  </div>
                </div>
              </van-collapse-item>
            </van-collapse>
          </div>
        </van-tab>
      </van-tabs>
      <div class="h-20" />
    </van-popup>
    <!-- 程序执行 弹出框 -->
    <van-popup v-model:show="showProgramExecution" position="bottom" round>
      <div class="p-4 bg-[#fff] flex items-center justify-between">
        <div>
          程序执行
        </div>
        <div class="flex gap-2 items-center">
          <van-button size="small" color="#70b603" @click="showProgramExecution = false">
            确定
          </van-button>
        </div>
      </div>
      <div class="max-h-[70vh] overflow-y-auto">
        <van-collapse v-model="activeCollapsedProgramExecution" accordion>
          <van-collapse-item v-for="item, index in programExecutionData" :key="index" :name="`${Number(index) + 1}`">
            <template #title>
              <div class="flex items-center justify-between">
                <div class="font-size-14px font-bold">
                  {{ item.name }}
                </div>
                <!-- 触发总次数 -->
                <div
                  v-show="getProgramExecutionSubItemsTotalSum(item.subItems)"
                  class="font-size-12px c-[#fff] mr-2 rounded-2xl bg-[#ff0000] flex h-5 w-5 items-center justify-center"
                >
                  {{ getProgramExecutionSubItemsTotalSum(item.subItems) }}
                </div>
              </div>
            </template>
            <div class="p-2 bg-[#f9f9f9]">
              <div
                v-for="subItem, subIndex in item.subItems" :key="subIndex"
                class="mb-4 p-2 b-1 b-solid flex select-none shadow-[0_0_10px_rgba(0,0,0,0.1)] items-center justify-between position-relative"
                :class="subItem.triggerCount ? 'bg-[#fdf6ec] b-[#f5dcb5]' : 'bg-[#f2f2f2] b-[#99999945]'"
                @click="handleClickTemSubItem(subItem)" @touchstart="onTouchStartTemSubItem(subItem)"
                @touchend="onTouchEndTemSubItem" @touchmove="onTouchCancelTemSubItem"
              >
                <div class="c-[#000]">
                  {{ subItem.name }}
                </div>
                <div
                  v-show="subItem.triggerCount"
                  class="font-size-10px c-[#fff] rounded-2xl bg-[#ff0000] flex h-4 w-4 items-center right--2 top--2 justify-center position-absolute"
                >
                  {{ subItem.triggerCount > 99 ? '99+' : subItem.triggerCount }}
                </div>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="h-20" />
    </van-popup>

    <!-- 程序执行和TEM子项触发次数调整 弹出框 -->
    <van-dialog v-model:show="showLongPressDialog" :show-confirm-button="false">
      <template #title>
        <div class="px-4 text-center">
          {{ currentSubItem?.name || '' }}
        </div>
      </template>
      <div>
        <div class="p-5 flex items-center justify-center">
          <div
            class="c-[#70b603] line-height-40px mr-10px text-center b-1 b-[#70b603] rounded-5px b-solid bg-[#f0f9eb] h-40px w-40px"
            @click="() => tempTemSubItemCount - 1 < 0 ? 0 : tempTemSubItemCount--"
          >
            -
          </div>
          <van-field v-model="tempTemSubItemCount" class="dialogInput" type="number" inset input-align="center" />
          <div
            class="c-[#f59a23] line-height-40px ml-10px text-center b-1 b-[#f59a23] rounded-5px b-solid bg-[#fdf6ec] h-40px w-40px"
            @click="() => tempTemSubItemCount++"
          >
            +
          </div>
        </div>
        <div class="px-15 py-5 b-t-1 b-[#f0f0f0] b-solid flex items-center justify-between">
          <van-button color="#70b603" @click="handleConfirmLongPressDialog">
            确认
          </van-button>
          <van-button @click="handleCancelLongPressDialog">
            取消
          </van-button>
        </div>
      </div>
    </van-dialog>

    <!-- 同步 弹出框 -->
    <van-popup v-model:show="showSync" position="bottom" round>
      <div class="p-4 bg-[#fff] flex items-center justify-between">
        <div>
          同步
        </div>
        <div class="flex gap-2 items-center">
          <van-button size="small" color="#409eff" @click="handleSyncCheckList">
            确定
          </van-button>
          <van-button size="small" @click="showSync = false">
            取消
          </van-button>
        </div>
      </div>
      <div class="p-2 bg-[#fcfcfc]">
        <div class="mb-4">
          <div class="font-size-14px p-2 bg-[#fff] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            航班信息
          </div>
          <!-- 航班信息 -->
          <div class="flight-info py-2 pr-2 bg-[#f2f2f2]">
            <div class="form-grid">
              <!-- 航班时间 -->
              <div class="form-item">
                <!-- <span class="label">航班时间：</span> -->
                <span class="label">航班日期：</span>
                <van-field v-model="form.flightTimeText" readonly inset class="input" @click="showTimePicker = true" />
              </div>

              <!-- 航班号 -->
              <div class="form-item">
                <span class="label">航班号：</span>
                <van-field v-model="form.flightNo" placeholder="请输入" inset class="input" />
              </div>

              <!-- 飞机号 -->
              <div class="form-item">
                <span class="label">飞机号：</span>
                <van-field
                  v-model="form.aircraft" placeholder="可输入" is-link inset class="input" readonly
                  @focus="openAircraft"
                />
              </div>

              <!-- 起飞机场 -->
              <div class="form-item">
                <span class="label">起飞机场：</span>
                <van-field
                  v-model="form.depAirport" placeholder="可输入" is-link inset class="input" readonly
                  @focus="openDep"
                />
              </div>

              <!-- 着陆机场 -->
              <div class="form-item">
                <span class="label">着陆机场：</span>
                <van-field
                  v-model="form.arrAirport" placeholder="可输入" is-link inset class="input" readonly
                  @focus="openArr"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="font-size-14px p-2 bg-[#fff] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            同步账号
          </div>
          <!-- 账号信息 -->
          <div class="py-2 pr-2 bg-[#f2f2f2]">
            <div class="flight-info py-2 pr-2 bg-[#f2f2f2]">
              <!-- 账号 -->
              <div class="form-item">
                <span class="label">账号：</span>
                <van-field
                  v-model="tempAccount" placeholder="可输入" is-link inset class="input" readonly
                  @focus="openAccount"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#fcfcfc] h-20" />
      </div>
    </van-popup>

    <!-- 航班时间 弹出框 -->
    <van-popup v-model:show="showTimePicker" position="bottom" round>
      <van-picker-group
        v-model:active-tab="activeTabTimePicker" title="航班日期" :tabs="[
          '选择日期',
        //  '选择时间'
        ]
        " @confirm="onTimeConfirm" @cancel="showTimePicker = false"
      >
        <van-date-picker v-model="currentDate" />
        <!-- <van-time-picker v-model="currentTime" :columns-type="['hour', 'minute', 'second']" /> -->
      </van-picker-group>
    </van-popup>

    <!-- 通用可输入下拉 弹出框 -->
    <van-popup v-model:show="showDropdown" position="bottom" round>
      <div class="dropdown-panel">
        <div class="font-bold pl-4 pt-4 text-left">
          {{ currentFieldCn }}
        </div>
        <van-field v-model="search" placeholder="输入筛选" clearable />
        <van-cell
          v-for="item in filteredList" :key="item.value" :title="item.label" clickable
          @click="onSelect(item.value)"
        />
      </div>
    </van-popup>
  </div>
</template>

<style scoped lang="less">
::v-deep(.van-collapse-item__content) {
  padding: 0;
}

.check-page {
  background-color: #f5f5f550;
  height: 100%;

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    .nav-bar-warp {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      height: 50px;
      background-color: #fff;

      .operation {
        display: flex;
        gap: 10px;
        justify-items: center;
        align-items: center;
      }
    }
  }

  .placeholder {
    height: 50px;
  }

  .flight-info {
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 0;
    }

    .form-item {
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
      width: calc(50vw - 188px);
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding: 0 4px;
      font-size: 14px;
    }

    .input::after {
      display: none;
    }

    /* 下拉面板 */
    .dropdown-panel {
      padding: 12px;
    }
  }

  .dialogInput {
    width: 78px;
    height: 40px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 4px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
  }

  .dialogInput::after {
    display: none;
  }

  .my-floating-panel {
    .quick-identifier {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-top: 8px;

      .queick-item {
        width: 40px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border: 1px solid #d8d8d8;
        border-radius: 4px;
        user-select: none;
      }
    }

    .reference-item-input {
      display: flex;

      .input {
        width: 60px;
        border-bottom: 1px solid #000;
        padding: 0 4px;
        font-size: 12px;
        line-height: 12px;
        background-color: transparent;
      }

      .input::after {
        display: none;
      }
    }
  }

  .mainContent {
    padding: 0 10px 100px 10px;

    .card {
      margin: 8px 0;
      padding: 8px;
      background-color: #fff;
      border-radius: 4px;

      .pop-button {
        position: relative;
        padding: 8px 12px;
        font-size: 12px;
        line-height: 12px;
        text-align: center;
        border-radius: 4px;

        .circle {
          position: absolute;
          font-size: 12px;
          right: -6px;
          top: -10px;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          border-radius: 50%;
          background-color: #ff0000;
          color: #fff;
        }
      }

      .weaken-style {
        color: #5cc2ff;
        background-color: #ecf5ff;
        border: 1px solid #b3d8ff;
      }

      .weaken-style:active {
        background-color: #41b6f9;
        color: #fff;
      }

      .emphasis-style {
        color: #fff;
        background-color: #409eff;
        border: 1px solid #409eff;
      }

      .emphasis-style:active {
        background-color: #66b1ff;
        color: #fff;
      }
    }
  }

  .fixed-button {
    position: fixed;
    bottom: 80px;
    right: 20px;
  }
}
</style>

<route lang="json5">
{
  name: 'Check'
}
</route>
