# HA Academy — 蛤学院 Design Spec

**Date:** 2026-03-28
**Status:** Approved

---

## Overview

A satirical educational platform parodying Coursera, dedicated to 膜蛤文化 (Chinese internet meme culture centered on former PRC leader 江泽民). The site presents itself as a serious "nano degree" program — 蛤学院 — offering rigorous academic coursework in 蛤学. All humor derives from the contrast between the dry, formal academic tone and the absurd subject matter. The site is fully frontend-only (no backend), built with React + Vite, and deployable as a static site.

---

## Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router v6 (client-side, clean URLs)
- **Styling:** Tailwind CSS v3
- **Language:** Chinese throughout all copy; course codes and UI chrome in English/Chinese mix
- **Deployment target:** Static hosting (Netlify preferred; Vercel also works)
- **SPA routing:** Use `BrowserRouter` (history API, clean URLs). Add `public/_redirects` for Netlify (`/* /index.html 200`) and `vercel.json` rewrites for Vercel so direct navigation works.

---

## Pages & Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, stats, featured courses |
| `/courses` | Course Catalog | Grid of all 8 course cards |
| `/courses/:id` | Course Detail | Full syllabus, assignments, reviews |
| `/instructor/jiang` | Instructor Profile | 江泽民教授 bio and course list |
| `/certificate` | Certificate CTA | Stub page promoting the nano degree certificate |
| `*` | 404 | Catch-all: "页面未找到" with link back to home |

### Navigation

Logo: **HA Academy \| 蛤学院**
Nav links: 课程 / 讲师 / 认证 + fake 登录 / 注册 buttons (non-functional)
**Mobile:** Hamburger menu (☰) that opens a slide-down or overlay drawer with same links. No bottom bar.

---

## Visual Design

Closely mirrors Coursera's aesthetic:

- **Primary color:** `#0056D2` (Coursera navy blue)
- **Background:** White with light gray (`#F5F5F5`) card surfaces
- **Typography:** Inter (Latin), system Chinese font stack (`PingFang SC`, `Microsoft YaHei`, sans-serif)
- **Course card:** Gradient color block header (unique per course), course code, title, instructor name, difficulty + duration badges, star rating, fake enrollment count
- **Buttons:** Solid blue primary CTA ("立即报名"), outlined secondary
- **Home hero:** Full-width navy banner, tagline, animated enrollment counter (counts up from 0 to 847,293 on page load using `requestAnimationFrame` over ~2 seconds; runs once per page visit; `cancelAnimationFrame` must be called in the `useEffect` cleanup to avoid updates on unmounted component)

---

## Home Page

**Hero section:**
- Tagline: "系统学习膜蛤文化，开启您的蛤学之旅"
- Subtext: "由江泽民教授亲授，全球唯一经认证的蛤学纳米学位项目"
- CTA: "浏览课程"
- Animated stats: 847,293 名学员 / 8 门课程 / 全球认证

**Featured courses:** HA-101, HA-201, HA-302 (hardcoded, not a data flag)

**"为什么选择蛤学院" section:** 3 value props written in dry academic copy:
1. 权威认证 — "蛤学院颁发的纳米学位证书已获得全球蛤学研究界的广泛认可"
2. 名师执教 — "由江泽民教授本人亲自设计课程体系，确保学术严谨性"
3. 体系完整 — "从入门到毕业级，八门课程构成完整的蛤学知识图谱"

---

## Course Catalog Page

8 course cards in a responsive grid (3-col desktop, 2-col tablet, 1-col mobile).

Each card shows: gradient header with course code overlay, title, instructor, difficulty badge, duration, star rating, enrollment count.

---

## Course Data Schema

All course data lives in a single `src/data/courses.ts` file. The `:id` slug is the lowercase hyphenated course code (e.g., `ha-101`). Routes like `/courses/ha-101` look up `courses.find(c => c.id === 'ha-101')`.

