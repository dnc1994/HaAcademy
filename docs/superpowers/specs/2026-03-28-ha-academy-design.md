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
- **Styling:** CSS Modules or Tailwind CSS (TBD at implementation)
- **Language:** Chinese throughout all copy; course codes and UI chrome in English/Chinese mix
- **Deployment target:** Static hosting (Netlify / Vercel / GitHub Pages)

---

## Pages & Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, stats, featured courses |
| `/courses` | Course Catalog | Grid of all 8 course cards |
| `/courses/:id` | Course Detail | Full syllabus, assignments, reviews |
| `/instructor/jiang` | Instructor Profile | 江泽民教授 bio and course list |
| `/certificate` | Certificate CTA | Stub page promoting the nano degree certificate |

### Navigation

Logo: **HA Academy \| 蛤学院**
Nav links: 课程 / 讲师 / 认证 + fake 登录 / 注册 buttons (non-functional)

---

## Visual Design

Closely mirrors Coursera's aesthetic:

- **Primary color:** `#0056D2` (Coursera navy blue)
- **Background:** White with light gray (`#F5F5F5`) card surfaces
- **Typography:** Inter (Latin), system Chinese font stack (`PingFang SC`, `Microsoft YaHei`, sans-serif)
- **Course card:** Gradient color block header (unique per course), course code, title, instructor name, difficulty + duration badges, star rating, fake enrollment count
- **Buttons:** Solid blue primary CTA ("立即报名"), outlined secondary
- **Home hero:** Full-width navy banner, tagline, large animated enrollment counter

---

## Home Page

**Hero section:**
- Tagline: "系统学习膜蛤文化，开启您的蛤学之旅"
- Subtext: "由江泽民教授亲授，全球唯一经认证的蛤学纳米学位项目"
- CTA: "浏览课程"
- Fake stats: 847,293 名学员 / 8 门课程 / 全球认证

**Featured courses:** 3 highlighted course cards

**"为什么选择蛤学院" section:** 3 value props (dry academic copy)

---

## Course Catalog Page

8 course cards in a responsive grid (3-col desktop, 2-col tablet, 1-col mobile).

Each card shows: gradient header, course code, title, instructor, difficulty badge, duration, star rating, enrollment count.

---

## The 8 Courses

| Code | Title | Subtitle | Level | Duration |
|------|-------|----------|-------|----------|
| HA-101 | 膜蛤导论 | 江泽民网络文化的起源与流变 | 入门 | 4周 |
| HA-102 | 江氏语录精读 | "too young too simple"的语言学分析 | 入门 | 4周 |
| HA-201 | 蛤蟆符号学 | 视觉形象的建构与传播 | 中级 | 5周 |
| HA-202 | 江泽民表演艺术研究 | 手风琴、民歌与国家领导人的文艺实践 | 中级 | 5周 |
| HA-203 | 膜蛤田野调查方法论 | 互联网亚文化的民族志研究 | 中级 | 6周 |
| HA-301 | 后江时代网络考古学 | 审查、存档与数字记忆 | 高级 | 6周 |
| HA-302 | 江泽民政治修辞学 | 从"三个代表"到"闷声发大财" | 高级 | 6周 |
| HA-401 | 膜蛤综合实践 | 毕业论文与认证考核 | 毕业级 | 8周 |

---

## Course Detail Page

### Header
Course code + title, one-paragraph academic abstract, difficulty/duration/enrollment, "立即报名" CTA.

### Tabs
1. **课程大纲** — Week-by-week syllabus
2. **作业** — 2–3 graded assignments
3. **讲师** — Instructor mini-bio with link to full profile
4. **学员评价** — 4–5 fake student reviews with star ratings

### Syllabus format (per course, ~4–6 weeks)
Each week: title + 2–3 bullet topics + one reading reference (fabricated academic paper title).

### Assignment format
Each assignment: title, prompt (200–300 chars, dry academic Chinese), word count requirement, fake due date.

### Student reviews
Mix of 4★ and 5★ ratings. Dry, earnest-sounding praise. Example:
> "本课程彻底改变了我对政治语言学的认知。江教授的语录分析框架具有极强的学术原创性。强烈推荐。" — 匿名学员，2025年秋季班

---

## Instructor Profile Page (`/instructor/jiang`)

- Name: 江泽民 教授
- Title: 蛤学院创始人 / 政治传播学、手风琴演奏学及网络亚文化研究首席教授
- Academic bio: 3–4 paragraphs of completely deadpan prose covering his "research contributions"
- Stats: 8门课程 / 847,293名学员 / 4.9星评分
- List of all 8 courses he teaches

---

## Certificate Page (`/certificate`)

Stub page describing the "蛤学纳米学位" — what it is, how to earn it (complete all 8 courses + capstone), what doors it opens. Non-functional CTA button. Pure comedic copy.

---

## Content Tone Guidelines

- **Language:** Formal Mandarin Chinese, academic register throughout
- **No winking:** The site never acknowledges it is a joke. Every sentence is written as if this is a legitimate institution.
- **Key references to weave in:**
  - "too young too simple, sometimes naive" / "图样图森破，样衲依"
  - 江泽民 vs Hong Kong press confrontation ("你们懂不懂啊！")
  - Hand accordion performances and folk song renditions
  - The toad/frog visual iconography
  - "三个代表" reframed as academic theory
  - "闷声发大财" as strategic communication doctrine
  - Thick-rimmed glasses as cultural symbol
  - Emotional public moments reframed as "affective leadership performance"

---

## Non-Goals

- No backend, authentication, or database
- No actual video content
- No payment flow
- No i18n / English version (Chinese only)
- Courses are not "completable" — this is a browsing experience only
