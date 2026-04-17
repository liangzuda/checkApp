interface remarkType {
  content: string
  updateTime: string
}

// 主备注
export const mainRemarkInitData: remarkType[] = []
// 新增需求：缓存临时输入值
export const mainRemarkTempInputData = { text: '' } // 对象

export const flightPhaseCheckItemInitData = [
  {
    phase: '航前准备',
    items: [
      {
        id: 2908,
        name: '机组协同',
        updateTime: '',
        details: [
          {
            id: 10509,
            content: '过短的滑行/飞行时间',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26180,
                    text: 'X-CHECK',
                  },
                  {
                    code: 26181,
                    text: 'Pilots',
                  },
                  {
                    code: 26182,
                    text: 'Cabin',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10510,
            content: '证件资料检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26183,
                    text: 'Pilots',
                  },
                  {
                    code: 26184,
                    text: 'Cabin',
                  },
                  {
                    code: 26185,
                    text: 'X-CHECK',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10511,
            content: '恶劣天气及颠簸位置',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26186,
                    text: '图形化评估',
                  },
                  {
                    code: 26187,
                    text: 'FPL颠簸指数',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10512,
            content: '正常及应急联络程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26188,
                    text: '参考项待补充R0048',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10513,
            content: '驾驶舱进出程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26189,
                    text: '参考项待补充R0047',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10514,
            content: '安保预案',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26190,
                    text: '参考项待补充R0049',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2909,
        name: '飞行计划',
        updateTime: '',
        details: [
          {
            id: 10515,
            content: '生成时间',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26191,
                  fields: [
                    {
                      type: 'text',
                      value: '与实际离场时间差异 ',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '小时',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10516,
            content: '备降场',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26192,
                  fields: [
                    {
                      type: 'text',
                      value: 'OFP调整',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '机场',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10517,
            content: '高度层油量调整',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26193,
                  fields: [
                    {
                      type: 'text',
                      value: 'OFP调整',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KG',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10518,
            content: '偏航绕飞油量',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26194,
                  fields: [
                    {
                      type: 'text',
                      value: 'OFP调整',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KG  ',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '分钟',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10519,
            content: '备降油量调整',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26195,
                  fields: [
                    {
                      type: 'text',
                      value: 'OFP调整',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KG   ',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '分钟',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10520,
            content: '起降重量限制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26196,
                    text: '评估控制',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10521,
            content: '额外油',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26197,
                  fields: [
                    {
                      type: 'text',
                      value: 'OFP调整',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KG   ',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '分钟  原因:',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2911,
        name: 'MEL',
        updateTime: '',
        details: [
          {
            id: 10523,
            content: 'O项操作程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26199,
                    text: '参考项待补充R0029',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10524,
            content: 'O项放行标准',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26200,
                    text: '参考项待补充R0031',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10525,
            content: 'O项性能影响',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26201,
                    text: '参考项待补充R0030',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2912,
        name: '通告',
        updateTime: '',
        details: [
          {
            id: 10526,
            content: '相关目视助航设施',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26202,
                    text: '性能控制',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10527,
            content: '相关跑道',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26203,
                    text: '关闭时段评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10528,
            content: '相关导航设施',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26204,
                    text: '进近影响评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10529,
            content: '相关航路',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26205,
                    text: '航路标注',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10530,
            content: '相关滑行道',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26206,
                    text: '航图标注',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10531,
            content: '相关障碍物',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26207,
                    text: '性能控制',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10532,
            content: '相关危险区禁区',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26208,
                    text: '航图标注',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2913,
        name: '图形化天气',
        updateTime: '',
        details: [
          {
            id: 10533,
            content: '火山灰',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26209,
                    text: '航路影响评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10534,
            content: '雷雨',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26210,
                    text: '航路影响评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10535,
            content: '颠簸',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26211,
                    text: '强度高度位置评估',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2915,
        name: '气象报文',
        updateTime: '',
        details: [
          {
            id: 10541,
            content: '气温',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26233,
                    text: '高低温补充程序',
                  },
                  {
                    code: 26234,
                    text: '性能评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10542,
            content: '沙尘',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26235,
                    text: '沙尘补充程序',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10543,
            content: '风',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26239,
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' /',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [
                  {
                    code: 26236,
                    text: '油量评估',
                  },
                  {
                    code: 26237,
                    text: '限制检查',
                  },
                  {
                    code: 26238,
                    text: '备降评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10544,
            content: '能见度/云高',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26240,
                  fields: [
                    {
                      type: 'text',
                      value: '能见度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KM  云高',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'FT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [
                  {
                    code: 26241,
                    text: '油量评估',
                  },
                  {
                    code: 26242,
                    text: '限制检查',
                  },
                  {
                    code: 26243,
                    text: '备降评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10545,
            content: '雷雨',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26244,
                    text: '油量评估',
                  },
                  {
                    code: 26245,
                    text: '限制检查',
                  },
                  {
                    code: 26246,
                    text: '备降评估',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10546,
            content: '降水',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26247,
                    text: '限制检查',
                  },
                  {
                    code: 26248,
                    text: '油量评估',
                  },
                  {
                    code: 26249,
                    text: '性能评估',
                  },
                  {
                    code: 26250,
                    text: '备降评估',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      checkList: [],
    },
    cockpitIntegrity: {
      checkList: [],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '驾驶舱准备',
    items: [
      {
        id: 2871,
        name: '起飞简令',
        updateTime: '',
        details: [
          {
            id: 10299,
            content: 'V1前后非正常情况预案',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25687,
                    text: '超重返场着陆',
                  },
                  {
                    code: 25688,
                    text: '返场跑道进近图',
                  },
                  {
                    code: 25689,
                    text: '撤离',
                  },
                  {
                    code: 25690,
                    text: '起飞备降预案',
                  },
                  {
                    code: 25691,
                    text: '中断',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10300,
            content: '起飞性能数据',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25692,
                    text: '配合FMS页面',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10301,
            content: '其他需特殊说明的情况',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25693,
                    text: '参考项待补充R0164',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10302,
            content: '特殊信息',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25694,
                    text: '关键通告',
                  },
                  {
                    code: 25695,
                    text: '重要天气',
                  },
                  {
                    code: 25696,
                    text: 'MEL',
                  },
                  {
                    code: 25697,
                    text: '边缘天气时的最低标准',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10303,
            content: '起飞简令执行时机',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25698,
                    text: 'ATC通信干扰',
                  },
                  {
                    code: 25699,
                    text: '舱单时间压力',
                  },
                  {
                    code: 25700,
                    text: '勤务客舱干扰',
                  },
                  {
                    code: 25701,
                    text: '其他干扰',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10304,
            content: '起飞跑道数据',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25702,
                    text: '标高',
                  },
                  {
                    code: 25703,
                    text: '距离',
                  },
                  {
                    code: 25704,
                    text: '配合机场图',
                  },
                  {
                    code: 25705,
                    text: '配合ND或FMS',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10305,
            content: '预计滑行路线',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25706,
                    text: '配合机坪图',
                  },
                  {
                    code: 25707,
                    text: '配合ND或FMS',
                  },
                  {
                    code: 25708,
                    text: '完整路线',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10306,
            content: '限制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25709,
                    text: 'ANP',
                  },
                  {
                    code: 25710,
                    text: 'TA',
                  },
                  {
                    code: 25711,
                    text: '配合离场图',
                  },
                  {
                    code: 25712,
                    text: 'ND或FMS',
                  },
                  {
                    code: 25713,
                    text: 'MSA及地形',
                  },
                  {
                    code: 25714,
                    text: 'RNP',
                  },
                  {
                    code: 25715,
                    text: '高度速度限制',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10307,
            content: '离场程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25716,
                    text: '航路点及路线',
                  },
                  {
                    code: 25717,
                    text: '配合离场图',
                  },
                  {
                    code: 25718,
                    text: '离场代码',
                  },
                  {
                    code: 25719,
                    text: '配合ND或FMS',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10308,
            content: '航路',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25720,
                    text: '距离',
                  },
                  {
                    code: 25721,
                    text: '油量',
                  },
                  {
                    code: 25722,
                    text: '时间',
                  },
                  {
                    code: 25723,
                    text: '配合OFP',
                  },
                  {
                    code: 25724,
                    text: '配合FMS',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2873,
        name: '起飞性能计算',
        updateTime: '',
        details: [
          {
            id: 10313,
            content: '加速收襟翼计划设置',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25729,
                    text: 'FMS默认高度',
                  },
                  {
                    code: 25730,
                    text: '该跑道最低收襟翼限制高度',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10314,
            content: 'FMS起飞数据输入准确性',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25731,
                    text: '人为修改速度',
                  },
                  {
                    code: 25732,
                    text: '人为修改FLEX',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10315,
            content: 'ATIS天气条件更新',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25733,
                    text: '最新的ATIS',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10316,
            content: '减噪程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25734,
                    text: '按照跑道NADP要求',
                  },
                  {
                    code: 25735,
                    text: '在没有NADP要求的跑道设置减噪',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10317,
            content: '性能软件版本检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25736,
                    text: '版本号',
                  },
                  {
                    code: 25737,
                    text: '飞机号',
                  },
                  {
                    code: 25738,
                    text: '构型',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10318,
            content: '污染跑道、风切变输入设置',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25739,
                    text: '不使用减推力',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10319,
            content: 'GUST、VRB输入设置',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25740,
                    text: 'VRB设为顶风',
                  },
                  {
                    code: 25741,
                    text: 'VRB设为顺风',
                  },
                  {
                    code: 25742,
                    text: 'VRB设为静风',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10320,
            content: 'MEL/CDL项目输入',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25743,
                    text: '参考项待补充R0116',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10321,
            content: 'GW及TOW区别确认',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25744,
                    text: '考虑TAXI OUT FUEL',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10322,
            content: '双人独立计算',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25745,
                    text: '参考项待补充R0118',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10323,
            content: '交叉道口预设',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25746,
                    text: '参考项待补充R0117',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10324,
            content: 'STOP MARGIN中断余度评估',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25747,
                    text: '参考项待补充R0120',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10325,
            content: '计算结果交叉检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25748,
                    text: '参考项待补充R0119',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2875,
        name: '舱单输入',
        updateTime: '',
        details: [
          {
            id: 10334,
            content: '舱单干重',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25758,
                    text: '舱单DOW与OFP差异检查',
                  },
                  {
                    code: 25759,
                    text: '舱单DOW与任务书差异检查',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10335,
            content: '舱单标识',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25760,
                    text: '飞机号',
                  },
                  {
                    code: 25761,
                    text: '版本号',
                  },
                  {
                    code: 25762,
                    text: '起降场',
                  },
                  {
                    code: 25763,
                    text: '航班号',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10336,
            content: '舱单ZFW输入FMS过程',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25764,
                    text: '参考项待补充R0100',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10337,
            content: '舱单数据',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25765,
                    text: 'ZFW与OFP差异检查',
                  },
                  {
                    code: 25766,
                    text: 'GW与OFP差异检查',
                  },
                  {
                    code: 25767,
                    text: 'LDW与OFP差异检查',
                  },
                  {
                    code: 25768,
                    text: 'TO FU与OFP差异检查',
                  },
                  {
                    code: 25769,
                    text: 'TOW与OFP差异检查',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10338,
            content: '舱单TO MAC及配平值输入过程',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25770,
                    text: '参考项待补充R0103',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10339,
            content: '舱单ZFW输入FMS后',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25771,
                    text: 'FMS与OFP飞行时间差异检查',
                  },
                  {
                    code: 25772,
                    text: 'FMS与OFP剩油差异检查',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10340,
            content: '舱单LMC操作',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25773,
                  fields: [
                    {
                      type: 'text',
                      value: '重量变更',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KG',
                    },
                  ],
                },
                {
                  code: 25775,
                  fields: [
                    {
                      type: 'text',
                      value: '人数变更',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KG',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [
                  {
                    code: 25774,
                    text: '舱单更新',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2877,
        name: 'FMS计划性能输入检查',
        updateTime: '',
        details: [
          {
            id: 10349,
            content: 'FMS与OFP TRIP TIME 交叉检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25790,
                    text: '参考项待补充R0086',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10350,
            content: 'FMS与OFP LD FU 交叉检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25791,
                    text: '参考项待补充R0088',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10351,
            content: 'FMS与OFP TRIP DIST 交叉检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25792,
                    text: '参考项待补充R0087',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10352,
            content: '梯级巡航高度输入',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25793,
                    text: '参考项待补充R0079',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10353,
            content: 'OFP重量输入',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25794,
                    text: '参考项待补充R0081',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10354,
            content: 'TROPO高度输入（A320）',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25795,
                    text: '参考项待补充R0080',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10355,
            content: 'OPT高度 MAX高度 检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25796,
                    text: '参考项待补充R0085',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10356,
            content: '航路风温、下降风温输入',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25797,
                    text: 'ACARS风',
                  },
                  {
                    code: 25798,
                    text: '平均风',
                  },
                  {
                    code: 25799,
                    text: '历史风',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2879,
        name: 'FMS航路输入检查',
        updateTime: '',
        details: [
          {
            id: 10358,
            content: '打开OFP',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25809,
                    text: '参考项待补充R0075',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10359,
            content: '逐一标注检查记号',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25810,
                    text: '参考项待补充R0077',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10360,
            content: '按顺序检查航路点',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25811,
                    text: '参考项待补充R0076',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10361,
            content: '航路及起降场进离场完整性',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25812,
                    text: '参考项待补充R0078',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2905,
        name: 'FMS进离场输入检查',
        updateTime: '',
        details: [
          {
            id: 10491,
            content: '高度及速度限制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26155,
                    text: '人工删除限制',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10492,
            content: 'ANP值及原始导航频率',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26156,
                    text: '参考项待补充R0074',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10493,
            content: '生效日期核对',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26157,
                    text: '参考项待补充R0068',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10494,
            content: '打开对应航图',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26158,
                    text: '参考项待补充R0067',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10495,
            content: '进离场代码',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26159,
                    text: '参考项待补充R0070',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10496,
            content: '航路衔接点',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26160,
                    text: '参考项待补充R0069',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10497,
            content: '每一航段方位、距离',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26161,
                    text: '参考项待补充R0072',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10498,
            content: '进离场航路点',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26162,
                    text: '参考项待补充R0071',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2906,
        name: '系统检查',
        updateTime: '',
        details: [
          {
            id: 10499,
            content: 'NDB（Navigation Data Base）生效日期检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26163,
                    text: '参考项待补充R0060',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10500,
            content: '顶板及系统状态检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26164,
                    text: '参考项待补充R0059',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10501,
            content: 'FMS性能衰减值检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26165,
                    text: '参考项待补充R0061',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10502,
            content: 'RVSM 高度表75FT检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26166,
                    text: '参考项待补充R0066',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10503,
            content: 'IRS位置输入校准 交叉检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26167,
                    text: 'LAST-POS',
                  },
                  {
                    code: 26168,
                    text: 'ARP',
                  },
                  {
                    code: 26169,
                    text: 'GPS',
                  },
                  {
                    code: 26170,
                    text: 'GATE',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2907,
        name: '勤务准备',
        updateTime: '',
        details: [
          {
            id: 10504,
            content: '绕机检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26171,
                    text: '参考项待补充R0050',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10505,
            content: '载客加油程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26172,
                    text: 'Pilots',
                  },
                  {
                    code: 26173,
                    text: 'Cabin',
                  },
                  {
                    code: 26174,
                    text: 'X-CHECK',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10506,
            content: '油量加注',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26175,
                  fields: [
                    {
                      type: 'text',
                      value: '偏离计划值',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KG',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10507,
            content: 'TLB检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26176,
                    text: 'PILOTS-MNT-XCHECK',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10508,
            content: '销套核查（首个航段）',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26177,
                    text: 'Pilots',
                  },
                  {
                    code: 26178,
                    text: 'MNT',
                  },
                  {
                    code: 26179,
                    text: 'X-CHECK',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10288,
      checkList: [
        {
          id: 10288,
          name: '检查单执行时机',
          checked: [],
          children: [
            '存在时间压力',
            'ATC通信干扰',
            '勤务客舱干扰',
            '飞行状态不稳定',
          ],
          childrenId: [
            25643,
            25644,
            25645,
            25646,
          ],
        },
        {
          id: 10289,
          name: '检查单执行角色',
          checked: [],
          children: [
            'PM认读-PF检查',
            'PM认读-PM检查',
            'PF认读-PF检查',
            '观察员认读',
          ],
          childrenId: [
            25647,
            25648,
            25649,
            25650,
          ],
        },
        {
          id: 10290,
          name: '检查单执行状态',
          checked: [],
          children: [
            '未专注听取',
            '私人事务干扰',
            '未专注认读',
          ],
          childrenId: [
            25651,
            25652,
            25653,
          ],
        },
        {
          id: 10291,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '清晰',
            '非标准术语',
            '不清晰',
            '使用标准术语',
          ],
          childrenId: [
            25654,
            25655,
            25656,
            25657,
          ],
        },
        {
          id: 10292,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '逐一定位认读',
            '未逐一定位',
            '背诵检查单',
            '未执行',
          ],
          childrenId: [
            25658,
            25659,
            25660,
            25661,
          ],
        },
        {
          id: 10293,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '按角色确认落实',
            '观察员确认落实',
            '仅PF确认落实',
            '仅PM确认落实',
          ],
          childrenId: [
            25662,
            25663,
            25664,
            25665,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkList: [],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '推开及滑出阶段',
    items: [
      {
        id: 2865,
        name: '跑道及离场变更',
        updateTime: '',
        details: [
          {
            id: 10269,
            content: '跑道及离场变更程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25604,
                    text: '移动中同时埋头舱内',
                  },
                  {
                    code: 25605,
                    text: 'PF更改CDU',
                  },
                  {
                    code: 25606,
                    text: 'PM更改CDU',
                  },
                  {
                    code: 25607,
                    text: '滑行中交接飞机',
                  },
                  {
                    code: 25608,
                    text: '停住飞机',
                  },
                  {
                    code: 25609,
                    text: '持续滑行',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2866,
        name: '滑出',
        updateTime: '',
        details: [
          {
            id: 10270,
            content: '滑行推力使用（320<40% N1; 787< 30% N1）',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25610,
                  fields: [
                    {
                      type: 'text',
                      value: 'MAX TAXI N1',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '%',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10271,
            content: '滑行转弯打滑',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25611,
                  fields: [
                    {
                      type: 'text',
                      value: '打滑时地速值：',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' KT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10272,
            content: '滑行地速控制（直线<30KT；转弯<10KT；机坪<10KT）',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25612,
                    text: 'MAX直线',
                  },
                  {
                    code: 25613,
                    text: 'MAX机坪',
                  },
                  {
                    code: 25614,
                    text: 'MAX转弯',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10273,
            content: '滑出及转弯左右清洁喊话',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25615,
                    text: 'PM',
                  },
                  {
                    code: 25616,
                    text: 'PF',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10274,
            content: '滑出前执行滑行路线简令',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25617,
                    text: 'PF',
                  },
                  {
                    code: 25618,
                    text: 'PM',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10275,
            content: '滑行冲突威胁喊话提示',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25619,
                    text: 'PM',
                  },
                  {
                    code: 25620,
                    text: 'PF',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10276,
            content: '滑行路线监控及喊话提示',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25621,
                    text: 'PF',
                  },
                  {
                    code: 25622,
                    text: 'PM',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10277,
            content: '刹车温度检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25623,
                    text: '参考项待补充R0210',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10278,
            content: '主滑畅通时的刹车使用',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25624,
                    text: '持续带刹车控制滑行速度',
                  },
                  {
                    code: 25625,
                    text: '接近30KT一次刹车降至低速',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10279,
            content: '最低起飞油量检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25626,
                    text: '参考项待补充R0211',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2867,
        name: '推开',
        updateTime: '',
        details: [
          {
            id: 10280,
            content: '得到机务指令后松刹车',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25627,
                    text: '参考项待补充R0190',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10281,
            content: '前轮转弯脱开确认',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25628,
                    text: '参考项待补充R0189',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10282,
            content: 'ATC推开指令确认',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25629,
                    text: '参考项待补充R0188',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10283,
            content: '启动过程中双人双足均放置在刹车上',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25630,
                    text: '参考项待补充R0192',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10284,
            content: '推出过程中双人双足均脱离刹车',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25631,
                    text: '参考项待补充R0191',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10285,
            content: '双人双侧确认机务及设备撤离',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25632,
                    text: '参考项待补充R0194',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10286,
            content: '按程序执行除防冰及构型设置',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25633,
                    text: '参考项待补充R0193',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10263,
      checkList: [
        {
          id: 10263,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '使用标准术语',
            '非标准术语',
            '清晰',
            '不清晰',
          ],
          childrenId: [
            25581,
            25582,
            25583,
            25584,
          ],
        },
        {
          id: 10264,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '逐一定位认读',
            '背诵检查单',
            '未执行',
            '未逐一定位',
          ],
          childrenId: [
            25585,
            25586,
            25587,
            25588,
          ],
        },
        {
          id: 10265,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '仅PM确认落实',
            '按角色确认落实',
            '仅PF确认落实',
            '观察员确认落实',
          ],
          childrenId: [
            25589,
            25590,
            25591,
            25592,
          ],
        },
        {
          id: 10266,
          name: '检查单执行状态',
          checked: [],
          children: [
            '私人事务干扰',
            '未专注认读',
            '未专注听取',
          ],
          childrenId: [
            25593,
            25594,
            25595,
          ],
        },
        {
          id: 10267,
          name: '检查单执行时机',
          checked: [],
          children: [
            '时间压力',
            'ATC通信干扰',
            '勤务客舱干扰',
            '其他干扰',
          ],
          childrenId: [
            25596,
            25597,
            25598,
            25599,
          ],
        },
        {
          id: 10268,
          name: '检查单执行角色',
          checked: [],
          children: [
            '观察员认读',
            'PM认读-PM检查',
            'PF认读-PF检查',
            'PM认读-PF检查',
          ],
          childrenId: [
            25600,
            25601,
            25602,
            25603,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2894,
      id: 10438,
      checkList: [
        {
          id: 26006,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 26007,
          name: '飞行关键阶段注意力分散其他',
          checked: false,
        },
        {
          id: 26008,
          name: '其他私人事务干扰',
          checked: false,
        },
        {
          id: 26009,
          name: '中央操纵台遮碍',
          checked: false,
        },
        {
          id: 26010,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 26011,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 26012,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 26013,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 26014,
          name: '氧气面罩遮碍',
          checked: false,
        },
        {
          id: 26015,
          name: '各风挡视线遮碍',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '起飞阶段',
    items: [
      {
        id: 2893,
        name: '起飞',
        updateTime: '',
        details: [
          {
            id: 10429,
            content: 'MCT或TOGA非正常使用',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25987,
                    text: '参考项待补充R0267',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10430,
            content: '低空速度限制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25988,
                    text: '管理构型遵守限制',
                  },
                  {
                    code: 25989,
                    text: '增速光洁超过速度限制',
                  },
                  {
                    code: 25990,
                    text: '增速250KT超过速度限制',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10431,
            content: '灯光及扰流板解除预位操作',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25991,
                    text: '离地时刻',
                  },
                  {
                    code: 25992,
                    text: '达到光洁形态前',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10432,
            content: '目标起飞推力设定核实喊话',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25993,
                    text: '参考项待补充R0261',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10433,
            content: '起始推力设置',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25994,
                    text: '参考项待补充R0260',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10434,
            content: 'TERRAIN及WX显示',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25995,
                    text: '仅TERRAIN',
                  },
                  {
                    code: 25996,
                    text: '均未打开',
                  },
                  {
                    code: 25997,
                    text: '仅WX',
                  },
                  {
                    code: 25998,
                    text: '对应亮度旋钮极暗',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10435,
            content: '得到CABIN READY后进入跑道',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25999,
                    text: '参考项待补充R0249',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10436,
            content: '环境威胁检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26000,
                    text: '跑道',
                  },
                  {
                    code: 26001,
                    text: '离场方向天气',
                  },
                  {
                    code: 26002,
                    text: '鸟群',
                  },
                  {
                    code: 26003,
                    text: '五边',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10437,
            content: '跑道号确认',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26004,
                    text: 'PM',
                  },
                  {
                    code: 26005,
                    text: 'PF',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10424,
      checkList: [
        {
          id: 10424,
          name: '检查单执行角色',
          checked: [],
          children: [
            'PM认读-PF检查',
            'PM认读-PM检查',
            'PF认读-PF检查',
            '观察员认读',
          ],
          childrenId: [
            25966,
            25967,
            25968,
            25969,
          ],
        },
        {
          id: 10425,
          name: '检查单执行时机',
          checked: [],
          children: [
            'ATC通信干扰',
            '勤务客舱干扰',
            '时间压力',
            '其他干扰',
            '注意力分散其他',
          ],
          childrenId: [
            25970,
            25971,
            25972,
            25973,
            25974,
          ],
        },
        {
          id: 10426,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '清晰',
            '非标准术语',
            '不清晰',
            '使用标准术语',
          ],
          childrenId: [
            25975,
            25976,
            25977,
            25978,
          ],
        },
        {
          id: 10427,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '未执行',
            '未逐一定位',
            '背诵检查单',
            '逐一定位认读',
          ],
          childrenId: [
            25979,
            25980,
            25981,
            25982,
          ],
        },
        {
          id: 10428,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '观察员确认落实',
            '按角色确认落实',
            '仅PF确认落实',
            '仅PM确认落实',
          ],
          childrenId: [
            25983,
            25984,
            25985,
            25986,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2891,
      id: 10423,
      checkList: [
        {
          id: 25957,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 25958,
          name: '氧气面罩遮碍',
          checked: false,
        },
        {
          id: 25959,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 25960,
          name: '中央操纵台遮碍',
          checked: false,
        },
        {
          id: 25961,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 25962,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 25963,
          name: '各风挡视线遮碍',
          checked: false,
        },
        {
          id: 25964,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 25965,
          name: '注意力分散其他',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '爬升阶段',
    items: [
      {
        id: 2887,
        name: 'FMS修改',
        updateTime: '',
        details: [
          {
            id: 10399,
            content: '执行/引入 CM1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25921,
                    text: '参考项待补充R0312',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10400,
            content: 'FMS修改喊话 CM1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25922,
                    text: '参考项待补充R0309',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10401,
            content: 'FMS执行/引入确认 CM1+CM2',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25923,
                    text: '参考项待补充R0311',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10402,
            content: 'FMS修改输入CM1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25924,
                    text: '参考项待补充R0310',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2888,
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            id: 10403,
            content: 'FCU/MCP飞行方式输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25925,
                    text: '参考项待补充R0304',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10404,
            content: 'FCU/MCP/ FMA数据核实及喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25926,
                    text: '参考项待补充R0303',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10405,
            content: '1000FT到改平喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25927,
                    text: '参考项待补充R0306',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10406,
            content: 'FMA方式证实及喊话 PF/PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25928,
                    text: '参考项待补充R0305',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10407,
            content: 'FCU/MCP数据输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25929,
                    text: '参考项待补充R0302',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10408,
            content: '指令内容核实PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25930,
                    text: '参考项待补充R0301',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10409,
            content: 'ATC指令复诵完整性PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25931,
                    text: '参考项待补充R0300',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10410,
            content: 'ATC通信过程中CABIN干扰',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25932,
                  fields: [
                    {
                      type: 'text',
                      value: '次数',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 25933,
                  fields: [
                    {
                      type: 'text',
                      value: '高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2890,
        name: '爬升控制',
        updateTime: '',
        details: [
          {
            id: 10418,
            content: 'SID高度限制遵守',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25950,
                    text: '参考项待补充R0298',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10419,
            content: '正确设置颠簸速度',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25951,
                    text: '参考项待补充R0317',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10420,
            content: 'SID速度限制遵守',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25952,
                    text: '参考项待补充R0299',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10421,
            content: '顶风顺风急流波动中',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25953,
                  fields: [
                    {
                      type: 'text',
                      value: '目标速度最大偏离± ',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KT',
                    },
                  ],
                },
                {
                  code: 25954,
                  fields: [
                    {
                      type: 'text',
                      value: '最大爬升率',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'FT/MIN',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10422,
            content: '临近TRAFFIC的爬升率控制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25955,
                  fields: [
                    {
                      type: 'text',
                      value: '爬升率',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'FT/MIN',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [
                  {
                    code: 25956,
                    text: '触响TA“TRAFFIC”',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10485,
      checkList: [
        {
          id: 10485,
          name: '检查单执行时机',
          checked: [],
          children: [
            '时间压力',
            '其他干扰',
            '注意力分散其他',
            'ATC通信干扰',
            '勤务客舱干扰',
          ],
          childrenId: [
            26125,
            26126,
            26127,
            26128,
            26129,
          ],
        },
        {
          id: 10486,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '仅PF确认落实',
            '仅PM确认落实',
            '按角色确认落实',
            '观察员确认落实',
          ],
          childrenId: [
            26130,
            26131,
            26132,
            26133,
          ],
        },
        {
          id: 10487,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '逐一定位认读',
            '未逐一定位',
            '背诵检查单',
            '未执行',
          ],
          childrenId: [
            26134,
            26135,
            26136,
            26137,
          ],
        },
        {
          id: 10488,
          name: '检查单执行角色',
          checked: [],
          children: [
            'PF认读-PF检查',
            '观察员认读',
            'PM认读-PF检查',
            'PM认读-PM检查',
          ],
          childrenId: [
            26138,
            26139,
            26140,
            26141,
          ],
        },
        {
          id: 10489,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '非标准术语',
            '不清晰',
            '使用标准术语',
            '清晰',
          ],
          childrenId: [
            26142,
            26143,
            26144,
            26145,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2901,
      id: 10476,
      checkList: [
        {
          id: 26107,
          name: '注意力分散其他',
          checked: false,
        },
        {
          id: 26108,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 26109,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 26110,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 26111,
          name: '中央操纵台遮碍',
          checked: false,
        },
        {
          id: 26112,
          name: '各风挡视线遮碍',
          checked: false,
        },
        {
          id: 26113,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 26114,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 26115,
          name: '氧气面罩遮碍',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '巡航阶段',
    items: [
      {
        id: 2881,
        name: 'FMS计划修改执行',
        updateTime: '',
        details: [
          {
            id: 10367,
            content: 'FMS计划修改输入CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25834,
                    text: '参考项待补充R0429',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10368,
            content: 'FMS计划修改喊话CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25835,
                    text: '参考项待补充R0428',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10369,
            content: '执行/引入 CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25836,
                    text: '参考项待补充R0431',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10370,
            content: 'FMS执行/引入确认 CM 1+CM2',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25837,
                    text: '参考项待补充R0430',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2883,
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            id: 10372,
            content: 'ATC指令复诵完整性PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25847,
                    text: '参考项待补充R0419',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10373,
            content: 'FMA方式证实及喊话 PF/PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25848,
                    text: '参考项待补充R0424',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10374,
            content: 'FCU/MCP飞行方式输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25849,
                    text: '参考项待补充R0423',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10375,
            content: 'ATC通信过程中CABIN干扰',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25850,
                  fields: [
                    {
                      type: 'text',
                      value: '次数',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 25851,
                  fields: [
                    {
                      type: 'text',
                      value: '高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10376,
            content: '1000FT到改平喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25852,
                    text: '参考项待补充R0425',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10377,
            content: '指令内容核实PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25853,
                    text: '参考项待补充R0420',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10378,
            content: 'FCU/MCP/ FMA数据核实及喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25854,
                    text: '参考项待补充R0422',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10379,
            content: 'FCU/MCP数据输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25855,
                    text: '参考项待补充R0421',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2885,
        name: '进近简令',
        updateTime: '',
        details: [
          {
            id: 10385,
            content: '检查了备降或等待油量计划',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25877,
                    text: '参考项待补充R0417',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10386,
            content: '按图说明了预计的滑行路线',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25878,
                    text: '参考项待补充R0416',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10387,
            content: '进近简令干扰',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25879,
                    text: 'ATC提前下降指令',
                  },
                  {
                    code: 25880,
                    text: 'CABIN干扰',
                  },
                  {
                    code: 25881,
                    text: 'ATC通信',
                  },
                  {
                    code: 25882,
                    text: '天气绕飞',
                  },
                  {
                    code: 25883,
                    text: '其他干扰',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10388,
            content: '其他需特殊说明的情况',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25884,
                    text: '参考项待补充R0418',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10389,
            content: '地形',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25885,
                    text: '配合ND或FMS',
                  },
                  {
                    code: 25886,
                    text: '跑道标高',
                  },
                  {
                    code: 25887,
                    text: '低温修正',
                  },
                  {
                    code: 25888,
                    text: '配合航图',
                  },
                  {
                    code: 25889,
                    text: 'MSA高度',
                  },
                  {
                    code: 25890,
                    text: '关键障碍物及地形分布',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10390,
            content: 'STAR',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25891,
                    text: '进场程序路线及航路点',
                  },
                  {
                    code: 25892,
                    text: '速度高度限制',
                  },
                  {
                    code: 25893,
                    text: 'STAR编号',
                  },
                  {
                    code: 25894,
                    text: '配合ND或FMS',
                  },
                  {
                    code: 25895,
                    text: 'QNH临界的TL变化',
                  },
                  {
                    code: 25896,
                    text: '配合STAR图',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10391,
            content: '性能',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25897,
                    text: '襟翼/VREF',
                  },
                  {
                    code: 25898,
                    text: '着陆性能计算结果',
                  },
                  {
                    code: 25899,
                    text: '说明了着陆重量',
                  },
                  {
                    code: 25900,
                    text: '刹车选择',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10392,
            content: '进近',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25901,
                    text: '进近路线',
                  },
                  {
                    code: 25902,
                    text: '导航频率',
                  },
                  {
                    code: 25903,
                    text: '配合ND或FMS',
                  },
                  {
                    code: 25904,
                    text: '进近类型',
                  },
                  {
                    code: 25905,
                    text: '进近梯度',
                  },
                  {
                    code: 25906,
                    text: '速度高度限制',
                  },
                  {
                    code: 25907,
                    text: '进近航道',
                  },
                  {
                    code: 25908,
                    text: 'FAF高度',
                  },
                  {
                    code: 25909,
                    text: '复飞程序',
                  },
                  {
                    code: 25910,
                    text: '配合进近图',
                  },
                  {
                    code: 25911,
                    text: '最低标准',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10393,
            content: '说明了预计着陆跑道',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25912,
                    text: '参考项待补充R0388',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10394,
            content: '更新并说明了最新天气',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25913,
                    text: '参考项待补充R0387',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10395,
            content: '特殊信息',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25914,
                    text: 'MEL',
                  },
                  {
                    code: 25915,
                    text: '关键通告',
                  },
                  {
                    code: 25916,
                    text: '重要天气',
                  },
                  {
                    code: 25917,
                    text: '边缘天气时的最低标准',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2899,
        name: '巡航控制',
        updateTime: '',
        details: [
          {
            id: 10463,
            content: '进入结冰环境前提前打开防冰开关',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26082,
                    text: '参考项待补充R0359',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10464,
            content: '全程使用WX RADAR',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26083,
                    text: '参考项待补充R0358',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10465,
            content: '执行了释压飘降D简令',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26084,
                    text: '参考项待补充R0361',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10466,
            content: '使用OFP监控时间油量进程',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26085,
                  fields: [
                    {
                      type: 'text',
                      value: '检查记录次数',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10467,
            content: '颠簸处置',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26086,
                    text: '未及时通知客舱',
                  },
                  {
                    code: 26087,
                    text: '安全带灯全程长亮',
                  },
                  {
                    code: 26088,
                    text: '未正确使用颠簸速度',
                  },
                  {
                    code: 26089,
                    text: '未正确使用等级信号',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10468,
            content: '巡航高度选择',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26090,
                  fields: [
                    {
                      type: 'text',
                      value: 'OPT/RECM高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 26091,
                  fields: [
                    {
                      type: 'text',
                      value: '机组申请',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 26092,
                  fields: [
                    {
                      type: 'text',
                      value: 'OFP高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 26093,
                  fields: [
                    {
                      type: 'text',
                      value: '实际高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 26094,
                  fields: [
                    {
                      type: 'text',
                      value: 'ATC提供最高',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 26095,
                  fields: [
                    {
                      type: 'text',
                      value: '最高颠簸等级',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: '（ L / M / H ）时刻',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10469,
            content: '飞行关键阶段的非必要客舱呼叫',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26096,
                  fields: [
                    {
                      type: 'text',
                      value: '起飞后',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'MIN',
                    },
                  ],
                },
                {
                  code: 26097,
                  fields: [
                    {
                      type: 'text',
                      value: '着陆前',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'MIN',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10470,
            content: 'PF+PM同时脱离飞行状态监控',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26098,
                  fields: [
                    {
                      type: 'text',
                      value: '次数',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 26099,
                  fields: [
                    {
                      type: 'text',
                      value: '时长',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10471,
            content: '天气趋势监控',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26100,
                    text: '目的地',
                  },
                  {
                    code: 26101,
                    text: '目的地备降场',
                  },
                  {
                    code: 26102,
                    text: '长航线航路备降场',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2916,
        name: '进近准备',
        updateTime: '',
        details: [
          {
            id: 10547,
            content: '机组独立执行了着陆性能计算并交叉检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26251,
                    text: '参考项待补充R0376',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10548,
            content: '配合STAR及APP航图进行了FMS进场及进近路线、高度速度限制检查',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26252,
                    text: '参考项待补充R0375',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10549,
            content: '制定了低温修正计划',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26253,
                    text: '参考项待补充R0377',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10550,
            content: '进近简令执行时机',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26254,
                    text: '下降过程中执行进近简令',
                  },
                  {
                    code: 26255,
                    text: '下降前完成进近简令',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10551,
            content: '进近准备执行时机',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26256,
                    text: '下降前完成进近准备',
                  },
                  {
                    code: 26257,
                    text: '下降过程中执行进近准备',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10552,
            content: '获取VHF天气时执行了ATC通信守听程序',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26258,
                    text: '参考项待补充R0374',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10553,
            content: 'ATC指挥飞机提前下降',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26259,
                  fields: [
                    {
                      type: 'text',
                      value: 'T/D前',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'NM',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10362,
      checkList: [
        {
          id: 10362,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '按角色确认落实',
            '仅PF确认落实',
            '仅PM确认落实',
            '观察员确认落实',
          ],
          childrenId: [
            25813,
            25814,
            25815,
            25816,
          ],
        },
        {
          id: 10363,
          name: '检查单执行角色',
          checked: [],
          children: [
            'PM认读-PF检查',
            'PM认读-PM检查',
            'PF认读-PF检查',
            '观察员认读',
          ],
          childrenId: [
            25817,
            25818,
            25819,
            25820,
          ],
        },
        {
          id: 10364,
          name: '检查单执行时机',
          checked: [],
          children: [
            '其他干扰',
            '注意力分散其他',
            'ATC通信干扰',
            '勤务客舱干扰',
            '时间压力',
          ],
          childrenId: [
            25821,
            25822,
            25823,
            25824,
            25825,
          ],
        },
        {
          id: 10365,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '不清晰',
            '使用标准术语',
            '清晰',
            '非标准术语',
          ],
          childrenId: [
            25826,
            25827,
            25828,
            25829,
          ],
        },
        {
          id: 10366,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '未执行',
            '未逐一定位',
            '背诵检查单',
            '逐一定位认读',
          ],
          childrenId: [
            25830,
            25831,
            25832,
            25833,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2878,
      id: 10357,
      checkList: [
        {
          id: 25800,
          name: '各风挡视线遮碍',
          checked: false,
        },
        {
          id: 25801,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 25802,
          name: '氧气面罩遮碍',
          checked: false,
        },
        {
          id: 25803,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 25804,
          name: '注意力分散其他',
          checked: false,
        },
        {
          id: 25805,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 25806,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 25807,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 25808,
          name: '中央操纵台遮碍',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '下降阶段',
    items: [
      {
        id: 2872,
        name: 'FMS修改',
        updateTime: '',
        details: [
          {
            id: 10309,
            content: 'FMS计划修改输入CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25725,
                    text: '参考项待补充R0493',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10310,
            content: 'FMS计划修改喊话CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25726,
                    text: '参考项待补充R0492',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10311,
            content: '执行/引入 CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25727,
                    text: '参考项待补充R0495',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10312,
            content: 'FMS执行/引入确认 CM 1+CM2',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25728,
                    text: '参考项待补充R0494',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2874,
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            id: 10326,
            content: 'FMA方式证实及喊话 PF/PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25749,
                    text: '参考项待补充R0488',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10327,
            content: 'ATC通信过程中CABIN干扰',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25750,
                  fields: [
                    {
                      type: 'text',
                      value: '次数',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 25751,
                  fields: [
                    {
                      type: 'text',
                      value: '高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10328,
            content: '1000FT到改平喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25752,
                    text: '参考项待补充R0489',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10329,
            content: 'FCU/MCP数据输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25753,
                    text: '参考项待补充R0485',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10330,
            content: '指令内容核实PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25754,
                    text: '参考项待补充R0484',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10331,
            content: 'FCU/MCP飞行方式输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25755,
                    text: '参考项待补充R0487',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10332,
            content: 'FCU/MCP/ FMA数据核实及喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25756,
                    text: '参考项待补充R0486',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10333,
            content: 'ATC指令复诵完整性PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25757,
                    text: '参考项待补充R0483',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2876,
        name: '下降控制',
        updateTime: '',
        details: [
          {
            id: 10341,
            content: '顶风顺风急流波动',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25776,
                  fields: [
                    {
                      type: 'text',
                      value: '最大下降率',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'FT/MIN',
                    },
                  ],
                },
                {
                  code: 25777,
                  fields: [
                    {
                      type: 'text',
                      value: '目标速度最大偏离± ',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'KT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10342,
            content: '临近TRAFFIC的下降率控制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25779,
                  fields: [
                    {
                      type: 'text',
                      value: '下降率',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: 'FT/MIN',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [
                  {
                    code: 25778,
                    text: '触响TA“TRAFFIC”',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10343,
            content: '位置及原始导航监控',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25780,
                    text: '参考项待补充R0471',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10344,
            content: '高度地形意识',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25781,
                    text: '参考项待补充R0470',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10345,
            content: '进近程序及跑道变更',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25782,
                    text: '参考项待补充R0469',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10346,
            content: '正确设置颠簸速度',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25783,
                    text: '参考项待补充R0480',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10347,
            content: '速度控制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25784,
                    text: '低于襟翼机动速度',
                  },
                  {
                    code: 25785,
                    text: '低于最小机动速度',
                  },
                  {
                    code: 25786,
                    text: '超过VMO/MMO',
                  },
                  {
                    code: 25787,
                    text: '超过构型标牌速度',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10348,
            content: '能量管理',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25789,
                  fields: [
                    {
                      type: 'text',
                      value: '高距比异常紧张 Track Miles',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' ALT',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [
                  {
                    code: 25788,
                    text: '申请机动消失高度',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10294,
      checkList: [
        {
          id: 10294,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '按角色确认落实',
            '仅PF确认落实',
            '仅PM确认落实',
            '观察员确认落实',
          ],
          childrenId: [
            25666,
            25667,
            25668,
            25669,
          ],
        },
        {
          id: 10295,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '清晰',
            '非标准术语',
            '不清晰',
            '使用标准术语',
          ],
          childrenId: [
            25670,
            25671,
            25672,
            25673,
          ],
        },
        {
          id: 10296,
          name: '检查单执行角色',
          checked: [],
          children: [
            'PM认读-PF检查',
            '观察员认读',
            'PM认读-PM检查',
            'PF认读-PF检查',
          ],
          childrenId: [
            25674,
            25675,
            25676,
            25677,
          ],
        },
        {
          id: 10297,
          name: '检查单执行时机',
          checked: [],
          children: [
            '时间压力',
            'ATC通信干扰',
            '注意力分散其他',
            '勤务客舱干扰',
            '其他干扰',
          ],
          childrenId: [
            25678,
            25679,
            25680,
            25681,
            25682,
          ],
        },
        {
          id: 10298,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '未执行',
            '未逐一定位',
            '背诵检查单',
            '逐一定位认读',
          ],
          childrenId: [
            25683,
            25684,
            25685,
            25686,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2868,
      id: 10287,
      checkList: [
        {
          id: 25634,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 25635,
          name: '氧气面罩遮碍',
          checked: false,
        },
        {
          id: 25636,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 25637,
          name: '中央操纵台遮碍',
          checked: false,
        },
        {
          id: 25638,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 25639,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 25640,
          name: '各风挡视线遮碍',
          checked: false,
        },
        {
          id: 25641,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 25642,
          name: '注意力分散其他',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '进近着陆阶段',
    items: [
      {
        id: 2889,
        name: '着陆控制',
        updateTime: '',
        details: [
          {
            id: 10411,
            content: '决断高度标准喊话',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25934,
                  fields: [
                    {
                      type: 'text',
                      value: 'PF',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 25935,
                  fields: [
                    {
                      type: 'text',
                      value: 'PM',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10412,
            content: '决断高度速度',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 25936,
                  fields: [
                    {
                      type: 'text',
                      value: 'VAPP±',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' KT',
                    },
                  ],
                },
                {
                  code: 25937,
                  fields: [
                    {
                      type: 'text',
                      value: '顺风分量',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' KT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10413,
            content: '停机余度——减至滑行速度时中线灯颜色',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25938,
                    text: '纯红',
                  },
                  {
                    code: 25939,
                    text: '红白相间',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10414,
            content: '着陆距离——着陆区标志',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25940,
                    text: '超过着陆区最后一个标志点',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10415,
            content: '转向直角脱离道速度',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25941,
                    text: '大于10KT',
                  },
                  {
                    code: 25942,
                    text: '大于15KT',
                  },
                  {
                    code: 25943,
                    text: '大于20KT',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10416,
            content: '转向快速脱离道速度',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25944,
                    text: '大于50KT',
                  },
                  {
                    code: 25945,
                    text: '大于60KT',
                  },
                  {
                    code: 25946,
                    text: '大于40KT',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10417,
            content: '着陆后程序开始执行时机',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25947,
                    text: '跑道高速滑跑减速阶段',
                  },
                  {
                    code: 25948,
                    text: '脱离跑道阶段',
                  },
                  {
                    code: 25949,
                    text: '脱离后稳定滑行阶段',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2895,
        name: '进近控制',
        updateTime: '',
        details: [
          {
            id: 10439,
            content: '进近程序及跑道变更',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26016,
                    text: '变更后FMS路线检查',
                  },
                  {
                    code: 26017,
                    text: '变更后导航频率检查',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10440,
            content: '1000FT AFE时推力',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26018,
                    text: '稳定进近推力',
                  },
                  {
                    code: 26019,
                    text: '保持慢车',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10441,
            content: '1000FT AFE时速度偏离',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26020,
                  fields: [
                    {
                      type: 'text',
                      value: 'VAPP± ',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' KT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10442,
            content: '达到稳定进近高度',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26021,
                  fields: [
                    {
                      type: 'text',
                      value: '实际AFE高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' FT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10443,
            content: '遵从高度/速度限制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26022,
                    text: '参考项待填充R0262',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10444,
            content: 'TERRAIN及WX显示',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26023,
                    text: '均未打开',
                  },
                  {
                    code: 26024,
                    text: '对应亮度旋钮极暗',
                  },
                  {
                    code: 26025,
                    text: '仅WX',
                  },
                  {
                    code: 26026,
                    text: '仅TERRAIN',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10445,
            content: '下降率控制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26027,
                    text: '10000英尺以下大于3000FT/min',
                  },
                  {
                    code: 26028,
                    text: '1000英尺以下大于1200FT/min 增加选择 MAN/ AUTO',
                  },
                  {
                    code: 26029,
                    text: '5000英尺以下大于2000FT/min',
                  },
                  {
                    code: 26030,
                    text: '2500英尺以下大于1500FT/min',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10446,
            content: '进行了位置及原始导航监控（ILS及VOR）',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26031,
                    text: 'R0262',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2900,
        name: 'FMS计划修改执行',
        updateTime: '',
        details: [
          {
            id: 10472,
            content: 'FMS计划修改输入CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26103,
                    text: '参考项待填充R0568',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10473,
            content: 'FMS计划修改喊话CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26104,
                    text: '参考项待填充R0567',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10474,
            content: '执行/引入 CM 1',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26105,
                    text: '参考项待填充R0570',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10475,
            content: 'FMS执行/引入确认 CM 1+CM2',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26106,
                    text: '参考项待填充R0569',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
      {
        id: 2902,
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            id: 10477,
            content: 'FMA方式证实及喊话 PF/PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26116,
                    text: '参考项待填充R0563',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10478,
            content: 'FCU/MCP飞行方式输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26117,
                    text: '参考项待填充R0562',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10479,
            content: 'ATC通信过程中CABIN干扰',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26118,
                  fields: [
                    {
                      type: 'text',
                      value: '高度',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
                {
                  code: 26119,
                  fields: [
                    {
                      type: 'text',
                      value: '次数',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10480,
            content: '1000FT到改平喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26120,
                    text: '参考项待填充R0564',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10481,
            content: 'FCU/MCP/ FMA数据核实及喊话 PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26121,
                    text: '参考项待填充R0561',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10482,
            content: 'FCU/MCP数据输入及喊话 PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26122,
                    text: '参考项待填充R0560',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10483,
            content: '指令内容核实PF',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26123,
                    text: '参考项待填充R0559',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10484,
            content: 'ATC指令复诵完整性PM',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26124,
                    text: '参考项待填充R0558',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10458,
      checkList: [
        {
          id: 10458,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '按角色确认落实',
            '仅PF确认落实',
            '仅PM确认落实',
            '观察员确认落实',
          ],
          childrenId: [
            26061,
            26062,
            26063,
            26064,
          ],
        },
        {
          id: 10459,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '清晰',
            '不清晰',
            '使用标准术语',
            '非标准术语',
          ],
          childrenId: [
            26065,
            26066,
            26067,
            26068,
          ],
        },
        {
          id: 10460,
          name: '检查单执行时机',
          checked: [],
          children: [
            '其他干扰',
            'ATC通信干扰',
            '勤务客舱干扰',
            '注意力分散其他',
            '时间压力',
          ],
          childrenId: [
            26069,
            26070,
            26071,
            26072,
            26073,
          ],
        },
        {
          id: 10461,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '未执行',
            '未逐一定位',
            '背诵检查单',
            '逐一定位认读',
          ],
          childrenId: [
            26074,
            26075,
            26076,
            26077,
          ],
        },
        {
          id: 10462,
          name: '检查单执行角色',
          checked: [],
          children: [
            'PM认读-PM检查',
            'PF认读-PF检查',
            'PM认读-PF检查',
            '观察员认读',
          ],
          childrenId: [
            26078,
            26079,
            26080,
            26081,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2897,
      id: 10457,
      checkList: [
        {
          id: 26052,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 26053,
          name: '氧气面罩遮碍',
          checked: false,
        },
        {
          id: 26054,
          name: '各风挡视线遮碍',
          checked: false,
        },
        {
          id: 26055,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 26056,
          name: '注意力分散其他',
          checked: false,
        },
        {
          id: 26057,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 26058,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 26059,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 26060,
          name: '中央操纵台遮碍',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '滑入阶段',
    items: [
      {
        id: 2896,
        name: '滑入控制',
        updateTime: '',
        details: [
          {
            id: 10447,
            content: 'APU启动时机',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26032,
                    text: '关车前2分钟',
                  },
                  {
                    code: 26033,
                    text: '关车前2-10分钟',
                  },
                  {
                    code: 26034,
                    text: '关车前10分钟以上',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10448,
            content: '污染道面构型控制',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26035,
                    text: '保持着陆构型',
                  },
                  {
                    code: 26036,
                    text: '收起构型',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10449,
            content: '滑入前执行滑行路线简令',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26037,
                    text: 'PF',
                  },
                  {
                    code: 26038,
                    text: 'PM',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10450,
            content: '滑行地速控制（直线<30KT；转弯<10KT；机坪<10KT）',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26039,
                    text: 'MAX转弯',
                  },
                  {
                    code: 26040,
                    text: 'MAX直线',
                  },
                  {
                    code: 26041,
                    text: 'MAX机坪',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10451,
            content: '滑行推力使用（320<40% N1; 787< 30% N1）',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26042,
                  fields: [
                    {
                      type: 'text',
                      value: 'MAX TAXI N1',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' %',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10452,
            content: '主滑畅通时的刹车使用',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26043,
                    text: '持续带刹车控制滑行速度',
                  },
                  {
                    code: 26044,
                    text: '接近30KT一次刹车降至低速',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10453,
            content: '滑行转弯打滑',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [
                {
                  code: 26045,
                  fields: [
                    {
                      type: 'text',
                      value: '打滑时地速值：',
                    },
                    {
                      type: 'input',
                      value: '',
                    },
                    {
                      type: 'text',
                      value: ' KT',
                    },
                  ],
                },
              ],
              checkbox: {
                list: [],
                checked: [],
              },
            },
          },
          {
            id: 10454,
            content: '滑行路线监控及喊话提示',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26046,
                    text: 'PF',
                  },
                  {
                    code: 26047,
                    text: 'PM',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10455,
            content: '滑入及转弯左右清洁喊话',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26048,
                    text: 'PF',
                  },
                  {
                    code: 26049,
                    text: 'PM',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10456,
            content: '滑行冲突威胁喊话提示',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 26050,
                    text: 'PF',
                  },
                  {
                    code: 26051,
                    text: 'PM',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10536,
      checkList: [
        {
          id: 10536,
          name: '检查单执行角色',
          checked: [],
          children: [
            '观察员认读',
            'PM认读-PM检查',
            'PF认读-PF检查',
            'PM认读-PF检查',
          ],
          childrenId: [
            26212,
            26213,
            26214,
            26215,
          ],
        },
        {
          id: 10537,
          name: '检查单执行时机',
          checked: [],
          children: [
            'ATC通信干扰',
            '勤务客舱干扰',
            '时间压力',
            '其他干扰',
            '注意力分散其他',
          ],
          childrenId: [
            26216,
            26217,
            26218,
            26219,
            26220,
          ],
        },
        {
          id: 10538,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '仅PM确认落实',
            '观察员确认落实',
            '按角色确认落实',
            '仅PF确认落实',
          ],
          childrenId: [
            26221,
            26222,
            26223,
            26224,
          ],
        },
        {
          id: 10539,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '清晰',
            '使用标准术语',
            '非标准术语',
            '不清晰',
          ],
          childrenId: [
            26225,
            26226,
            26227,
            26228,
          ],
        },
        {
          id: 10540,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '逐一定位认读',
            '未执行',
            '未逐一定位',
            '背诵检查单',
          ],
          childrenId: [
            26229,
            26230,
            26231,
            26232,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2904,
      id: 10490,
      checkList: [
        {
          id: 26146,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 26147,
          name: '注意力分散其他',
          checked: false,
        },
        {
          id: 26148,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 26149,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 26150,
          name: '中央操纵台遮碍',
          checked: false,
        },
        {
          id: 26151,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 26152,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 26153,
          name: '氧气面罩遮碍',
          checked: false,
        },
        {
          id: 26154,
          name: '各风挡视线遮碍',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: '关车时刻',
    items: [
      {
        id: 2886,
        name: '航后程序',
        updateTime: '',
        details: [
          {
            id: 10396,
            content: '空中出现故障或异常，未填写TLB',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25918,
                    text: '参考项待填充R0651',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10397,
            content: '执行了飞行后讲评',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25919,
                    text: '参考项待填充R0653',
                  },
                ],
                checked: [],
              },
            },
          },
          {
            id: 10398,
            content: '执行了短停过站的刹车能量检查评估',
            status: 1,
            updateTime: '',
            remarks: [],
            remarkTempInput: {
              text: '',
            },
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 25920,
                    text: '参考项待填充R0652',
                  },
                ],
                checked: [],
              },
            },
          },
        ],
      },
    ],
    programExecution: [
      {
        name: '通讯',
        subItems: [
          {
            id: 1,
            name: 'PM边通讯边调频',
            triggerCount: 0,
          },
          {
            id: 2,
            name: 'PM调频完成后双方未证实',
            triggerCount: 0,
          },
          {
            id: 3,
            name: 'PM预调除离场频率以外的频率',
            triggerCount: 0,
          },
          {
            id: 4,
            name: 'PM未完整复诵ATC指令',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'ATC指令执行',
        subItems: [
          {
            id: 5,
            name: '驾驶舱分工不明确',
            triggerCount: 0,
          },
          {
            id: 6,
            name: 'PF在PM通讯时操作FCU/MCP',
            triggerCount: 0,
          },
          {
            id: 7,
            name: 'PF未主动证实ATC指令内容',
            triggerCount: 0,
          },
          {
            id: 8,
            name: 'PM未证实指令正确和完整',
            triggerCount: 0,
          },
          {
            id: 9,
            name: 'PF未执行FCU/MCP数据输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 10,
            name: 'PM未核实FCU/MCP/ FMA数据及证实',
            triggerCount: 0,
          },
          {
            id: 11,
            name: 'PF未实施FCU/MCP飞行方式输入及喊话 ',
            triggerCount: 0,
          },
          {
            id: 12,
            name: 'PF/PM未进行FMA方式证实及喊话 ',
            triggerCount: 0,
          },
          {
            id: 13,
            name: 'PM未执行1000FT到改平喊话 ',
            triggerCount: 0,
          },
          {
            id: 14,
            name: 'ATC通信过程中受到CABIN干扰',
            triggerCount: 0,
          },
          {
            id: 15,
            name: '标准喊话缺失/不准确',
            triggerCount: 0,
          },
        ],
      },
      {
        name: 'FMS修改',
        subItems: [
          {
            id: 16,
            name: '任一机组未经互相证实便直接执行MCDU更改',
            triggerCount: 0,
          },
          {
            id: 17,
            name: 'PF和PM同时执行MCDU修改输入',
            triggerCount: 0,
          },
          {
            id: 18,
            name: 'PF在关键阶段操作MCDU',
            triggerCount: 0,
          },
        ],
      },
    ],
    checkListExecution: {
      id: 10380,
      checkList: [
        {
          id: 10380,
          name: '检查单执行角色',
          checked: [],
          children: [
            '观察员认读',
            'PM认读-PM检查',
            'PF认读-PF检查',
            'PM认读-PF检查',
          ],
          childrenId: [
            25856,
            25857,
            25858,
            25859,
          ],
        },
        {
          id: 10381,
          name: '检查单执行时机',
          checked: [],
          children: [
            '时间压力',
            'ATC通信干扰',
            '注意力分散其他',
            '勤务客舱干扰',
            '其他干扰',
          ],
          childrenId: [
            25860,
            25861,
            25862,
            25863,
            25864,
          ],
        },
        {
          id: 10382,
          name: '检查单朗读清晰度',
          checked: [],
          children: [
            '使用标准术语',
            '非标准术语',
            '清晰',
            '不清晰',
          ],
          childrenId: [
            25865,
            25866,
            25867,
            25868,
          ],
        },
        {
          id: 10383,
          name: '检查单条目定位准确性',
          checked: [],
          children: [
            '逐一定位认读',
            '未逐一定位',
            '背诵检查单',
            '未执行',
          ],
          childrenId: [
            25869,
            25870,
            25871,
            25872,
          ],
        },
        {
          id: 10384,
          name: '检查单项目确认落实',
          checked: [],
          children: [
            '仅PM确认落实',
            '观察员确认落实',
            '按角色确认落实',
            '仅PF确认落实',
          ],
          childrenId: [
            25873,
            25874,
            25875,
            25876,
          ],
        },
      ],
    },
    cockpitIntegrity: {
      checkMainId: 2882,
      id: 10371,
      checkList: [
        {
          id: 25838,
          name: '飞行关键阶段玻璃容器未收起',
          checked: false,
        },
        {
          id: 25839,
          name: '注意力分散其他',
          checked: false,
        },
        {
          id: 25840,
          name: '中央操纵台遮碍',
          checked: false,
        },
        {
          id: 25841,
          name: '断路器面板遮碍',
          checked: false,
        },
        {
          id: 25842,
          name: '操纵装置遮碍',
          checked: false,
        },
        {
          id: 25843,
          name: '通过中央操纵台上方传递餐饮',
          checked: false,
        },
        {
          id: 25844,
          name: 'PF+PM同时用餐',
          checked: false,
        },
        {
          id: 25845,
          name: '氧气面罩遮碍',
          checked: false,
        },
        {
          id: 25846,
          name: '各风挡视线遮碍',
          checked: false,
        },
      ],
    },
    tem: [
      {
        id: 5428,
        category: '操纵差错',
        items: [
          {
            id: 5429,
            name: '人工飞行/飞行操纵',
            subItems: [
              {
                id: 5430,
                name: '非故意的横向偏差',
                triggerCount: 0,
              },
              {
                id: 5431,
                name: '非故意的高度偏差',
                triggerCount: 0,
              },
              {
                id: 5432,
                name: '非故意的速度偏差',
                triggerCount: 0,
              },
              {
                id: 5433,
                name: '不正确的襟翼设定',
                triggerCount: 0,
              },
              {
                id: 5434,
                name: '不正确的减速板设定',
                triggerCount: 0,
              },
              {
                id: 5435,
                name: '不正确的自动刹车设定',
                triggerCount: 0,
              },
              {
                id: 5436,
                name: '不正确的反推设定',
                triggerCount: 0,
              },
              {
                id: 5437,
                name: '不正确的推力设定',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5438,
            name: '地面导航差错',
            subItems: [
              {
                id: 5439,
                name: '试图转向错误的跑道',
                triggerCount: 0,
              },
              {
                id: 5440,
                name: '试图转向错误的停机坪/滑行道/停机位',
                triggerCount: 0,
              },
              {
                id: 5441,
                name: '错过跑道',
                triggerCount: 0,
              },
              {
                id: 5442,
                name: '错过滑行道',
                triggerCount: 0,
              },
              {
                id: 5443,
                name: '错过停机门',
                triggerCount: 0,
              },
              {
                id: 5444,
                name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）',
                triggerCount: 0,
              },
              {
                id: 5445,
                name: '试图或已经对正错误跑道的中心线',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5446,
            name: '自动化设置/选择差错',
            subItems: [
              {
                id: 5447,
                name: '不正确的高度设定、不正确的高度方式设定',
                triggerCount: 0,
              },
              {
                id: 5448,
                name: '不正确的速度设定、不正确的速度方式设定',
                triggerCount: 0,
              },
              {
                id: 5449,
                name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定',
                triggerCount: 0,
              },
              {
                id: 5450,
                name: '不正确的自动油门设定、不正确的自动油门方式设定',
                triggerCount: 0,
              },
              {
                id: 5451,
                name: '不正确的垂直速度设定',
                triggerCount: 0,
              },
              {
                id: 5452,
                name: 'AP/FD错误设置',
                triggerCount: 0,
              },
              {
                id: 5453,
                name: '作出下降决断偏晚',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5454,
            name: '系统/无线电/仪表设置或选择差错',
            subItems: [
              {
                id: 5455,
                name: '错误的导航无线电频率',
                triggerCount: 0,
              },
              {
                id: 5456,
                name: '选用错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5457,
                name: '选用错误的ATC频率',
                triggerCount: 0,
              },
              {
                id: 5458,
                name: '错误的应答机信号',
                triggerCount: 0,
              },
              {
                id: 5459,
                name: '气象雷达使用不足',
                triggerCount: 0,
              },
              {
                id: 5460,
                name: '错误的显示器开关设置',
                triggerCount: 0,
              },
              {
                id: 5461,
                name: '没有按时放下起落架',
                triggerCount: 0,
              },
              {
                id: 5462,
                name: '没有按时收上起落架',
                triggerCount: 0,
              },
              {
                id: 5463,
                name: '没有打开着陆灯',
                triggerCount: 0,
              },
              {
                id: 5464,
                name: '没有开启TCAS',
                triggerCount: 0,
              },
              {
                id: 5465,
                name: '没有打开系紧安全带信号灯',
                triggerCount: 0,
              },
              {
                id: 5466,
                name: '其他不正确的开关或手柄设置',
                triggerCount: 0,
              },
              {
                id: 5467,
                name: '没有开启空调组件（没有增压)',
                triggerCount: 0,
              },
              {
                id: 5468,
                name: '使用挂有INOP标签的设备',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5469,
            name: '其他差错',
            subItems: [
              {
                id: 5470,
                name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）',
                triggerCount: 0,
              },
              {
                id: 5471,
                name: '在性能包线的边缘操作航空器（无差错的缓冲区）',
                triggerCount: 0,
              },
              {
                id: 5472,
                name: '其他操纵差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5473,
        category: '程序性差错',
        items: [
          {
            id: 5474,
            name: '遵守SOP/交叉检查',
            subItems: [
              {
                id: 5475,
                name: '故意行为',
                triggerCount: 0,
              },
              {
                id: 5476,
                name: '没有交叉核实 FCU/FMA/PFD/高度的改变',
                triggerCount: 0,
              },
              {
                id: 5477,
                name: '在执行前没有交叉核实飞行FMC/CDU改变',
                triggerCount: 0,
              },
              {
                id: 5478,
                name: 'PF人工操纵时设置MCP/FCU',
                triggerCount: 0,
              },
              {
                id: 5479,
                name: 'PF自己单独更改FMC',
                triggerCount: 0,
              },
              {
                id: 5480,
                name: '在到达TA/TL之前设置STD/QNH',
                triggerCount: 0,
              },
              {
                id: 5481,
                name: '没有交叉核实高度表设置',
                triggerCount: 0,
              },
              {
                id: 5482,
                name: '没有设置最低标准',
                triggerCount: 0,
              },
              {
                id: 5483,
                name: '故意低于下滑道飞行',
                triggerCount: 0,
              },
              {
                id: 5484,
                name: 'PF自己设置形态或附件',
                triggerCount: 0,
              },
              {
                id: 5485,
                name: '未完成MEL即实施航空器运行',
                triggerCount: 0,
              },
              {
                id: 5486,
                name: '没有按顺序执行正确的工作程序',
                triggerCount: 0,
              },
              {
                id: 5487,
                name: '无ATC许可偏离速度',
                triggerCount: 0,
              },
              {
                id: 5488,
                name: '非故意行为',
                triggerCount: 0,
              },
              {
                id: 5489,
                name: '错误的高度表设置',
                triggerCount: 0,
              },
              {
                id: 5490,
                name: '在FMC中选择错误的进近',
                triggerCount: 0,
              },
              {
                id: 5491,
                name: '其他错误的CDU输入/设置',
                triggerCount: 0,
              },
              {
                id: 5492,
                name: '将错误的重量/平衡计算值输入FMC',
                triggerCount: 0,
              },
              {
                id: 5493,
                name: '将错误的航路点/航路设置输入FMC',
                triggerCount: 0,
              },
              {
                id: 5494,
                name: '带销套滑入或滑出',
                triggerCount: 0,
              },
              {
                id: 5495,
                name: '无法定性',
                triggerCount: 0,
              },
              {
                id: 5496,
                name: '其他/无法定型的违反SOP/交叉检查行为',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5497,
            name: '检查单差错',
            subItems: [
              {
                id: 5498,
                name: '正常检查单',
                triggerCount: 0,
              },
              {
                id: 5499,
                name: '凭记忆执行检查单',
                triggerCount: 0,
              },
              {
                id: 5500,
                name: '检查单完成时未喊“完成”',
                triggerCount: 0,
              },
              {
                id: 5501,
                name: '遗漏检査单/项目',
                triggerCount: 0,
              },
              {
                id: 5502,
                name: '使用非标准的检査单规约（如使用非标准的反应方式）',
                triggerCount: 0,
              },
              {
                id: 5503,
                name: '执行错误的检查单',
                triggerCount: 0,
              },
              {
                id: 5504,
                name: '检査单实施时间偏晚或不当',
                triggerCount: 0,
              },
              {
                id: 5505,
                name: '自己执行检查单——没有质疑或反应',
                triggerCount: 0,
              },
              {
                id: 5506,
                name: '自己开始实施检査单——PF没有要求',
                triggerCount: 0,
              },
              {
                id: 5507,
                name: '非正常检查单',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5508,
            name: '喊话差错',
            subItems: [
              {
                id: 5509,
                name: '遗漏起飞喊话（如，V-速度）',
                triggerCount: 0,
              },
              {
                id: 5510,
                name: '遗漏爬升或下降喊话',
                triggerCount: 0,
              },
              {
                id: 5511,
                name: '遗漏进近喊话',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5512,
            name: '简令差错',
            subItems: [
              {
                id: 5513,
                name: '遗漏起飞简令',
                triggerCount: 0,
              },
              {
                id: 5514,
                name: '遗漏进近简令',
                triggerCount: 0,
              },
              {
                id: 5515,
                name: '遗漏客舱协同简令',
                triggerCount: 0,
              },
              {
                id: 5516,
                name: '不完整的起飞简令',
                triggerCount: 0,
              },
              {
                id: 5517,
                name: '不完整的进近简令',
                triggerCount: 0,
              },
              {
                id: 5518,
                name: '不完整的客舱协同简令',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5519,
            name: '文件差错',
            subItems: [
              {
                id: 5520,
                name: '载重平衡/燃油信息不正确',
                triggerCount: 0,
              },
              {
                id: 5521,
                name: '记录了错误的重量和平衡信息',
                triggerCount: 0,
              },
              {
                id: 5522,
                name: '记录了错误的燃油信息',
                triggerCount: 0,
              },
              {
                id: 5523,
                name: 'ATIS/放行指令不正确',
                triggerCount: 0,
              },
              {
                id: 5524,
                name: '记录了错误的ATIS',
                triggerCount: 0,
              },
              {
                id: 5525,
                name: '记录了错误的跑道信息',
                triggerCount: 0,
              },
              {
                id: 5526,
                name: '记录了错误的放行指令',
                triggerCount: 0,
              },
              {
                id: 5527,
                name: '误解文件项目',
                triggerCount: 0,
              },
              {
                id: 5528,
                name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）',
                triggerCount: 0,
              },
              {
                id: 5529,
                name: '不正确或缺失日志记录',
                triggerCount: 0,
              },
              {
                id: 5530,
                name: '不正确的日志记录',
                triggerCount: 0,
              },
              {
                id: 5531,
                name: '缺失日志记录',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5532,
            name: '不稳定进近后未复飞',
            subItems: [
              {
                id: 5533,
                name: '出现不稳定进近未实施复飞',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5534,
            name: '其他差错',
            subItems: [
              {
                id: 5535,
                name: '其他程序性差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5536,
        category: '通信差错',
        items: [
          {
            id: 5537,
            name: '机组对外界通讯差错',
            subItems: [
              {
                id: 5538,
                name: '和ATC',
                triggerCount: 0,
              },
              {
                id: 5539,
                name: '错误复诵或回应ATC',
                triggerCount: 0,
              },
              {
                id: 5540,
                name: '忘记给ATC发送呼号',
                triggerCount: 0,
              },
              {
                id: 5541,
                name: '没有给ATC复诵或回话',
                triggerCount: 0,
              },
              {
                id: 5542,
                name: '忘记给ATC发送位置报告',
                triggerCount: 0,
              },
              {
                id: 5543,
                name: '错误理解ATC的指令',
                triggerCount: 0,
              },
              {
                id: 5544,
                name: '机组错过了ATC呼叫',
                triggerCount: 0,
              },
              {
                id: 5545,
                name: '使用非标准的ATC术语',
                triggerCount: 0,
              },
              {
                id: 5546,
                name: '从ATC处接受了会增加不必要风险的指令',
                triggerCount: 0,
              },
              {
                id: 5547,
                name: '向ATC提出会增加不必要风险的请求',
                triggerCount: 0,
              },
              {
                id: 5548,
                name: '在非目视条件下接受目视指令',
                triggerCount: 0,
              },
              {
                id: 5549,
                name: '其他和ATC通讯差错',
                triggerCount: 0,
              },
              {
                id: 5550,
                name: '和客舱机组',
                triggerCount: 0,
              },
              {
                id: 5551,
                name: '在不恰当的时间进行非必需的沟通',
                triggerCount: 0,
              },
              {
                id: 5552,
                name: '其他和客舱机组通讯差错',
                triggerCount: 0,
              },
              {
                id: 5553,
                name: '和地面人员',
                triggerCount: 0,
              },
              {
                id: 5554,
                name: '和签派',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5555,
            name: '机组间通讯差错',
            subItems: [
              {
                id: 5556,
                name: '机组间错误交流',
                triggerCount: 0,
              },
              {
                id: 5557,
                name: '机组间交流误解',
                triggerCount: 0,
              },
              {
                id: 5558,
                name: '机组间缺乏交流',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5559,
            name: 'CPDLC差错',
            subItems: [
              {
                id: 5560,
                name: 'CPDLC差错',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5561,
        category: '环境威胁',
        items: [
          {
            id: 5562,
            name: '气象',
            subItems: [
              {
                id: 5563,
                name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高）',
                triggerCount: 0,
              },
              {
                id: 5564,
                name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象。',
                triggerCount: 0,
              },
              {
                id: 5565,
                name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风',
                triggerCount: 0,
              },
              {
                id: 5566,
                name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5567,
            name: '缺乏目视参考',
            subItems: [
              {
                id: 5568,
                name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5569,
            name: '空中交通管制服务',
            subItems: [
              {
                id: 5570,
                name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5571,
            name: '鸟/外来物',
            subItems: [
              {
                id: 5572,
                name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5573,
            name: '机场设施',
            subItems: [
              {
                id: 5574,
                name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭',
                triggerCount: 0,
              },
              {
                id: 5575,
                name: '受污染的跑道、滑行道，以及刹车效应不良的状况。',
                triggerCount: 0,
              },
              {
                id: 5576,
                name: '沟渠、壕沟及侵入性构筑物。',
                triggerCount: 0,
              },
              {
                id: 5577,
                name: '地面机动',
                triggerCount: 0,
              },
              {
                id: 5578,
                name: '机场周界管控/围栏防护/野生动物防治措施。',
                triggerCount: 0,
              },
              {
                id: 5579,
                name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5580,
            name: '导航设施故障、缺失或不可用/未校准',
            subItems: [
              {
                id: 5581,
                name: '故障、缺失或不可用',
                triggerCount: 0,
              },
              {
                id: 5582,
                name: 'GPS卫星信号丢失',
                triggerCount: 0,
              },
              {
                id: 5583,
                name: '需使用时RAIM功能失效',
                triggerCount: 0,
              },
              {
                id: 5584,
                name: '实际导航性能（ANP）低于所需导航性能（RNP）',
                triggerCount: 0,
              },
              {
                id: 5585,
                name: '地基导航源信号丢失',
                triggerCount: 0,
              },
              {
                id: 5586,
                name: '航空器位置丢失或不确定',
                triggerCount: 0,
              },
              {
                id: 5587,
                name: '航向偏离预定航路点或目的地',
                triggerCount: 0,
              },
              {
                id: 5588,
                name: '未校准',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5589,
            name: '地形/障碍物',
            subItems: [
              {
                id: 5590,
                name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5591,
            name: '交通',
            subItems: [
              {
                id: 5592,
                name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5593,
            name: '其他',
            subItems: [
              {
                id: 5594,
                name: '其他环境威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5595,
        category: '心理/生理性威胁——生理层面',
        items: [
          {
            id: 5596,
            name: '疲劳',
            subItems: [
              {
                id: 5597,
                name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在。',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5598,
            name: '视觉错觉/视觉误判',
            subItems: [
              {
                id: 5599,
                name: '视觉错觉/视觉误判',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5600,
            name: '空间定向障碍与空间/躯体重力错觉',
            subItems: [
              {
                id: 5601,
                name: '空间定向障碍与空间/躯体重力错觉',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5602,
            name: '机组失能',
            subItems: [
              {
                id: 5603,
                name: '机组失能、任何影响未失能飞行员操作表现的失能状况。',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5604,
        category: '公司方面威胁',
        items: [
          {
            id: 5605,
            name: '飞机故障',
            subItems: [
              {
                id: 5606,
                name: '不可控的发动机失效',
                triggerCount: 0,
              },
              {
                id: 5607,
                name: '可控制的发动机失效（包括过热和桨叶失效）',
                triggerCount: 0,
              },
              {
                id: 5608,
                name: '起落架/轮胎',
                triggerCount: 0,
              },
              {
                id: 5609,
                name: '刹车系统',
                triggerCount: 0,
              },
              {
                id: 5610,
                name: 'Flight Controls',
                triggerCount: 0,
              },
              {
                id: 5611,
                name: '主飞行控制',
                triggerCount: 0,
              },
              {
                id: 5612,
                name: '次级飞行控制（襟翼，扰流板）',
                triggerCount: 0,
              },
              {
                id: 5613,
                name: '结构失效',
                triggerCount: 0,
              },
              {
                id: 5614,
                name: '火情/烟雾',
                triggerCount: 0,
              },
              {
                id: 5615,
                name: '航电设备，飞行仪表',
                triggerCount: 0,
              },
              {
                id: 5616,
                name: '自动飞行/FMS(包括自动推力，自动油门）',
                triggerCount: 0,
              },
              {
                id: 5617,
                name: '液压系统失效',
                triggerCount: 0,
              },
              {
                id: 5618,
                name: '电力系统失效',
                triggerCount: 0,
              },
              {
                id: 5619,
                name: '燃油系统失效（包括燃油泄漏）',
                triggerCount: 0,
              },
              {
                id: 5620,
                name: '空调/增压失效',
                triggerCount: 0,
              },
              {
                id: 5621,
                name: '其他飞机系统失效',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5622,
            name: 'MEL项目（涉及运行影响）',
            subItems: [
              {
                id: 5623,
                name: 'MEL项目（涉及运行影响）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5624,
            name: '运行压力',
            subItems: [
              {
                id: 5625,
                name: '运行时间压力',
                triggerCount: 0,
              },
              {
                id: 5626,
                name: '分心',
                triggerCount: 0,
              },
              {
                id: 5627,
                name: '非正常运行（备降）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5628,
            name: '客舱事件',
            subItems: [
              {
                id: 5629,
                name: '客舱事件（如滋事乘客）',
                triggerCount: 0,
              },
              {
                id: 5630,
                name: '客舱差错',
                triggerCount: 0,
              },
              {
                id: 5631,
                name: '分心/干扰',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5632,
            name: '地面事件',
            subItems: [
              {
                id: 5633,
                name: '影响飞机性能的装载事件',
                triggerCount: 0,
              },
              {
                id: 5634,
                name: '错误的加油',
                triggerCount: 0,
              },
              {
                id: 5635,
                name: '不适当的除/防冰',
                triggerCount: 0,
              },
              {
                id: 5636,
                name: '不适当的地面保障',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5637,
            name: '签派/文件工作',
            subItems: [
              {
                id: 5638,
                name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5639,
            name: '维修事件',
            subItems: [
              {
                id: 5640,
                name: '飞机地面维修',
                triggerCount: 0,
              },
              {
                id: 5641,
                name: '维修日志问题',
                triggerCount: 0,
              },
              {
                id: 5642,
                name: '维修差错',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5643,
            name: '危险品',
            subItems: [
              {
                id: 5644,
                name: '危险品',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5645,
            name: '手册/航图/检查单/程序/数据库',
            subItems: [
              {
                id: 5646,
                name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单',
                triggerCount: 0,
              },
              {
                id: 5647,
                name: '数据库没有及时更新，缺失信息或者包含编码错误',
                triggerCount: 0,
              },
            ],
          },
          {
            id: 5648,
            name: '其他',
            subItems: [
              {
                id: 5649,
                name: '其他公司方面威胁',
                triggerCount: 0,
              },
            ],
          },
        ],
      },
    ],
  },
]
