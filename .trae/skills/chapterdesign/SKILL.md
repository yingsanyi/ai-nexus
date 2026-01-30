---
name: chapterdesign
description: 创建新教程章节时，自动生成章节组件与接入改动：创建新组件文件，将章节内容拆分为多个 UI 分区（Hero/Hardware/Software/Platform 等），使用 Lucide + Tailwind + Flex/Grid 做信息图式排版，加入 SVG/CSS 动画或简单交互示意，更新 courses.ts 并修改 LearningView.tsx 渲染逻辑以支持新组件；保留充分文字说明；源文档中的代码示例不得省略（需完整保留并在界面中以代码块展示）；演示模式不使用 Markdown 排版，输出应贴近前端界面文案与结构；演示模式整体采用“一页 PPT”式单屏布局（除代码示例区允许滚动条外，其余区域不得出现纵向长滚动）；布局需进一步优化为美观大方、上下左右尽量对齐、留白充足不拥挤；内容需严格覆盖参考文档，可润色与扩充但不得删减。
---

## 你需要我提供的输入（缺一我会先追问）
- 参考文档（第 N 章的全部原文/要点，包含其中全部代码示例）
- 项目技术栈与约定：路由/章节 ID 命名、组件目录结构、是否用 Next/Vite、是否已有 `IntroJourney.tsx`
- 现有文件：`courses.ts`、`LearningView.tsx`（或其关键片段）
- 演示模式规范：目标屏幕尺寸（如 1440×900 / 1920×1080）、是否有固定 Header/SideBar、高度如何计算（`100vh` 是否可用）
- 目标章节信息：章名、chapterId/slug、在课程中的顺序、是否需要中英双语
- 视觉偏好：浅色/深色、品牌主色（用于强调色与渐变）

## 输出与改动范围（我将一次性给出可粘贴代码）
1. 新增章节组件（`ChapterXxx.tsx`）
   - 按 `IntroJourney.tsx` 风格拆分：Hero / Hardware / Software / Platform / Workflow / Checklist / NextSteps（根据参考文档增补，但不删减）
   - 每个分区：Lucide 图标 + Tailwind 卡片/网格布局 + 关键点列表（避免“文本堆砌”）
   - 至少 1 个示意图/动画（SVG/CSS/简单交互）
   - 代码示例展示（不得省略）
     - 源文档代码以“代码卡片”呈现：标题/说明 + 代码块（等宽字体）
     - 仅代码块区域允许滚动（`overflow-auto`），其余区域保持单屏
   - 演示模式（One-page PPT）布局约束
     - 顶层固定单屏：`h-[calc(100vh-...)]`（或容器高度），禁止整体纵向滚动
     - 内容超出：用 tabs/stepper/分页卡片在同屏切换信息，不拉长页面
     - 文案不用 Markdown 结构符号，直接以 UI 文案呈现

2. 修改 `courses.ts`
   - 新增 chapter 元数据：title、id/slug、componentKey（或直接引用组件）、预计时长/标签（按你现有结构）
   - 保证顺序与导航一致

3. 修改 `LearningView.tsx`
   - 在渲染映射中加入新章节组件支持（switch/map/动态 import 按你现有模式）
   - 处理找不到组件的 fallback

## 演示模式布局“进一步优化”强制规范（对齐、留白、不拥挤）
- 统一容器与栅格：
  - 外层：`mx-auto w-full max-w-6xl px-6`（或与你项目一致）
  - 主体：`grid gap-6 lg:grid-cols-12`
  - 卡片统一：`rounded-2xl border bg-background/60 p-6 shadow-sm`
- 对齐规则：
  - 标题行统一高度与基线：`flex items-end justify-between`
  - 图标与标题：`flex items-center gap-3`（图标固定 `size-5/6`）
  - 列表用 `space-y-2`，避免段落挤压；段落行距 `leading-6`
- 留白规则（只用 Tailwind spacing scale，避免“随机像素”）：
  - 区块间距：`gap-6`，卡片内边距：`p-6`，小间距：`gap-3/4`、`space-y-2/3`
- 单屏控制：
  - 整体 `overflow-hidden`
  - 仅代码块：`max-h-[240px] overflow-auto`（高度按屏幕可配置）
- 视觉层次：
  - “关键结论/注意事项”用浅色高亮条：`bg-primary/5 border-primary/20`
  - 次要信息降低对比：`text-muted-foreground`
  - 统一圆角、边框、阴影强度，避免花哨但保证精致

## 质量与约束（我会严格遵守）
- 参考文档内容一条不漏：可润色与扩充，不得删减
- 源文档所有代码示例完整保留：不截断、不省略，必要时通过代码区滚动承载
- 演示模式：一页 PPT 单屏；除代码块外不出现纵向长滚动
- UI：美观大方、对齐统一、留白充足、不拥挤；响应式合理（按 Tailwind 响应式规则组织）[ref:3]

## 现在把这些发我
1) 参考文档（该章节完整内容 + 其中全部代码示例原样粘贴）  
2) `courses.ts` 和 `LearningView.tsx` 现有代码（或最小可运行片段）  
3) 目标屏幕尺寸/容器高度规则（是否有顶部栏高度要扣除）  
4) 你想创建的是第几章？组件文件名/路径希望是什么？