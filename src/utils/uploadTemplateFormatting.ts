// function freeMarkerListFormatting(list) {
//   return list.map((item) => {
//     return {
//       marker: item.marker,
//       operateTime: item.operateTime,
//     }
//   })
// }

export function uploadTemplateFormatting(data: any) {
  // eslint-disable-next-line no-console
  console.log(data)
  const syncData = {
    syncNo: 'aaaa',
    templateId: 1,
    flDate: '2026-01-14 13:21',
    flNum: 'DKH1069',
    acrNum: 'B327W',
    depApt: 'ZHCC',
    arrApt: 'ZLXY',
    userNo: '10652',
    freeMarkerList: [
      {
        marker: '自由Marker',
        operateTime: '2026-03-10 15:30:26',
      },
    ],
    checkList:
    {
      航前准备: [ // 阶段名称作为key
        {
          checkMainId: 1, // 大项id
          itemList: [
            {
              id: 1, // 子项id
              none: 'Y',
              refList: [
                {
                  id: 1, // 参考项id
                  fillBlankValueList: ['填空1', '填空2'],
                },
              ],
              marker: '检查子项绑定备注',
            },
          ],
          temList: [
            {
              id: 1,
              count: 5,
            },
          ],
          programExecuteList: [
            {
              id: 1,
              count: 10,
            },
          ],

        },
      ],
      飞行阶段: [
        {
          checkMainId: 2,
          itemList: [
            {
              id: 2,
              none: 'Y',
              refList: [
                {
                  id: 2,
                  checkBoxValue: 'Y',
                },
              ],
              marker: '检查子项绑定备注',
            },
          ],
          temList: [
            {
              id: 2,
              count: 5,
            },
          ],
          programExecuteList: [
            {
              id: 2,
              count: 10,
            },
          ],

        },
      ],
    },
  }
  return syncData
}
