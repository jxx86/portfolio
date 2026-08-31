// 内容源：基于你的简历 + 两个真实项目文件夹（校园二手交易智能系统 / SmartEdu）整理。

const profile = {
  name: '江俊杰',
  title: '产品经理实习生',
  tagline: '从 0 到 1 的产品全流程实践，用数据与 AI 快速验证、驱动增长。',
  valueProp: '用数据与 AI 驱动产品增长',
  location: '湖南 · 衡阳',

  email: 'jxx1827790194@163.com',
  phone: '15570971520',
  wechat: '',
  github: 'https://github.com/jxo86',
  linkedin: '',

  resumeUrl: '/resume.pdf',
  portrait: '/josh.webp',
  portraitHover: '/josh_wave.webp',

  about: [
    '计算机专业背景的产品经理实习生，可稳定长期实习，能顺畅对接研发、降低沟通成本。',
    '擅长从 0 到 1 的产品全流程：独立覆盖用户调研、需求拆解、竞品分析、PRD 撰写与高保真原型。',
    '熟悉大语言模型（LLM）应用与 Prompt / Dify，能快速搭建可交互 AI 应用 Demo，缩短需求验证周期。',
  ],

  abilities: [
    { name: '需求分析与 PRD', level: 90 },
    { name: '用户调研与竞品分析', level: 88 },
    { name: '产品设计（原型 / 交互）', level: 88 },
    { name: 'AI 应用与 LLM', level: 86 },
    { name: '项目管理与跨部门协作', level: 84 },
    { name: '数据分析', level: 82 },
  ],

  tools: ['Axure', '墨刀', 'XMind', 'MySQL', 'Excel', 'Dify', 'Prompt 工程', 'Codex', 'Claude Code'],

  experience: [
    {
      org: '武汉黑鸟科技有限公司',
      role: '产品实习生',
      period: '2026.04 – 2026.07',
      points: [
        '用户调研与需求：参与骑行赛道用户调研，回收整理有效问卷 50+；对标 Garmin、Strava、两步路，梳理出照片与路线体验割裂、种草后无法直达导航等痛点，参与「照片锚点」「接驳导航」需求讨论并完成部分原型。',
        '功能模块设计迭代：承接照片锚点模块产品方案，实现骑行照片 GPS 绑定路段与 4 类沿途信息标签沉淀；优化上传引导话术，助力锚点上传转化率达 60%，带锚点路线详情页转化率提升 15%。',
        '导航闭环与容错：负责接驳导航中定位纠偏、第三方导航失败降级等分支场景设计，协助完成「种草-骑行」业务闭环；上线后整体路线规划成功率 90%，详情页跳转导航转化率 ≥25%，因起点问题放弃骑行的用户流失明显下降。',
      ],
    },
  ],

  education: [
    {
      school: '吉首大学张家界学院',
      degree: '计算机科学与技术 · 本科 · GPA 3.48（前 10%）',
      period: '2023.09 – 2027.06',
    },
  ],

  projects: [
    {
      id: 'campus-trade',
      name: '校园二手交易智能系统（个人项目）',
      prdUrl: '/prd/campus.html',
      prdToc: [
        { n: '1', title: '项目背景与问题定义' },
        { n: '2', title: '产品定位与目标' },
        { n: '3', title: '目标用户与角色定义' },
        { n: '4', title: '核心使用场景与用户故事' },
        { n: '5', title: '功能需求总览' },
        { n: '6', title: '功能需求详述' },
        { n: '7', title: '关键业务规则与状态机' },
        { n: '8', title: '非功能需求' },
        { n: '9', title: '数据需求' },
        { n: '10', title: '界面与交互需求' },
        { n: '11', title: '版本规划' },
        { n: '12', title: '风险、约束与待确认项' },
        { n: '', title: '附录 A：核心接口需求清单' },
      ],
      role: '产品负责人 · 独立开发',
      period: '2025.09 – 2026.01',
      summary: '面向在校生的一站式智能交易系统，以「AI 识图极速发布 + 学号信用体系」破解二手交易效率与信任难题，覆盖发布、检索、交易、聊天全链路。',
      metrics: ['发布时长 5分钟→30秒', '发布效率 +90%', 'AI 覆盖 94 类商品', '8 大功能模块'],
      tags: ['从 0 到 1', 'AI 识图', '需求调研', '前后端全栈'],
      tech: ['Vue 3 + Vite', 'Element Plus', 'Pinia', 'Spring Boot', 'MyBatis Plus', 'MySQL', 'JWT', '百度 AI 识别'],
      background: '校园二手交易信息分散在 QQ 群、校园墙，检索效率低、信任机制缺失、成交转化弱。牵头设计面向在校生的一站式智能交易系统，独立完成从产品设计到前后端实现的全链路。',
      goals: [
        '确立「简化发布 + 信任背书」核心方向，破解「发布繁琐」与「交易安全」两大痛点',
        '以「AI 识图极速发布 + 学号信用体系」切入校内差异化场景',
        '落地发布、检索、订单、购物车、收藏、聊天、推荐、社区 8 大功能模块',
      ],
      users: '通过问卷与线下访谈覆盖本校 80+ 在校生，拆解出买家、卖家两类核心用户画像；共梳理 6 条核心用户流程（发布、检索、详情、订单、聊天、社区）。',
      needs: [
        '72% 的用户认为「发布商品步骤繁琐」是核心使用门槛',
        '超六成用户担忧线下交易的安全与信任问题',
        '信息分散，缺乏统一的检索与推荐入口',
      ],
      solution: '以「AI 识图极速发布 + 学号信用体系」切入，接入百度 AI 识别覆盖 94 类商品模板，实现「拍图即发布」；设计学号实名认证 + 信用积分，从根源降低交易信任成本。技术上采用前后端分离，Vue 3 + Element Plus + Pinia 构建前端，Spring Boot + MyBatis Plus + JWT + MySQL 构建后端，独立完成全栈实现与 8 大模块落地。',
      features: [
        'AI 识图极速发布（百度 AI 自动填充商品信息）',
        '检索浏览：搜索 / 分类 / 排序 + 基于浏览记录的推荐',
        '商品详情：收藏、购物车、立即购买、联系卖家',
        '订单状态机：创建 / 付款 / 确认收货 / 取消',
        '买卖双方实时聊天（会话 / 未读计数）',
        '学号信用认证 + 积分机制',
        '校园社区（帖子 / 评论）',
      ],
      flow: '买家：首页 → 搜索/筛选 → 详情 → 加购/购买/收藏/联系卖家 → 确认订单 → 支付 → 待自提 → 确认收货 → 订单完成 → 评价。卖家：发布 → 上架 → 接单 → 等待自提 → 确认收货 → 订单完成。异常分支：待付款 30 分钟超时自动取消、待自提 48h 提醒、7 天自动完成、重复发布判定、库存校验。',
      structure: [
        '商品发布（AI 识图）',
        '首页 / 检索 / 推荐',
        '商品详情（收藏 / 购物车 / 购买 / 联系卖家）',
        '订单全链路状态机',
        '实时聊天与消息中心',
        '学号信用认证与积分',
        '校园社区',
      ],
      flowLanes: [
        {
          label: '买家视角',
          steps: [
            { title: '首页 / 搜索', desc: '浏览推荐、搜索、分类筛选' },
            { title: '商品详情', desc: '收藏 / 购物车 / 立即购买 / 联系卖家' },
            { title: '确认订单', desc: '下单（待付款）' },
            { title: '支付', desc: '余额 / 第三方支付 → 待自提' },
            { title: '到店自提', desc: '前往自提地址取货' },
            { title: '确认收货', desc: '订单完成' },
            { title: '评价', desc: '评价卖家，交易闭环' },
          ],
        },
        {
          label: '卖家视角',
          steps: [
            { title: '发布商品', desc: 'AI 识图自动填充，上架展示' },
            { title: '收到订单', desc: '买家下单通知' },
            { title: '等待自提', desc: '买家付款后' },
            { title: '确认收货', desc: '订单完成' },
          ],
        },
      ],
      flowExceptions: [
        { title: '待付款 30 分钟超时', note: '自动取消 + 恢复库存' },
        { title: '待自提 48h', note: '系统提醒卖家' },
        { title: '确认收货 7 天未确认', note: '自动完成订单' },
        { title: '重复发布', note: '24h 标题相似度 ≥80% 拦截' },
        { title: '库存 / 余额校验', note: '不足时拦截下单' },
      ],
      archLayers: [
        { name: '前端层 · Vue3 + Vite + ElementPlus + Pinia', items: ['首页 / 检索', '发布商品', '商品详情', '购物车', '订单', '聊天', '社区', '个人中心'] },
        { name: '后端 API · Spring Boot /api', items: ['GoodsController', 'OrderController', 'CartController', 'FavoriteController', 'MessageController', 'CommunityController', 'RecommendController', 'UserController'] },
        { name: '服务层 · services', items: ['用户认证 JWT', '商品管理', '订单状态机', '推荐系统', '消息服务', '社区服务'] },
        { name: '数据层', items: ['MySQL', '静态资源 uploads'] },
        { name: 'AI 能力', items: ['百度 AI 商品识别（94 类）'] },
      ],
      bizMermaid: `flowchart TD
  S([开始]) --> B[首页 / 搜索 / 推荐]
  B --> C[商品详情]
  C --> D{"是否购买?"}
  D -- 是 --> E[确认订单 · 待付款]
  D -- 否 / 再看看 --> F[收藏 / 联系卖家]
  F --> C
  E --> G{"支付成功?"}
  G -- 是 --> H[待自提]
  G -- 否 · 30 分钟未付 --> I[自动取消 · 恢复库存]
  H --> J[到店自提]
  J --> K[确认收货 · 订单完成]
  K --> L[评价 · 交易闭环]
  M([卖家]) --> N[发布商品 · AI 识图]
  N --> O[商品上架]
  O --> P[收到订单]
  P --> Q[等待自提]
  Q --> K`,
      screens: [
        { title: '首页', note: '推荐商品 + 搜索/分类入口', image: '/projects/campus/home.png' },
        { title: '发布商品', note: 'AI 识图自动填充，拍图即发布', image: '/projects/campus/publish.png' },
        { title: '商品详情', note: '收藏 / 购物车 / 立即购买 / 联系卖家', image: '/projects/campus/detail.png' },
        { title: '实时聊天', note: '会话列表 + 未读计数', image: '/projects/campus/chat.png' },
      ],
      iteration: [
        '统筹 3 人协作、独立完成前后端全链路，8 大功能模块落地',
        'AI 识图发布把商品平均发布时长从 5 分钟压缩到 30 秒，发布效率提升 90%',
        '下一步迭代：签到积分、余额钱包、评价与信用评分、商品违规审核、交易超时自动处理、重复发布检测、管理员后台',
      ],
    },
    {
      id: 'smart-edu',
      name: 'Smart 智能教育平台',
      prdUrl: '/prd/smartedu.html',
      prdToc: [
        { n: '1', title: '项目背景与问题定义' },
        { n: '2', title: '产品定位与目标' },
        { n: '3', title: '目标用户与角色定义' },
        { n: '4', title: '核心使用场景与用户故事' },
        { n: '5', title: '功能需求总览' },
        { n: '6', title: '功能需求详述' },
        { n: '7', title: '关键业务规则与状态机' },
        { n: '8', title: '非功能需求' },
        { n: '9', title: '数据需求' },
        { n: '10', title: '界面与交互需求' },
        { n: '11', title: '版本规划与优先级' },
        { n: '12', title: '风险、约束与待确认项' },
        { n: '', title: '附录 A：接口需求清单' },
      ],
      role: '产品负责人（0 到 1）· 4 人小组',
      period: '2026.02 – 2026.04',
      summary: '面向大学生求职的智能教育平台，用 AI 拉平求职信息差，覆盖课程学习、AI 模拟面试、学习路径与简历优化。',
      metrics: ['上线访问上万', 'Docker 一键部署', '从 0 到 1', '4 人小组'],
      tags: ['从 0 到 1', 'AI 面试', 'MoSCoW', '竞品分析'],
      tech: ['FastAPI', 'SQLAlchemy', 'MySQL', 'Redis', 'JWT', 'Vue 3 + TS', 'Element Plus', 'Pinia', 'Docker Compose'],
      background: '大学生就业市场竞争加剧，2025 届高校毕业生规模达 1222 万，大量学生因缺乏面试训练与简历优化渠道在求职第一步即被淘汰；尤其三四线城市学生接触模拟面试与 AI 工具的机会远少于一线名校生。SmartEdu 的初衷是用 AI 拉平信息差，让任何学生无论学校层次与地域都能免费获得模拟面试、简历优化和个性化学习路径服务。',
      goals: [
        '定位「AI 驱动的个性化面试模拟」为核心差异化方向',
        '基于 MoSCoW 法则排定优先级，MVP 聚焦课程 + 作业 + AI 面试三条功能闭环',
        '形成「练习 → 评估 → 改进」的完整闭环',
      ],
      users: '面向大学生求职人群，通过用户访谈与竞品分析（牛客网 / LeetCode / 实习僧）定位目标用户与差异化场景。',
      needs: [
        '缺乏真实、可反复练习的面试场景',
        '简历优化渠道少、获取成本高',
        '求职训练与信息在三四线城市分布不均',
      ],
      solution: '以「AI 驱动的个性化面试模拟」为核心差异化。MVP 聚焦课程 + 作业 + AI 面试闭环，后续迭代 AI 对话、学习路径等增值模块；设计冷启动策略，注册后直导 AI 面试体验。从 0 到 1 架构，完成完整 PRD、交互原型、API 接口文档、部署方案等全套交付物，支持 Docker Compose 一键部署。工程上采用 FastAPI + SQLAlchemy + MySQL + Redis（后端）与 Vue 3 + TypeScript + Element Plus（前端），落地 JWT 认证、学习统计、成就与等级系统。',
      features: [
        'AI 模拟面试（3 种面试类型 × 3 档难度）',
        '多轮对话后自动生成多维度评估雷达图',
        '课程学习与作业管理',
        '学习路径规划 + 简历优化',
        '用户注册/登录（JWT）、学习统计与报告、成就系统、用户等级',
      ],
      flow: '注册 → 直导 AI 面试体验 → 练习 → 自动生成评估雷达图 → 改进闭环；Docker Compose 一键部署（前端 3000 / 后端 8000 / API 文档 /docs），Nginx 配置 HTTPS。',
      structure: ['课程学习', '作业管理', 'AI 模拟面试', '学习路径规划', '简历优化', '学习统计与成就系统'],
      flowLanes: [
        {
          label: '用户主流程',
          steps: [
            { title: '注册 / 登录', desc: 'JWT 认证，密码强度校验' },
            { title: '选择方向', desc: '课程 / 学习路径' },
            { title: '学习 + 作业', desc: '课程学习、作业管理' },
            { title: 'AI 模拟面试', desc: '3 类型 × 3 档难度' },
            { title: '生成评估雷达图', desc: '多轮对话后自动生成' },
            { title: '针对性改进', desc: '练习 → 评估 → 改进闭环' },
          ],
        },
      ],
      flowExceptions: [
        { title: '请求频率限制', note: '登录 5 次/分、注册 3 次/5 分' },
        { title: '密码强度', note: '大写 + 小写 + 数字 ≥8 位' },
        { title: 'Token 过期', note: '30 分钟 + 7 天刷新' },
      ],
      archLayers: [
        { name: '前端层 · Vue3 + TS + ElementPlus + Pinia', items: ['模拟面试', '简历', 'AI 助手', '学习路径', '作业', '后台', '课程', '首页', '认证'] },
        { name: '后端 API · FastAPI /api', items: ['/interview', '/resume', '/chat', '/learning_path', '/homework', '/admin', '/courses', '/users', '/auth'] },
        { name: '服务层 · services', items: ['interview_service', 'voice_service', 'spark_service', 'dify_service', 'learning_path_service', 'homework_service', 'course_service', 'user_service'] },
        { name: '数据层', items: ['MySQL（40+ 表）', 'Redis'] },
        { name: 'AI 能力', items: ['Dify', '讯飞星火 Spark', '语音 ASR / TTS'] },
        { name: '接入层', items: ['用户浏览器', 'Vite 代理 / 静态服务', 'FastAPI CORS', '限流 RateLimiter + Redis'] },
      ],
      bizMermaid: `flowchart TD
  A([开始 · 访客进入平台]) --> B[注册 / 登录 · JWT 认证]
  B --> C[浏览 / 搜索课程]
  C --> D[选课报名]
  D --> E[学习章节 · 进度追踪]
  E --> F[提交作业]
  F --> G[获取作业反馈 / 评分]
  G --> H[模拟面试 · 语音 + 星火]
  H --> I[生成面试报告 · Dify]
  I --> J[AI 对话答疑]
  J --> K[生成简历 · 导出 DOCX]
  K --> L[学习路径智能推荐]
  L --> M[持续学习 · 数据沉淀]
  B -. 管理员入口 .-> N[后台管理 · Admin RBAC]
  N --> O[用户 / 角色 / 权限]
  N --> P[课程 / 章节管理]
  N --> Q[数据仪表盘]`,
      screens: [
        { title: '平台首页', note: '从选课到面试的核心功能与课程体系', image: '/projects/smartedu/home.png' },
        { title: 'AI 模拟面试', note: '3 位数字人面试官 · 支持切换与面试报告', image: '/projects/smartedu/interview.png' },
        { title: '学习仪表盘', note: '学习进度、成绩分布与最近活动', image: '/projects/smartedu/dashboard.png' },
        { title: 'AI 简历', note: '提示词生成，可导出 PDF / DOCX / Markdown', image: '/projects/smartedu/resume.png' },
        { title: 'AI 助手', note: '全部知识问答空间与语音交互', image: '/projects/smartedu/assistant.png' },
        { title: '课程详情', note: '课程视频 + 章节目录与学习进度', image: '/projects/smartedu/course.png' },
      ],
      iteration: [
        '从 0 到 1 架构，完成 PRD、交互原型、API 接口文档、部署方案全套交付',
        '项目支持 Docker Compose 一键部署，在校部署获得上万访问量，解决部分在校学生的求职需求',
        '下一步迭代：AI 对话、学习路径等增值模块；工程层面补充自动化测试与 CI/CD',
      ],
    },
  ],
};

export default profile;
export const getProject = (id) => profile.projects.find((p) => p.id === id);
