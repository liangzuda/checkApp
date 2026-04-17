function refListFormatting(referenceItem) {
  const { checkbox, inputs } = referenceItem
  const refList = []
  checkbox.checked.forEach((item) => {
    refList.push({
      id: item,
      checkBoxValue: 'Y',
    })
  })
  inputs.forEach((input) => {
    const id = input.code
    const fillBlankValueList = []
    let isContentful = false
    input.fields.forEach((field) => {
      if (field.type === 'input') {
        fillBlankValueList.push(field.value)
        if (field.value?.length > 0) {
          isContentful = true
        }
      }
    })
    if (isContentful) {
      refList.push({
        id,
        fillBlankValueList,
      })
    }
  })
  return refList
}

function temFormatting(tem) {
  const temList = []
  tem.forEach((item) => {
    item.items.forEach((item2) => {
      item2.subItems.forEach((subItem) => {
        if (subItem.triggerCount > 0) {
          temList.push({
            id: subItem.id,
            count: subItem.triggerCount,
          })
        }
      })
    })
  })
  // console.log('temList', temList)
  return temList
}
function programExecuteFormatting(programExecution) {
  const programExecuteList = []
  programExecution.forEach((item) => {
    item.subItems.forEach((subItem) => {
      if (subItem.triggerCount > 0) {
        programExecuteList.push({
          id: subItem.id,
          count: subItem.triggerCount,
        })
      }
    })
  })
  // console.log('programExecuteList', programExecuteList)
  return programExecuteList
}
// 检查单列表格式化
function itemListFormatting(items, cockpitIntegrity, checkListExecution) {
  const resultList = []
  // 各飞行阶段主检查单列表
  items?.forEach((item) => {
    const checkMainId = item.id // 大项id
    const itemList = []

    item.details?.forEach((detail) => {
      const id = detail.id // 子项id
      const none = detail.status === 2 ? 'Y' : 'N'
      const marker = detail.remarks?.map(remark => remark.content)?.join('\n') // 检查子项绑定备注
      const refList = refListFormatting(detail.referenceItem)
      if (none === 'Y' || refList?.length > 0 || marker?.length > 0) {
        itemList.push({
          id,
          none,
          marker,
          refList,
        })
      }
    })
    if (itemList.length > 0) {
      resultList.push({
        checkMainId,
        itemList,
      })
    }
  })

  // 驾驶舱整肃性
  const checkMainIdByCockpitIntegrity = cockpitIntegrity.checkMainId // 驾驶舱整肃性大项id
  const idByCockpitIntegrity = cockpitIntegrity.id // 驾驶舱整肃性子项id
  cockpitIntegrity.checkList?.forEach((check) => {
    const refList = []

    // 被选中的参考项
    if (check.checked) {
      refList.push({
        id: check.id, // 参考项id
        checkBoxValue: 'Y',
      })
    }

    if (refList.length > 0) {
      resultList.push({
        checkMainId: checkMainIdByCockpitIntegrity,
        itemList: [
          {
            id: idByCockpitIntegrity,
            none: 'Y',
            marker: '',
            refList,
          },
        ],
      })
    }
  })

  // 检查单执行情况
  const checkMainIdByCheckListExecution = checkListExecution.id // 检查单执行情况大项id
  checkListExecution.checkList?.forEach((check) => {
    const itemList = []

    // 被选中的参考项
    const { id, checked, children, childrenId } = check
    if (checked?.length > 0) {
      const none = 'Y'
      const marker = ''
      const refList = []
      checked.forEach((checkName) => {
        const idIndex = children.findIndex(child => child === checkName)
        if (idIndex > -1) {
          refList.push({
            id: childrenId[idIndex], // 参考项id
            checkBoxValue: 'Y',
          })
        }
      })
      if (refList.length > 0) {
        itemList.push({
          id,
          none,
          marker,
          refList,
        })
      }
    }

    if (itemList.length > 0) {
      resultList.push({
        checkMainId: checkMainIdByCheckListExecution,
        itemList,
      })
    }
  })

  return resultList
}
function dataOfPhaseFormatting(data) {
  // 各飞行阶段
  const flightPhaseList = ['航前准备', '驾驶舱准备', '推开及滑出阶段', '起飞阶段', '爬升阶段', '巡航阶段', '下降阶段', '进近着陆阶段', '滑入阶段', '关车时刻']
  const resultList = {}
  flightPhaseList.forEach((flightPhase) => {
    const flightPhaseData = data.find(item => item.phase === flightPhase)
    if (flightPhaseData) {
      const { items, programExecution, tem, cockpitIntegrity, checkListExecution } = flightPhaseData
      const temList = temFormatting(tem)
      const programExecuteList = programExecuteFormatting(programExecution)
      const checkList = itemListFormatting(items, cockpitIntegrity, checkListExecution)
      if (checkList?.length > 0 || temList?.length > 0 || programExecuteList?.length > 0) {
        resultList[flightPhase] = {
          checkList,
          temList,
          programExecuteList,
        }
      }
    }
  })
  return resultList
}
function freeMarkerListFormatting(list) {
  return list.map((item) => {
    return {
      marker: item.content,
      operateTime: item.updateTime,
    }
  })
}

export function uploadTemplateFormatting(data: any) {
  // console.log(data)
  const { id, account, templateId, flightInfo, mainRemarkInitData, flightPhaseCheckItemData } = data
  const { aircraft, arrAirport, depAirport, flightNo, flightTimeText } = flightInfo
  const syncData = {
    syncNo: `${id}-${flightTimeText}-${account}`,
    templateId,
    flDate: flightTimeText,
    flNum: flightNo,
    acrNum: aircraft,
    depApt: depAirport,
    arrApt: arrAirport,
    userNo: account,
    freeMarkerList: freeMarkerListFormatting(mainRemarkInitData),
    dataOfPhase: dataOfPhaseFormatting(flightPhaseCheckItemData),
  }
  return syncData
}