```typescript
interface Week {
  title: string;           // e.g., "第一周：膜蛤现象的历史语境"
  topics: string[];        // 2–3 bullet points
  reading: string;         // fabricated paper citation
}

interface Assignment {
  title: string;
  prompt: string;          // 200–300 char academic Chinese prompt
  wordCount: number;
  dueWeek: number;         // which week it's due
}

interface Review {
  text: string;
  author: string;          // e.g., "匿名学员，2025年秋季班"
  rating: 4 | 5;
}

interface Course {
  id: string;              // e.g., "ha-101"
  code: string;            // e.g., "HA-101"
  title: string;
  subtitle: string;
  level: '入门' | '中级' | '高级' | '毕业级';
  durationWeeks: number;
  enrollment: number;
  rating: number;
  abstract: string;        // one paragraph
  gradient: string;        // Tailwind gradient classes for card header
  weeks: Week[];
  assignments: Assignment[];
  reviews: Review[];
}
```

---

## The 8 Courses

| Code | ID | Title | Subtitle | Level | Weeks | Enrollment |
|------|----|-------|----------|-------|-------|------------|
| HA-101 | ha-101 | 膜蛤导论 | 江泽民网络文化的起源与流变 | 入门 | 4 | 284,521 |
| HA-102 | ha-102 | 江氏语录精读 | "too young too simple"的语言学分析 | 入门 | 4 | 197,344 |
| HA-201 | ha-201 | 蛤蟆符号学 | 视觉形象的建构与传播 | 中级 | 5 | 143,208 |
| HA-202 | ha-202 | 江泽民表演艺术研究 | 手风琴、民歌与国家领导人的文艺实践 | 中级 | 5 | 98,771 |
| HA-203 | ha-203 | 膜蛤田野调查方法论 | 互联网亚文化的民族志研究 | 中级 | 6 | 76,432 |
| HA-301 | ha-301 | 后江时代网络考古学 | 审查、存档与数字记忆 | 高级 | 6 | 54,109 |
| HA-302 | ha-302 | 江泽民政治修辞学 | 从"三个代表"到"闷声发大财" | 高级 | 6 | 62,887 |
| HA-401 | ha-401 | 膜蛤综合实践 | 毕业论文与认证考核 | 毕业级 | 8 | 31,021 |

---

## Course Detail Page

### Header
Course code + title, abstract paragraph, difficulty/duration/enrollment, "立即报名" CTA.

### Tabs (client-side state only, not URL-addressable)
1. **课程大纲** — Week-by-week syllabus (default tab)
2. **作业** — 2–3 graded assignments
3. **讲师** — Instructor mini-bio with link to full profile
4. **学员评价** — 4–5 fake student reviews with star ratings

### Canonical Content Example: HA-101

**Abstract:**
本课程系统介绍膜蛤文化的学术研究范式。学员将在江泽民教授的指导下，深入考察这一网络亚文化现象的历史语境、传播机制与符号体系，为后续进阶课程奠定坚实的理论基础。课程涵盖原始文献精读、田野调查初步训练及学术写作规范介绍。

**Week 1:** 膜蛤现象的历史语境
- 1997年香港回归交接仪式的媒体记录与民间传播
- 江泽民公开形象的演变：从国家领导人到网络符号
- 研究伦理与学术规范介绍
- 阅读：《论政治人物的网络符号化进程》，《新媒体与社会》2018年第3期

**Week 2:** 核心文本精读——"你们懂不懂啊"事件
- 1997年香港记者会全文转录与语境分析
- 言语行为理论在政治语篇中的应用
- "懂不懂"作为元认知质疑的修辞功能
- 阅读：《权力话语中的反问句研究》，《语言学研究》2019年第7期

**Week 3:** "too young too simple"的跨语言旅行
- 英语原文的语境与语用意图
- "图样图森破，样衲依"的音译创造与网络传播
- 跨语言改写作为迷因生产机制
- 阅读：《网络语言的创造性音译现象》，《现代汉语研究》2020年第2期

**Week 4:** 膜蛤文化的当代意义
- 蛤学作为独立学科的合法性论证
- 数字时代的政治幽默与审查压力
- 档案保存的学术责任
- 阅读：《互联网亚文化的学科化路径探讨》，《文化研究》2021年第4期

