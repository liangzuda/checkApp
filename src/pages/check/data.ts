// 程序执行
const programExecutionInitData = [
  {
    name: '通讯',
    subItems: [
      { name: 'PM边通讯边调频', triggerCount: 0 },
      { name: 'PM调频完成后双方未证实', triggerCount: 0 },
      { name: 'PM预调除离场频率以外的频率', triggerCount: 0 },
      { name: 'PM未完整复诵ATC指令', triggerCount: 0 },
    ]
  },
  {
    name: 'ATC指令执行',
    subItems: [
      { name: '驾驶舱分工不明确', triggerCount: 0 },
      { name: 'PF在PM通讯时操作FCU/MCP', triggerCount: 0 },
      { name: 'PF未主动证实ATC指令内容', triggerCount: 0 },
      { name: 'PM未证实指令正确和完整', triggerCount: 0 },
      { name: 'PF未执行FCU/MCP数据输入及喊话', triggerCount: 0 },
      { name: 'PM未核实FCU/MCP/ FMA数据及证实', triggerCount: 0 },
      { name: 'PF未实施FCU/MCP飞行方式输入及喊话', triggerCount: 0 },
      { name: 'PF/PM未进行FMA方式证实及喊话', triggerCount: 0 },
      { name: 'PM未执行1000FT到改平喊话', triggerCount: 0 },
      { name: 'ATC通信过程中受到CABIN干扰', triggerCount: 0 },
      { name: '标准喊话缺失/不准确', triggerCount: 0 },
    ]
  },
  {
    name: 'FMS修改',
    subItems: [
      { name: '任一机组未经互相证实便直接执行MCDU更改', triggerCount: 0 },
      { name: 'PF和PM同时执行MCDU修改输入', triggerCount: 0 },
      { name: 'PF在关键阶段操作MCDU', triggerCount: 0 },
    ]
  },
]

interface checkListExecutionType {
  name: string
  checked: string[]
  children: string[]
}
// 检查单执行
const checkListExecutionInitData: checkListExecutionType[] = [
  {
    name: '检查单执行时机',
    checked: [],
    children: [
      '存在时间压力',
      'ATC通信干扰',
      '勤务客舱干扰',
      '飞行状态不稳定',
    ],
  },
  {
    name: '检查单执行状态',
    checked: [],
    children: [
      '未专注认读',
      '未专注听取',
      '私人事务干扰',
    ],
  },
  {
    name: '检查单执行角色',
    checked: [],
    children: [
      'PM认读-PF检查',
      'PM认读-PM检查',
      'PF检查-PM认读',
      '观察员认读',
    ],
  },
  {
    name: '检查单条目定位准确性',
    checked: [],
    children: [
      '逐一定位认读',
      '未逐一定位',
      '背诵检查单',
      '未执行',
    ],
  },
  {
    name: '检查单朗读清晰度',
    checked: [],
    children: [
      '清晰',
      '不清晰',
      '使用标准术语',
      '非标准术语',
    ],
  },
  {
    name: '检查单项目确认落实',
    checked: [],
    children: [
      '按角色确认落实',
      '仅PF确认落实',
      '仅PM确认落实',
      '观察员确认落实',
    ],
  },
]

// 驾驶舱整肃性
const cockpitIntegrityInitData = [
  {
    name: '操纵装置遮碍',
    checked: false,
  },
  {
    name: '中央操纵台遮碍',
    checked: false,
  },
  {
    name: '断路器面板遮碍',
    checked: false,
  },
  {
    name: '氧气面罩遮碍',
    checked: false,
  },
  {
    name: '各风挡视线遮碍',
    checked: false,
  },
  {
    name: '通过中央操纵台上方传递餐饮',
    checked: false,
  },
  {
    name: 'PF+PM同时用餐',
    checked: false,
  },
  {
    name: '飞行关键阶段玻璃容器未收起',
    checked: false,
  },
  {
    name: '注意力分散其他',
    checked: false,
  },
]

