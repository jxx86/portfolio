# 个人作品集网站 · 交接文档

> 本文档给后续接手者（WorkBuddy / 其他 AI 或人）用，说明项目现状、怎么跑、怎么改、以及还没做完的部分和部署上线的步骤。

---

## 一、项目概况

- **目标**：一个发给 HR 的个人作品集网站（产品经理 · 江俊杰）。HR 用手机/电脑点开能快速看到「基本情况 + 项目案例」。
- **技术栈**：React 18 + Vite 6，纯前端 SPA，单页应用，无后端。
- **设计**：黑白克制风（近黑文字、大量留白、细分割线），带**深色模式**（右上角 ☾ 切换，记住选择）。
- **导航层级（三级）**：
  1. **首页**：Hero（姓名/定位/人物图）+ 关于我 + 专业能力 + 精选项目 + 经历 + 联系我。
  2. **项目页**（点首页项目卡片进入）：项目头 + 三张卡片（产品需求文档 / 流程图 / 原型页面）。
  3. **详情页**：对应内容（PRD / 流程图 / 原型页面）。
- **路由**：hash 路由（无需服务端 rewrite）。`#/` 首页，`#/project/:id` 项目页，`#/project/:id/intro|flow|proto` 三个详情页。

---

## 二、当前已完成

- ✅ React+Vite 项目搭建，`npm run build` 通过。
- ✅ 黑白设计 + 深浅色主题 + 移动端适配。
- ✅ 首页各模块（Hero 人物图带 hover 切换、能力条、经历时间线、联系方式可复制邮箱/电话/GitHub）。
- ✅ 两个项目案例（校园二手交易智能系统、SmartEdu 智能教育平台）。
- ✅ 每个项目的 **PRD**（完整需求规格说明书，内嵌 + 左侧目录）+ **系统架构分层图 + 核心业务流程图** + **原型页面**（真实截图可点击放大）。
- ✅ PRD：从 WorkBuddy/项目文件夹提取的完整 HTML，提取 `.doc` 正文内嵌，黑白配色，左侧可点击目录、滚动高亮。
- ✅ 流程图：系统架构分层图用 HTML 层叠卡片、核心业务流程图用 Mermaid（带分支/判断），深色主题适配。

---

## 三、怎么本地运行

```bash
# 在项目根目录（本文件夹）执行
npm install
npm run dev -- --port 5174
```

打开 `http://localhost:5174/` 预览。改代码后 Vite 热更新。

> ⚠️ **重要**：5173 端口被另一个项目占用了（`D:\work\jxx\portfolio` 是另一个作品集项目），所以本项目的 dev 端口用 **5174**。别把这两个项目搞混——**要交接/部署的是本项目**（`C:\Users\18277\OneDrive\Documents\ChatGPT\个人站`）。

生产构建：

```bash
npm run build          # 产物在 dist/
```

---

## 四、关键文件

| 文件 | 作用 |
|---|---|
| `src/data/profile.js` | **所有文字内容的唯一来源**（改这里即可，不用动组件） |
| `src/main.jsx` | 入口 |
| `src/App.jsx` | hash 路由 + 页面淡入 + 项目切换置顶 |
| `src/components/` | 各区块组件 |
| `src/index.css` | 全部样式（黑白 token、主题变量、组件样式） |
| `public/projects/campus/` | 校园项目 4 张原型图 |
| `public/projects/smartedu/` | SmartEdu 6 张原型图 |
| `public/prd/campus.html` / `public/prd/smartedu.html` | 两个项目的 PRD 源文件（被 `PrdView` 运行时 fetch 后内嵌） |

### profile.js 里的字段（每个项目）

- 概览：`name / role / period / summary / metrics[] / tags[] / tech[]`
- 简介（PRD 内容）：`background / goals[] / users / needs[] / solution / features[] / flow / structure[] / iteration[]`
- 原型：`screens[{ title, note, image }]`
- 流程图：`archLayers[{ name, items[] }]`（架构分层）+ `bizMermaid`（核心业务流程图，Mermaid 语法字符串）+ `flowExceptions[]`（异常与边界）
- PRD：`prdUrl`（PRD 文件路径）+ `prdToc[]`（左侧目录，必须与 PRD 里的 `<h2>` 标题文字一致）

---

## 五、几个重要实现说明 / 坑（接手必看）

