// 解析输入模板
function parseInputBoxTemplate(str) {
  const result = []
  const regex = /_{2,}/g // 匹配两个或两个以上下划线
  let lastIndex = 0
  let match = regex.exec(str) // 查找第一个匹配项

  while (match) {
    if (match.index > lastIndex) { // 如果匹配项之前有文本，则添加到结果中
      result.push({
        type: 'text',
        value: str.slice(lastIndex, match.index),
      })
    }

    result.push({
      type: 'input',
      value: '',
    })

    lastIndex = regex.lastIndex
    match = regex.exec(str) // 查找下一个匹配项
  }

  if (lastIndex < str.length) {
    result.push({
      type: 'text',
      value: str.slice(lastIndex),
    })
  }

  return result
}

// 转换输入框模板
function conversionInputBox(fillBlankRefList) {
  return fillBlankRefList.map(item => ({
    code: item.id,
    fields: parseInputBoxTemplate(String(item.refName)),
  }))
}

// 转换复选框模板
function convertCheckbox(checkBoxRefList) {
  return checkBoxRefList.map(item => ({
    code: item.id,
    text: item.refName,
  }))
}

// 处理驾驶舱整肃性数据
function processCockpitIntegrityData(cockpitIntegrity) {
  const itemList = cockpitIntegrity?.[0]?.itemList || []
  const checkBoxRefList = itemList?.[0]?.checkBoxRefList || []
  const cockpitIntegrityData = checkBoxRefList.map(item => ({
    id: item.id,
    name: item.refName,
    checked: false,
  }))
  return {
    id: itemList?.[0]?.id,
    checkList: cockpitIntegrityData,
  }
}

// 处理检查单执行数据
function processCheckListExecutionData(checkListExecution) {
  const itemList = checkListExecution?.[0]?.itemList || []
  const checkListExecutionData = itemList.map(item => ({
    id: item.id,
    name: item.itemName,
    checked: [],
    children: item.checkBoxRefList.map(child => child.refName),
    childrenId: item.checkBoxRefList.map(child => child.id),
  }))
  return {
    id: itemList?.[0]?.id,
    checkList: checkListExecutionData,
  }
}

// 处理tem数据
function processTemData(temList) {
  const codeMap = {}
  const result = []

  // 建立索引
  temList.forEach((item) => {
    codeMap[item.code] = item
  })

  temList.forEach((item) => {
    const level = item.code.split('.').length

    // 第一层
    if (!item.parentCode) {
      result.push({
        id: item.id,
        category: item.cname,
        items: [],
      })
    }

    // 第二层
    else if (level === 1 || (level === 2 && !item.code.includes('.'))) {
      const parent = codeMap[item.parentCode]
      const root = result.find(r => r.id === parent.id)

      if (root) {
        root.items.push({
          id: item.id,
          name: item.cname,
          subItems: [],
        })
      }
    }

    // 第三层
    else if (level === 2) {
      const parent = codeMap[item.parentCode]
      const root = result.find(r => r.id === codeMap[parent.parentCode].id)

      const itemNode = root?.items.find(i => i.id === parent.id)

      itemNode?.subItems.push({
        id: item.id,
        name: item.cname,
        triggerCount: 0,
      })
    }

    // 超过三层 → 挂到第二层
    else if (level >= 3) {
      let parent = codeMap[item.parentCode]

      // 找到第二层祖先
      while (parent && parent.code.split('.').length > 1) {
        parent = codeMap[parent.parentCode]
      }

      const root = result.find(r => r.id === codeMap[parent.parentCode].id)
      const itemNode = root?.items.find(i => i.id === parent.id)

      itemNode?.subItems.push({
        id: item.id,
        name: item.cname,
        triggerCount: 0,
      })
    }
  })

  return result
}

// 处理程序执行数据
function processProgramExecutionData(programExecuteList) {
  const map = {}

  programExecuteList.forEach((item) => {
    const name = item.checkName.trim()

    if (!map[name]) {
      map[name] = {
        name,
        subItems: [],
      }
    }

    map[name].subItems.push({
      id: item.id,
      name: item.checkItemName,
      triggerCount: 0,
    })
  })

  return Object.values(map)
}

export function templateDataParsing(templateInfoDTO) {
  // 各飞行阶段
  const flightPhaseList = ['航前准备', '驾驶舱准备', '推开及滑出阶段', '起飞阶段', '爬升阶段', '巡航阶段', '下降阶段', '进近着陆阶段', '滑入阶段', '关车时刻']
  const flightPhaseCheckItemInitData = []

  const tem = processTemData(templateInfoDTO?.temList || [])
  const programExecution = processProgramExecutionData(templateInfoDTO?.programExecuteList || [])

  // 初始化飞行阶段数据
  flightPhaseList.forEach((item) => {
    const flightPhaseData = templateInfoDTO.mainTemplateMap[item] // 获取飞行阶段数据
    // 过滤飞行阶段数据中的checkName等于"驾驶舱整肃性"和"检查单"的数据
    const checkItemData = flightPhaseData.filter(item => item.checkName !== '驾驶舱整肃性' && item.checkName !== '检查单')
    const cockpitIntegrity = flightPhaseData.filter(item => item.checkName === '驾驶舱整肃性')
    const checkListExecution = flightPhaseData.filter(item => item.checkName === '检查单')
    // console.log(item)
    // console.log('飞行阶段检查项', checkItemData)
    // console.log('驾驶舱整肃性', cockpitIntegrity)
    // console.log('检查单执行', checkListExecution)

    const flightPhaseChecklistObjectItems = checkItemData.map((checkItem) => {
      return {
        name: checkItem.checkName,
        updateTime: '',
        details: checkItem.itemList.map((subItem) => {
          return {
            content: subItem.itemName,
            status: 1, // 1:已执行 2:未执行  默认已执行
            updateTime: '',
            remarks: [],
            referenceItem: {
              inputs: conversionInputBox(subItem.fillBlankRefList || []),
              checkbox: {
                list: convertCheckbox(subItem.checkBoxRefList || []),
                checked: [],
              },
            },
          }
        }),
      }
    })

    const flightPhaseChecklistObject = {
      phase: item,
      items: flightPhaseChecklistObjectItems,
      programExecution,
      checkListExecution: processCheckListExecutionData(checkListExecution),
      cockpitIntegrity: processCockpitIntegrityData(cockpitIntegrity),
      tem,
    }
    flightPhaseCheckItemInitData.push(flightPhaseChecklistObject)
  })

  return flightPhaseCheckItemInitData
}