// TEM Threat & Error Management 威胁与错误管理
const temInitData = [
  {
    category: '操纵差错',
    items: [
      {
        name: '人工飞行/飞行操纵',
        subItems: [
          { name: '非故意的横向偏差', triggerCount: 0 },
          { name: '非故意的高度偏差', triggerCount: 0 },
          { name: '非故意的速度偏差', triggerCount: 0 },
          { name: '不正确的襟翼设定', triggerCount: 0 },
          { name: '不正确的减速板设定', triggerCount: 0 },
          { name: '不正确的自动刹车设定', triggerCount: 0 },
          { name: '不正确的反推设定', triggerCount: 0 },
          { name: '不正确的推力设定', triggerCount: 0 },
        ],
      },
      {
        name: '地面导航差错',
        subItems: [
          { name: '试图转向错误的跑道', triggerCount: 0 },
          { name: '试图转向错误的停机坪/滑行道/停机位', triggerCount: 0 },
          { name: '错过跑道', triggerCount: 0 },
          { name: '错过滑行道', triggerCount: 0 },
          { name: '错过停机门', triggerCount: 0 },
          { name: '进近，进入，退出跑道和在跑道上等待时对其他航空器造成冲突（包括跑道侵入）', triggerCount: 0 },
          { name: '试图或已经对正错误跑道的中心线', triggerCount: 0 },
        ],
      },
      {
        name: '自动化设置/选择差错',
        subItems: [
          { name: '不正确的高度设定、不正确的高度方式设定', triggerCount: 0 },
          { name: '不正确的速度设定、不正确的速度方式设定', triggerCount: 0 },
          { name: '不正确的航向/航迹设定、不正确的航向/航迹方式设定', triggerCount: 0 },
          { name: '不正确的自动油门设定、不正确的自动油门方式设定', triggerCount: 0 },
          { name: '不正确的垂直速度设定', triggerCount: 0 },
          { name: 'AP/FD错误设置', triggerCount: 0 },
          { name: '作出下降决断偏晚', triggerCount: 0 },
        ],
      },
      {
        name: '系统/无线电/仪表设置或选择差错',
        subItems: [
          { name: '错误的导航无线电频率', triggerCount: 0 },
          { name: '选用错误的ATIS', triggerCount: 0 },
          { name: '选用错误的ATC频率', triggerCount: 0 },
          { name: '错误的应答机信号', triggerCount: 0 },
          { name: '气象雷达使用不足', triggerCount: 0 },
          { name: '错误的显示器开关设置', triggerCount: 0 },
          { name: '没有按时放下起落架', triggerCount: 0 },
          { name: '没有按时收上起落架', triggerCount: 0 },
          { name: '没有打开着陆灯', triggerCount: 0 },
          { name: '没有开启TCAS', triggerCount: 0 },
          { name: '没有打开系紧安全带信号灯', triggerCount: 0 },
          { name: '其他不正确的开关或手柄设置', triggerCount: 0 },
          { name: '没有开启空调组件（没有增压)', triggerCount: 0 },
          { name: '使用挂有INOP标签的设备', triggerCount: 0 },
        ],
      },
      {
        name: '其他差错',
        subItems: [
          { name: '穿越己知的增加不必要风险的恶劣天气（如，通过雷暴或风切变）', triggerCount: 0 },
          { name: '在性能包线的边缘操作航空器（无差错的缓冲区）', triggerCount: 0 },
          { name: '其他操纵差错', triggerCount: 0 },
        ],
      },
    ],
  },
  {
    category: '程序性差错',
    items: [
      {
        name: '遵守SOP/交叉检查',
        subItems: [
          { name: '没有交叉核实 FCU/FMA/PFD/高度的改变', triggerCount: 0 },
          { name: '在执行前没有交叉核实飞行FMC/CDU改变', triggerCount: 0 },
          { name: 'PF人工操纵时设置MCP/FCU', triggerCount: 0 },
          { name: 'PF自己单独更改FMC', triggerCount: 0 },
          { name: '在到达TA/TL之前设置STD/QNH', triggerCount: 0 },
          { name: '没有交叉核实高度表设置', triggerCount: 0 },
          { name: '没有设置最低标准', triggerCount: 0 },
          { name: '故意低于下滑道飞行', triggerCount: 0 },
          { name: 'PF自己设置形态或附件', triggerCount: 0 },
          { name: '未完成MEL即实施航空器运行', triggerCount: 0 },
          { name: '没有按顺序执行正确的工作程序', triggerCount: 0 },
          { name: '无ATC许可偏离速度', triggerCount: 0 },
          { name: '错误的高度表设置', triggerCount: 0 },
          { name: '在FMC中选择错误的进近', triggerCount: 0 },
          { name: '其他错误的CDU输入/设置', triggerCount: 0 },
          { name: '将错误的重量/平衡计算值输入FMC', triggerCount: 0 },
          { name: '将错误的航路点/航路设置输入FMC', triggerCount: 0 },
          { name: '带销套滑入或滑出', triggerCount: 0 },
          { name: '其他/无法定型的违反SOP/交叉检查行为', triggerCount: 0 },
        ],
      },
      {
        name: '检查单差错',
        subItems: [
          { name: '凭记忆执行检查单', triggerCount: 0 },
          { name: '检查单完成时未喊“完成”', triggerCount: 0 },
          { name: '遗漏检査单/项目', triggerCount: 0 },
          { name: '使用非标准的检査单规约（如使用非标准的反应方式）', triggerCount: 0 },
          { name: '执行错误的检查单', triggerCount: 0 },
          { name: '检査单实施时间偏晚或不当', triggerCount: 0 },
          { name: '自己执行检查单——没有质疑或反应', triggerCount: 0 },
          { name: '自己开始实施检査单——PF没有要求', triggerCount: 0 },
          { name: '遗漏非正常检查单', triggerCount: 0 },
        ],
      },
      {
        name: '喊话差错',
        subItems: [
          { name: '遗漏起飞喊话（如，V-速度）', triggerCount: 0 },
          { name: '遗漏爬升或下降喊话', triggerCount: 0 },
          { name: '遗漏进近喊话', triggerCount: 0 },
        ],
      },
      {
        name: '简令差错',
        subItems: [
          { name: '遗漏起飞简令', triggerCount: 0 },
          { name: '遗漏进近简令', triggerCount: 0 },
          { name: '遗漏客舱协同简令', triggerCount: 0 },
          { name: '不完整的起飞简令', triggerCount: 0 },
          { name: '不完整的进近简令', triggerCount: 0 },
          { name: '不完整的客舱协同简令', triggerCount: 0 },
        ],
      },
      {
        name: '文件差错',
        subItems: [
          { name: '记录了错误的重量和平衡信息', triggerCount: 0 },
          { name: '记录了错误的燃油信息', triggerCount: 0 },
          { name: '记录了错误的ATIS', triggerCount: 0 },
          { name: '记录了错误的跑道信息', triggerCount: 0 },
          { name: '记录了错误的放行指令', triggerCount: 0 },
          { name: '错误理解了文件上的项目（飞行计划，航行通告或签派放行单）', triggerCount: 0 },
          { name: '不正确的日志记录', triggerCount: 0 },
          { name: '缺失日志记录', triggerCount: 0 },
        ],
      },
      {
        name: '不稳定进近后未复飞',
        subItems: [
          { name: '出现不稳定进近未实施复飞', triggerCount: 0 },
        ],
      },
      {
        name: '其他差错',
        subItems: [
          { name: '其他程序性差错', triggerCount: 0 },
        ],
      },
    ],
  },
  {
    category: '通信差错',
    items: [
      {
        name: '机组对外界通讯差错',
        subItems: [
          { name: '错误复诵或回应ATC', triggerCount: 0 },
          { name: '忘记给ATC发送呼号', triggerCount: 0 },
          { name: '没有给ATC复诵或回话', triggerCount: 0 },
          { name: '忘记给ATC发送位置报告', triggerCount: 0 },
          { name: '错误理解ATC的指令', triggerCount: 0 },
          { name: '机组错过了ATC呼叫', triggerCount: 0 },
          { name: '使用非标准的ATC术语', triggerCount: 0 },
          { name: '从ATC处接受了会增加不必要风险的指令', triggerCount: 0 },
          { name: '向ATC提出会增加不必要风险的请求', triggerCount: 0 },
          { name: '在非目视条件下接受目视指令', triggerCount: 0 },
          { name: '其他和ATC通讯差错', triggerCount: 0 },
          { name: '在不恰当的时间进行非必需的沟通', triggerCount: 0 },
          { name: '其他和客舱机组通讯差错', triggerCount: 0 },
          { name: '和地面人员通讯差错', triggerCount: 0 },
          { name: '和签派人员通讯差错', triggerCount: 0 },
        ],
      },
      {
        name: '机组间通讯差错',
        subItems: [
          { name: '机组间错误交流', triggerCount: 0 },
          { name: '机组间交流误解', triggerCount: 0 },
          { name: '机组间缺乏交流', triggerCount: 0 },
        ],
      },
      {
        name: 'CPDLC差错',
        subItems: [
          { name: 'CPDLC差错', triggerCount: 0 },
        ],
      },
    ],
  },
  {
    category: '环境威胁',
    items: [
      {
        name: '气象',
        subItems: [
          { name: '恶劣天气（如降水、雷暴、雨、雪、以及高温/低温运行包括低云底高', triggerCount: 0 },
          { name: '任何因视觉环境条件降级（DVE）对机组操作表现构成威胁的情况，例如着陆时可能出现的“白洞”或“黑洞”现象', triggerCount: 0 },
          { name: '阵风条件-风切变-尾流无预警的风切变或由地形导致的颠簸或者超过结构限制的侧风，包括可能会影响飞机和机组表现的顺风', triggerCount: 0 },
          { name: '结冰条件，包括冰雪天气、高/低温（或高气压高度）环境下的运行，以及低云底高情况，盐分污染', triggerCount: 0 },
        ],
      },
      {
        name: '缺乏目视参考',
        subItems: [
          { name: '黑暗/黑洞效应，导致空间定向障碍的环境情况。', triggerCount: 0 },
        ],
      },
      {
        name: '空中交通管制服务',
        subItems: [
          { name: '难以满足的放行许可/飞行限制、航路变更、沟通语言障碍、管制员失误、未能保持（空中/地面）安全间隔', triggerCount: 0 },
        ],
      },
      {
        name: '鸟/外来物',
        subItems: [
          { name: '鸟击事件，包括导致航空器受损或影响飞行性能的情况，以及因鸟类活动引发的避让机动操作', triggerCount: 0 },
        ],
      },
      {
        name: '机场设施',
        subItems: [
          { name: '标识/照明条件不良、 标志线模糊不清，跑道/滑行道关闭', triggerCount: 0 },
          { name: '受污染的跑道、滑行道，以及刹车效应不良的状况', triggerCount: 0 },
          { name: '沟渠、壕沟及侵入性构筑物', triggerCount: 0 },
          { name: '机场周界管控/围栏防护/野生动物防治措施', triggerCount: 0 },
          { name: '机坪上停放或移动的地面设备（车辆或牵引设备），涉及航空器牵引作业及各类地面设备的运行', triggerCount: 0 },
        ],
      },
      {
        name: '导航设施故障、缺失或不可用/未校准',
        subItems: [
          { name: 'GPS卫星信号丢失', triggerCount: 0 },
          { name: '需使用时RAIM功能失效', triggerCount: 0 },
          { name: '实际导航性能（ANP）低于所需导航性能（RNP）', triggerCount: 0 },
          { name: '地基导航源信号丢失', triggerCount: 0 },
          { name: '航空器位置丢失或不确定', triggerCount: 0 },
          { name: '未校准', triggerCount: 0 },
        ],
      },
      {
        name: '地形/障碍物',
        subItems: [
          { name: '任何关于航空器与地形或障碍物存在不安全接近、碰撞风险的自动或语音告警、警告及提示', triggerCount: 0 },
        ],
      },
      {
        name: '交通',
        subItems: [
          { name: 'TCAS（RA或TA）/机载防撞系统告警，或目视观测到冲突，或交通拥挤需要采取紧急避让机动', triggerCount: 0 },
        ],
      },
      {
        name: '其他',
        subItems: [
          { name: '其他环境威胁', triggerCount: 0 },
        ],
      },
    ],
  },
  {
    category: '心理/生理性威胁',
    items: [
      {
        name: '疲劳',
        subItems: [
          { name: '疲劳、与疲劳相关的、可能影响机组操作表现的问题，无论机组自身是否意识到疲劳状态的存在', triggerCount: 0 },
        ],
      },
      {
        name: '视觉错觉/视觉误判',
        subItems: [
          { name: '视觉错觉/视觉误判', triggerCount: 0 },
        ],
      },
      {
        name: '空间定向障碍与空间/躯体重力错觉',
        subItems: [
          { name: '空间定向障碍与空间/躯体重力错觉', triggerCount: 0 },
        ],
      },
      {
        name: '机组失能',
        subItems: [
          { name: '机组失能、任何影响未失能飞行员操作表现的失能状况', triggerCount: 0 },
        ],
      },
    ],
  },
  {
    category: '公司方面威胁',
    items: [
      {
        name: '飞机故障',
        subItems: [
          { name: '不可控的发动机失效', triggerCount: 0 },
          { name: '可控制的发动机失效（包括过热和桨叶失效）', triggerCount: 0 },
          { name: '起落架/轮胎', triggerCount: 0 },
          { name: '刹车系统', triggerCount: 0 },
          { name: '主飞行控制', triggerCount: 0 },
          { name: '次级飞行控制（襟翼，扰流板）', triggerCount: 0 },
          { name: '结构失效', triggerCount: 0 },
          { name: '火情/烟雾', triggerCount: 0 },
          { name: '航电设备，飞行仪表', triggerCount: 0 },
          { name: '自动飞行/FMS(包括自动推力，自动油门）', triggerCount: 0 },
          { name: '液压系统失效', triggerCount: 0 },
          { name: '电力系统失效', triggerCount: 0 },
          { name: '燃油系统失效（包括燃油泄漏）', triggerCount: 0 },
          { name: '空调/增压失效', triggerCount: 0 },
          { name: '其他飞机系统失效', triggerCount: 0 },
        ],
      },
      {
        name: 'MEL项目（涉及运行影响）',
        subItems: [
          { name: 'MEL项目（涉及运行影响）', triggerCount: 0 },
        ],
      },
      {
        name: '运行压力',
        subItems: [
          { name: '运行时间压力', triggerCount: 0 },
          { name: '分心', triggerCount: 0 },
          { name: '非正常运行（备降）', triggerCount: 0 },
        ],
      },
      {
        name: '客舱事件',
        subItems: [
          { name: '客舱事件（如滋事乘客）', triggerCount: 0 },
          { name: '客舱差错', triggerCount: 0 },
          { name: '分心/干扰', triggerCount: 0 },
        ],
      },
      {
        name: '地面事件',
        subItems: [
          { name: '影响飞机性能的装载事件', triggerCount: 0 },
          { name: '错误的加油', triggerCount: 0 },
          { name: '不适当的除/防冰', triggerCount: 0 },
          { name: '不适当的地面保障', triggerCount: 0 },
        ],
      },
      {
        name: '签派/文件工作',
        subItems: [
          { name: '包括延迟变更或者错误在内的不完整和错误的文件工作（如舱单，通告或者天气）', triggerCount: 0 },
        ],
      },
      {
        name: '维修事件',
        subItems: [
          { name: '飞机地面维修', triggerCount: 0 },
          { name: '维修日志问题', triggerCount: 0 },
          { name: '维修差错', triggerCount: 0 },
        ],
      },
      {
        name: '危险品',
        subItems: [
          { name: '危险品', triggerCount: 0 },
        ],
      },
      {
        name: '手册/航图/检查单/程序/数据库',
        subItems: [
          { name: '手册缺陷：技术性或者布局，矛盾或者遗漏，不完整，不恰当，有设计缺陷的航图或者检查单', triggerCount: 0 },
          { name: '数据库没有及时更新，缺失信息或者包含编码错误', triggerCount: 0 },
        ],
      },
      {
        name: '其他',
        subItems: [
          { name: '其他公司方面威胁', triggerCount: 0 },
        ],
      },
    ],
  },
]