1. **PRD 不要用 iframe**。之前用 iframe 会有「双滚动条、顶栏遮挡、目录点击跳到顶部」的问题。现在是 `PrdView` 组件**运行时 fetch PRD 的 html → 取 `.doc` 正文 → 用自己的 `.prd-doc` 黑白样式渲染**，左边目录点击用 `scrollIntoView` 跳到对应 `<h2>`。改 PRD 只改 `public/prd/*.html` 和 `prdToc`。
2. **`prdToc` 的 title 必须和 PRD html 里的 `<h2>` 文本一致**，否则目录跳转/高亮找不到（用 `textContent.includes(title)` 匹配）。
3. **Mermaid 是按需动态 import**（`import('mermaid')`），只在打开「流程图」页时加载，不影响首页速度；打包会产生很多大 chunk，正常。
4. **原型图点击放大**：`screens` 里有 `image` 就显示图，点图弹出全屏查看。SmartEdu 的图很大（单张 1~3MB），**上线前建议压缩**。
5. **返回键**：`position: sticky; top: 20px`，会吸附跟导航平行。注意**顶部导航外层是透明全宽 fixed 条，必须保持 `pointer-events: none`**（只让 `.nav__inner` 可点），否则会挡住返回键/侧边点击。这个 bug 已修，别改回去。
6. **深色模式**：`ThemeToggle` 切换 `<html class="dark">`，CSS 变量在 `html.dark` 里覆盖。mermaid 会按当前主题初始化。
7. **人物图**：现在是占位（repo 的演示角色 `josh.webp` + hover `josh_wave.webp`）。**必须换成自己的照片**。
8. **`resume.pdf`**：下载按钮/联系里的「下载 PDF 简历」指向 `/resume.pdf`，**还没放文件**，需放到 `public/resume.pdf`。

---

## 六、还没完成的待办

1. **换自己的照片**：准备两张（默认 + 换姿势/hover，最好同尺寸），放 `public/`（如 `public/me.webp`、`public/me_wave.webp`），然后把 `profile.js` 里的 `portrait` 和 `portraitHover` 指向它们。照片建议清晰正面半身、近方形。
2. **放简历 PDF**：把简历导出 PDF，命名 `resume.pdf`，放 `public/`。
3. **压缩原型图**：`public/projects/smartedu/*.png`（6 张）很大，建议压缩到每张几百 KB（清晰度基本不变），否则 HR 手机打开慢。
4. **（可选）加访问统计**（仅你自己可见）：最简单用百度统计，往 `index.html` 加一小段脚本；或验证 EdgeOne 自带指标。不要放「页面上可见的访客计数器」。
5. **（可选）是否在 PRD 页加一句「实现状态」诚实说明**：SmartEdu 的代码里多项 AI 能力实为「降级/模板兜底」（Dify Key 是占位符、评分固定、语音是回显等，见项目里的代码级审计备忘录）。展示前建议想清楚，别在技术面试里把未真正实现的功能说成已交付。
6. **最终 QA**：手机端 + 桌面都过一遍，测试深浅色、返回键、目录跳转、流程图、原型放大、简历下载。

---

## 七、部署上线（下一步核心）

域名已注册：**`jxxiangjunjie.site`**（国内注册商，11 元/年）。托管推荐 **腾讯云 EdgeOne Pages**（免费、无需备案、国内可访问），GitHub 账号为 `jxo86`（已登录）。

**步骤：**

1. **推代码到 GitHub**（建议新建仓库，如 `portfolio`）：
```bash
git init                       # 若未 init
git add .
git commit -m "portfolio"
git remote add origin https://github.com/jxo86/portfolio.git
git branch -M main
git push -u origin main
```
> 注意：`node_modules` 和 `dist` 已在 `.gitignore`，别提交。

2. **EdgeOne Pages 导入该 GitHub 仓库**（登录 `console.cloud.tencent.com/edgeone/pages`，连接 GitHub，选择 `portfolio`），框架选 **Vite**，构建设置一般用默认：构建命令 `npm run build`，输出目录 `dist`。

3. **绑定域名**：在 EdgeOne Pages 项目设置里添加自定义域名 `jxxiangjunjie.site`，然后去域名注册商 DNS 处加一条解析（EdgeOne 会给出 CNAME 记录）。`.site` 走境外节点做加速，**不需要 ICP 备案**。

4. **上线后验证**：手机 + 电脑打开 `jxxiangjunjie.site`，测速度、移动端、深浅色、PRD/流程图/原型、下载简历。

> 若 EdgeOne Pages 不顺手，可换 **Cloudflare Pages + 自定义域名**（同样免备案、国内可访问），流程类似。

---

## 八、注意

- **别用 Vercel / GitHub Pages**：默认二级域名在国内常被墙/很慢，不适合「发给 HR」。
- **别用 `.top/.xyz` 域名**（用户已确定用 `.site`；`.site` 是低价后缀，观感中等，但可用）。
- 本作品集内容都是真实简历/项目数据；**别把代码级审计里的负面发现（AI 降级、鉴权缺失等）写进页面**，那只是内部参考。