**Assignments:**
1. 「语境还原练习」请收集并整理江泽民公开讲话中不少于五处具有典型网络传播价值的语言片段，分别说明其传播路径及语用特征，不少于1500字。截止时间：第二周结束。
2. 「比较迷因分析」请选取"图样图森破"与另一政治语言迷因进行比较研究，分析二者在传播机制、改写策略与文化功能上的异同，不少于2000字。截止时间：第四周结束。

**Reviews:**
- "本课程是我接触蛤学的起点。江教授设计的课程框架逻辑严密，阅读材料选取精当，令人印象深刻。" — 匿名学员，2025年春季班 ★★★★★
- "作为一名语言学专业的研究生，我发现本课程的语用学分析方法具有相当的学术价值，已将相关框架应用于本人的毕业论文研究中。" — 匿名学员，2024年秋季班 ★★★★★
- "课程内容充实，但第三周进度略快，建议增加练习材料。总体而言瑕不掩瑜。" — 匿名学员，2025年春季班 ★★★★
- "图样图森破这一语言现象的跨语言分析角度令我耳目一新。" — 匿名学员，2024年冬季班 ★★★★★

*The remaining 7 courses follow the same structure and will be written in full during implementation, maintaining the same dry academic register and weaving in the cultural references listed in the tone guidelines.*

---

## Instructor Profile Page (`/instructor/jiang`)

- Name: 江泽民 教授
- Title: 蛤学院创始人 / 政治传播学、手风琴演奏学及网络亚文化研究首席教授
- Stats: 8门课程 / 847,293名学员 / 4.9星评分

**Bio (canonical example, first paragraph):**
> 江泽民教授是当代蛤学研究领域的奠基人与最高权威。其学术生涯横跨政治传播学、表演艺术学与互联网文化研究三大领域，迄今发表学术论文逾百篇，专著《论政治人物的网络符号生命》已成为蛤学研究的经典文献。江教授尤以其独创的"三维蛤学分析框架"著称，该框架将语言学、符号学与民族志方法融为一体，为后续研究者提供了系统性的方法论工具。

The remaining 3 bio paragraphs (written during implementation) cover: his "musical scholarship" (accordion and folk song research), his "field methodology" contributions, and his founding of 蛤学院.

---

## Certificate Page (`/certificate`)

**Structure:**
1. Hero: "蛤学纳米学位证书" with a decorative certificate illustration placeholder
2. What it is: "完成全部八门课程及毕业论文答辩后，蛤学院将颁发全球唯一经认证的蛤学纳米学位证书"
3. What it opens: A bulleted list of (fake) career paths — 高校蛤学讲师资格 / 蛤学研究员资格 / 膜蛤文化顾问认证 / 互联网亚文化独立研究员资格
4. Non-functional CTA: "开始我的蛤学之旅" → links to `/courses`

---

## Content Tone Guidelines

- **Language:** Formal Mandarin Chinese, academic register throughout
- **No winking:** The site never acknowledges it is a joke. Every sentence is written as if this is a legitimate institution.
- **Key references to weave in across the 8 courses:**
  - "too young too simple, sometimes naive" / "图样图森破，样衲依" → HA-101, HA-102
  - 江泽民 vs Hong Kong press confrontation ("你们懂不懂啊！") → HA-101, HA-302
  - Hand accordion performances and folk song renditions → HA-202
  - The toad/frog visual iconography → HA-201
  - "三个代表" reframed as academic theory → HA-302
  - "闷声发大财" as strategic communication doctrine → HA-302
  - Thick-rimmed glasses as cultural symbol → HA-201, HA-301
  - Emotional public moments reframed as "affective leadership performance" → HA-202, HA-203
  - Internet censorship and archival challenges → HA-301

---

## Non-Goals

- No backend, authentication, or database
- No actual video content
- No payment flow
- No i18n / English version (Chinese only)
- Course detail tabs are not URL-addressable (client-side state only)
- Courses are not "completable" — this is a browsing experience only