interface remarkType {
  content: string
  updateTime: string
}

// 主备注
export const mainRemarkInitData: remarkType[] = [
  {
    content: '不得在推力大于怠速时操作',
    updateTime: '2026/01/12 09:12:00Z',
  },
  {
    content: '执行前完成口头确认',
    updateTime: '2026/01/10 11:40:00Z',
  },
]

// 飞行阶段检查项
export const flightPhaseCheckItemInitData = [
  {
    phase: '航前准备',
    items: [
      {
        name: '气象报文',
        code: 'CK01',
        updateTime: '',
        details: [
          {
            content: '能见度/云高', code: 'SCK01', status: 1, updateTime: '', remarks: [],
            referenceItem: {
              inputs: [
                {
                  code: 'R0001',
                  fields: [
                    {
                      type: 'text',
                      value: '能见度'
                    },
                    {
                      type: 'input',
                      key: 'visibility',
                      unit: 'KM',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '云高'
                    },
                    {
                      type: 'input',
                      key: 'cloudHeight',
                      unit: 'FT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0002',
                    text: '限制检查'
                  },
                  {
                    code: 'R0003',
                    text: '备降评估'
                  },
                  {
                    code: 'R0004',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '风', status: 1, updateTime: '', remarks: [],
            referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '降水', status: 1, updateTime: '', remarks: [],
            referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0009',
                    text: '限制检查'
                  },
                  {
                    code: 'R0010',
                    text: '备降评估'
                  },
                  {
                    code: 'R0011',
                    text: '油量评估'
                  },
                  {
                    code: 'R0012',
                    text: '性能评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '雷雨', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0013',
                    text: '限制检查'
                  },
                  {
                    code: 'R0014',
                    text: '备降评估'
                  },
                  {
                    code: 'R0015',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '沙尘', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0016',
                    text: '沙尘补充程序'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '气温', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0017',
                    text: '高低温补充程序'
                  },
                  {
                    code: 'R0018',
                    text: '性能评估'
                  },
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '图形化天气',
        updateTime: '',
        details: [
          {
            content: '雷雨', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0019',
                    text: '航路影响评估'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '火山灰', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0020',
                    text: '航路影响评估'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '颠簸', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0021',
                    text: '强度高度位置评估'
                  },
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '通告',
        updateTime: '',
        details: [
          {
            content: '相关导航设施', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0022',
                    text: '进近影响评估'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '相关跑道', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0023',
                    text: '关闭时段评估'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '相关滑行道', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [                
                  {
                    code: 'R0024',
                    text: '航图标注'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '相关航路', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0025',
                    text: '航路标注'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '相关危险区禁区', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0025',
                    text: '航图标注'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '相关障碍物', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0026',
                    text: '性能控制'
                  },
                ],
                checked: []
              }
            }
          },
          {
            content: '相关目视助航设施', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [
                  {
                    code: 'R0027',
                    text: '性能控制'
                  },
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'MEL',
        updateTime: '',
        details: [
          {
            content: 'O项操作程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [],
                checked: []
              }
            }
          },
          {
            content: 'O项性能影响', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [],
                checked: []
              }
            }
          },
          {
            content: 'O项放行标准', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [],
              checkbox: {
                list: [],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '飞行计划',
        updateTime: '',
        details: [
          {
            content: '生成时间', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0032',
                  fields: [
                    {
                      type: 'text',
                      value: '与实际离场时间差异'
                    },
                    {
                      type: 'input',
                      key: 'hour',
                      unit: '小时',
                      value: ''
                    },
                  ]
                }
              ],
              checkbox: {
                list: [],
                checked: []
              }
            }
          },
          {
            content: '高度层油量调整', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: 'OFP调整'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: 'KG'
                    },
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '备降场', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '备降油量调整', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '偏航绕飞油量', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '额外油', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '起降重量限制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '机组协同',
        updateTime: '',
        details: [
          {
            content: '证件资料检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '过短的滑行/飞行时间', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '恶劣天气及颠簸位置', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '驾驶舱进出程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '正常及应急联络程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '安保预案', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: [],
    tem: temInitData,
  },
  {
    phase: '驾驶舱准备',
    items: [
      {
        name: '勤务准备',
        updateTime: '',
        details: [
          {
            content: '绕机检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '油量加注', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '载客加油程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '销套核查（首个航段）', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'TLB检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '系统检查',
        updateTime: '',
        details: [
          {
            content: '顶板及系统状态检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'NDB（Navigation Data Base）生效日期检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS性能衰减值检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'IRS位置输入校准 交叉检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'RVSM 高度表75FT检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'FMS进离场输入检查',
        updateTime: '',
        details: [
          {
            content: '打开对应航图', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '生效日期核对', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '航路衔接点', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '进离场代码', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '进离场航路点', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '每一航段方位、距离', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '高度及速度限制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'ANP值及原始导航频率', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'FMS航路输入检查',
        updateTime: '',
        details: [
          {
            content: '打开OFP', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '按顺序检查航路点', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '逐一标注检查记号', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '航路及起降场进离场完整性', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'FMS计划性能输入检查',
        updateTime: '',
        details: [
          {
            content: '梯级巡航高度输入', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'TROPO高度输入（A320）', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'OFP重量输入', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '航路风温、下降风温输入', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'OPT高度 MAX高度 检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS与OFP TRIP TIME 交叉检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS与OFP TRIP DIST 交叉检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS与OFP LD FU 交叉检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '舱单输入',
        updateTime: '',
        details: [
          {
            content: '舱单标识', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '舱单干重', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '舱单数据', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '舱单ZFW输入FMS过程', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '舱单ZFW输入FMS后', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '舱单TO MAC及配平值输入过程', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '舱单LMC操作', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '起飞性能计算',
        updateTime: '',
        details: [
          {
            content: '性能软件版本检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'ATIS天气条件更新', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'GUST、VRB输入设置', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '污染跑道、风切变输入设置', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'GW及TOW区别确认', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '舱单TO MEL/CDL项目输入', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '交叉道口预设', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '双人独立计算', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '计算结果交叉检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'STOP MARGIN中断余度评估', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '加速收襟翼计划设置', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '减噪程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS起飞数据输入准确性', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '起飞简令',
        updateTime: '',
        details: [
          {
            content: '起飞简令执行时机', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '特殊信息', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '预计滑行路线', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '起飞跑道数据', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '离场程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '限制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '航路', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '起飞性能数据', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'V1前后非正常情况预案', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '其他需特殊说明的情况', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '推开及滑出阶段',
    items: [
      {
        name: '推开',
        updateTime: '',
        details: [
          {
            content: 'ATC推开指令确认', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '前轮转弯脱开确认', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '得到机务指令后松刹车', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '推出过程中双人双足均脱离刹车', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '启动过程中双人双足均放置在刹车上', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '按程序执行除防冰及构型设置', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '双人双侧确认机务及设备撤离', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '滑出',
        updateTime: '',
        details: [
          {
            content: '滑出前执行滑行路线简令', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑出及转弯左右清洁喊话', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行路线监控及喊话提示', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行冲突威胁喊话提示', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行推力使用（320<40% N1; 787< 30% N1）', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行地速控制（直线<30KT；转弯<10KT；机坪<10KT）', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行转弯打滑', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '主滑畅通时的刹车使用', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '刹车温度检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '最低起飞油量检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '跑道及离场变更',
        updateTime: '',
        details: [
          {
            content: '跑道及离场变更程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '起飞阶段',
    items: [
      {
        name: '起飞',
        updateTime: '',
        details: [
          {
            content: '得到CABIN READY后进入跑道', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'TERRAIN及WX显示', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '跑道号确认', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '环境威胁检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '起始推力设置', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '目标起飞推力设定核实喊话', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '灯光及扰流板解除预位操作', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '低空速度限制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'MCT或TOGA非正常使用', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '爬升阶段',
    items: [
      {
        name: '爬升控制',
        updateTime: '',
        details: [
          {
            content: 'SID高度限制遵守', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'SID速度限制遵守', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '临近TRAFFIC的爬升率控制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '顶风顺风急流波动中', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '正确设置颠簸速度', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            content: 'ATC指令复诵完整性PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '指令内容核实PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP数据输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP/ FMA数据核实及喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP飞行方式输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMA方式证实及喊话 PF/PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '1000FT到改平喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'ATC通信过程中CABIN干扰', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'FMS 修改',
        updateTime: '',
        details: [
          {
            content: 'FMS修改喊话 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS修改输入CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS执行/引入确认 CM1+CM2', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '执行/引入 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '巡航阶段',
    items: [
      {
        name: '巡航控制',
        updateTime: '',
        details: [
          {
            content: '巡航高度选择', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '颠簸处置', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '全程使用WX RADAR', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '进入结冰环境前提前打开防冰开关', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '使用OFP监控时间油量进程', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '执行了释压飘降D简令', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '天气趋势监控', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'PF+PM同时脱离飞行状态监控', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '飞行关键阶段的非必要客舱呼叫', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '进近准备',
        updateTime: '',
        details: [
          {
            content: '进近准备执行时机', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '进近简令执行时机', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'ATC指挥飞机提前下降', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '获取VHF天气时执行了ATC通信守听程序', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '配合STAR及APP航图进行了FMS进场及进近路线、高度速度限制检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '机组独立执行了着陆性能计算并交叉检查', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '制定了低温修正计划', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '进近简令',
        updateTime: '',
        details: [
          {
            content: '进近简令干扰', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '特殊信息', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '更新并说明了最新天气', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '说明了预计着陆跑道', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'STAR', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '地形', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '进近', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '性能', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '按图说明了预计的滑行路线', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '检查了备降或等待油量计划', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '其他需特殊说明的情况', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            content: 'ATC指令复诵完整性PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '指令内容核实PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP数据输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP/ FMA数据核实及喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP飞行方式输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMA方式证实及喊话 PF/PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '1000FT到改平喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'ATC通信过程中CABIN干扰', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'FMS 修改',
        updateTime: '',
        details: [
          {
            content: 'FMS修改喊话 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS修改输入CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS执行/引入确认 CM1+CM2', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '执行/引入 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '下降阶段',
    items: [
      {
        name: '下降控制',
        updateTime: '',
        details: [
          {
            content: '进近程序及跑道变更', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '高度地形意识', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '位置及原始导航监控', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '临近TRAFFIC的下降率控制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '顶风顺风急流波动', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '速度控制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '正确设置颠簸速度', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '能量管理', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            content: 'ATC指令复诵完整性PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '指令内容核实PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP数据输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP/ FMA数据核实及喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP飞行方式输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMA方式证实及喊话 PF/PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '1000FT到改平喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'ATC通信过程中CABIN干扰', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'FMS 修改',
        updateTime: '',
        details: [
          {
            content: 'FMS修改喊话 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS修改输入CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS执行/引入确认 CM1+CM2', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '执行/引入 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '进近着陆阶段',
    items: [
      {
        name: '进近控制',
        updateTime: '',
        details: [
          {
            content: '进近程序及跑道变更', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'TERRAIN及WX显示', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '遵从高度/速度限制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '进行了位置及原始导航监控（ILS及VOR）', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '下降率控制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '达到稳定进近高度', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '1000FT AFE时速度偏离', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '1000FT AFE时推力', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: '着陆控制',
        updateTime: '',
        details: [
          {
            content: '决断高度速度', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '决断高度标准喊话', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '着陆距离——着陆区标志', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '停机余度——减至滑行速度时中线灯颜色', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '转向快速脱离道速度', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '转向直角脱离道速度', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '着陆后程序开始执行时机', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'ATC 高度、速度、航向指令执行',
        updateTime: '',
        details: [
          {
            content: 'ATC指令复诵完整性PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '指令内容核实PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP数据输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP/ FMA数据核实及喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FCU/MCP飞行方式输入及喊话 PF', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMA方式证实及喊话 PF/PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '1000FT到改平喊话 PM', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'ATC通信过程中CABIN干扰', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
      {
        name: 'FMS 修改',
        updateTime: '',
        details: [
          {
            content: 'FMS修改喊话 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS修改输入CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'FMS执行/引入确认 CM1+CM2', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '执行/引入 CM1', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '滑入阶段',
    items: [
      {
        name: '滑入控制',
        updateTime: '',
        details: [
          {
            content: '滑入前执行滑行路线简令', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑入及转弯左右清洁喊话', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行路线监控及喊话提示', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行冲突威胁喊话提示', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行推力使用（320<40% N1; 787< 30% N1）', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行地速控制（直线<30KT；转弯<10KT；机坪<10KT）', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '滑行转弯打滑', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '主滑畅通时的刹车使用', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '污染道面构型控制', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: 'APU启动时机', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
  {
    phase: '关车时刻',
    items: [
      {
        name: '航后程序',
        updateTime: '',
        details: [
          {
            content: '空中出现故障或异常，未填写TLB', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '执行了短停过站的刹车能量检查评估', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
          {
            content: '执行了飞行后讲评', status: 1, updateTime: '', remarks: [], referenceItem: {
              inputs: [
                {
                  code: 'R0005',
                  fields: [
                    {
                      type: 'text',
                      value: '风向/风速'
                    },
                    {
                      type: 'input',
                      key: 'windDirection',
                      unit: '',
                      value: ''
                    },
                    {
                      type: 'text',
                      value: '/'
                    },
                    {
                      type: 'input',
                      key: 'windSpeed',
                      unit: 'KT',
                      value: ''
                    }
                  ]
                }
              ],
              checkbox: {
                list: [
                  {
                    code: 'R0006',
                    text: '限制检查'
                  },
                  {
                    code: 'R0007',
                    text: '备降评估'
                  },
                  {
                    code: 'R0008',
                    text: '油量评估'
                  }
                ],
                checked: []
              }
            }
          },
        ],
      },
    ],
    programExecution: programExecutionInitData,
    checkListExecution: checkListExecutionInitData,
    cockpitIntegrity: cockpitIntegrityInitData,
    tem: temInitData,
  },
]


// 各种下拉框数据
// 飞机号（机型）
export const aircraftOption = [
  {
    label: 'B737-8',
    value: 'B737-8',
  },
  {
    label: 'A320',
    value: 'A320',
  },
  {
    label: 'A321',
    value: 'A321',
  },
  {
    label: 'ARJ21',
    value: 'ARJ21',
  },
]

// 机场
export const airportOption = [
  {
    label: 'CTU 成都',
    value: 'CTU',
  },
  {
    label: 'SZX 深圳',
    value: 'SZX',
  },
  {
    label: 'HGH 杭州',
    value: 'HGH',
  },
  {
    label: 'PEK 北京',
    value: 'PEK',
  },
]

// 账号
export const accountOption = [
  {
    label: '张三(213658)',
    value: '张三(213658)',
  },
  {
    label: '李四(213659)',
    value: '李四(213659)',
  },
  {
    label: '王五(213660)',
    value: '王五(213660)',
  },
  {
    label: '赵六(213661)',
    value: '赵六(213661)',
  }
]
