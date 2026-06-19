# Portfolio Build Instructions — Shreyas M Rao
> AI Agent Guide: Build a single-page developer portfolio website using the Spotify-inspired dark design system defined below. All content, sections, copy, and structure are specified in this document. Follow every instruction precisely.

---

## 0. Project Overview

**Goal:** Build a single-page portfolio website for Shreyas M Rao — a Backend-Focused Software Engineer.

**Stack:** React.js (preferred) or plain HTML/CSS/JS
**Theme:** Spotify-inspired dark design system (defined in Section 1)
**Layout:** Single-page with smooth scroll navigation
**Font:** Use `CircularSp` fallback stack — import via Google Fonts alternative: `'DM Sans'` or `'Inter'` as the closest available web-safe approximation. Apply `font-family: 'Inter', 'Helvetica Neue', helvetica, arial, sans-serif` throughout.

---

## 1. Design System (Spotify-Inspired)

### 1.1 Color Palette

```css
:root {
  /* Backgrounds */
  --bg-base:       #121212;   /* Page background — deepest layer */
  --bg-surface:    #181818;   /* Cards, containers, sidebar */
  --bg-interactive:#1f1f1f;   /* Buttons, hover states */
  --bg-card-alt:   #252525;   /* Alternate card surface */

  /* Text */
  --text-primary:  #ffffff;   /* Primary text */
  --text-secondary:#b3b3b3;   /* Muted labels, secondary info */
  --text-emphasis: #fdfdfd;   /* Maximum emphasis */

  /* Accent */
  --accent:        #1ed760;   /* Spotify Green — CTAs, active states, highlights ONLY */
  --accent-border: #1db954;   /* Green border variant */

  /* Semantic */
  --color-error:   #f3727f;   /* Error / negative */
  --color-warning: #ffa42b;   /* Warning */
  --color-info:    #539df5;   /* Announcement / info */

  /* Borders */
  --border-muted:  #4d4d4d;
  --border-light:  #7c7c7c;

  /* Shadows */
  --shadow-card:   rgba(0,0,0,0.3) 0px 8px 8px;
  --shadow-dialog: rgba(0,0,0,0.5) 0px 8px 24px;
  --shadow-inset:  rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset;
}
```

### 1.2 Typography

```css
/* Base font stack */
font-family: 'Inter', 'Helvetica Neue', helvetica, arial, sans-serif;

/* Hierarchy */
/* Section titles    → 24px, weight 700 */
/* Feature headings  → 18px, weight 600, line-height 1.30 */
/* Body bold         → 16px, weight 700 */
/* Body              → 16px, weight 400 */
/* Button labels     → 14px, weight 700, uppercase, letter-spacing 1.4px–2px */
/* Navigation        → 14px, weight 700 (active) / 400 (inactive) */
/* Captions/meta     → 14px, weight 400 */
/* Tags/badges       → 12px, weight 700 */
/* Fine print        → 12px, weight 400 */
```

### 1.3 Button Styles

```css
/* Primary CTA (Pill) */
.btn-primary {
  background: var(--accent);       /* #1ed760 */
  color: #000000;
  padding: 12px 32px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  border: none;
  cursor: pointer;
}

/* Secondary (Dark Pill) */
.btn-secondary {
  background: var(--bg-interactive);
  color: var(--text-primary);
  padding: 10px 24px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  border: none;
  cursor: pointer;
}

/* Outlined Pill */
.btn-outlined {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  padding: 8px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  cursor: pointer;
}
```

### 1.4 Card Style

```css
.card {
  background: var(--bg-surface);   /* #181818 */
  border-radius: 8px;
  padding: 24px;
  transition: background 0.2s ease;
}
.card:hover {
  background: var(--bg-interactive); /* #1f1f1f */
  box-shadow: var(--shadow-card);
}
```

### 1.5 Layout & Spacing

- Base spacing unit: `8px`
- Section padding: `80px 0` (desktop), `48px 0` (mobile)
- Container max-width: `1200px`, centered, horizontal padding `24px`
- Grid columns: 3 (desktop) → 2 (tablet) → 1 (mobile)
- Sidebar nav: fixed left on desktop, top nav bar on mobile

### 1.6 Geometry Rules

- All buttons: `border-radius: 9999px` (pill) — NO square buttons
- Cards: `border-radius: 8px`
- Avatar/icon circles: `border-radius: 50%`
- Tech tag pills: `border-radius: 9999px`
- Accent green: use ONLY for CTAs, active states, highlights — never decorative fills

---

## 2. Navigation

**Type:** Fixed top navbar on scroll; sticky with `background: rgba(18,18,18,0.95)` + `backdrop-filter: blur(10px)` when scrolled.

**Logo/Brand:** `Shreyas M Rao` — left side, 16px weight 700, white.

**Nav Links (right side):**
```
About  |  Skills  |  Experience  |  Projects  |  Achievements  |  Contact
```
- Font: 14px, weight 700 (active) / 400 (inactive)
- Color: `#ffffff` (active/hover) / `#b3b3b3` (inactive)
- Smooth scroll to each section on click
- Active section highlights nav link in `var(--accent)` — `#1ed760`

**Mobile:** Collapse into hamburger menu → full-screen dark overlay nav

---

## 3. Section-by-Section Build Instructions

---

### Section 1: Hero

**ID:** `#hero`
**Layout:** Full viewport height (`100vh`), centered content, dark background `#121212`

**Content to render:**

```
[Subtle animated tag — pill badge style]
"Backend Software Engineer"

[H1 — 48px desktop / 32px mobile, weight 700, white]
"Hi, I'm Shreyas M Rao"

[H2 — 20px, weight 400, #b3b3b3 — typewriter animation recommended]
"Backend-Focused Engineer specializing in scalable microservices,
real-time systems, secure authentication, and banking-grade applications."

[Buttons row]
→ "View Projects"    [Primary pill — accent green]
→ "Download Resume"  [Secondary dark pill]
→ "Contact Me"       [Outlined pill]

[Social links row — icon buttons, circular, outlined]
→ LinkedIn: linkedin.com/in/helloshreyass
→ GitHub:   github.com/Humbledot00
→ Email:    shreyasrao012@gmail.com
→ Portfolio: helloshreyas.vercel.app
```

**Design notes:**
- Add a subtle radial gradient from `rgba(30,215,96,0.05)` at center — very faint green glow, not visible as a block of color
- Optional: floating code/terminal ASCII art or animated background dots (keep subtle)
- Scroll-down indicator at bottom center (animated arrow, `#b3b3b3`)

---

### Section 2: About Me

**ID:** `#about`
**Layout:** Two-column (left: text, right: visual element or tech stack cloud) → single column on mobile

**Section label (above heading):** `"ABOUT"` — 12px, uppercase, letter-spacing 2px, `var(--accent)` green

**Heading:** `"Who I Am"` — 32px, weight 700, white

**Body text to render (exact copy):**

```
I'm a backend-focused software engineer with hands-on experience building
and scaling banking-grade applications using Node.js and Java Spring Boot.

I specialize in microservices architecture, real-time communication systems,
secure authentication platforms, and high-concurrency backend engineering.
My work spans production-critical systems in the banking and fintech domain,
where reliability, performance, and security are non-negotiable.

I enjoy debugging complex distributed systems, optimizing database performance,
and shipping production-ready containerized services. I'm also deeply
interested in AI-assisted development workflows and developer tooling.

Currently at Desk Nine Pvt Ltd, Bengaluru, building backend infrastructure
for banking and KYC platforms.
```

**Right column content:** Animated stat cards (dark pill style):
```
📍  Bengaluru, India
🎓  B.E. Computer Science — CGPA 9.21
💼  Associate Software Engineer @ Desk Nine
📧  shreyasrao012@gmail.com
```

---

### Section 3: Technical Skills

**ID:** `#skills`
**Layout:** Grid of category cards — 3 columns desktop, 2 tablet, 1 mobile

**Section label:** `"SKILLS"` — 12px uppercase, letter-spacing 2px, accent green
**Heading:** `"Technical Expertise"` — 32px, weight 700

**Render the following skill categories as cards** (`var(--bg-surface)` background, 8px radius, hover lifts with shadow):

```
[Card 1] Languages
→ JavaScript, Java, SQL, C/C++, HTML, CSS

[Card 2] Backend Frameworks
→ Node.js, Express.js, Spring Boot

[Card 3] Frontend
→ React.js, Angular

[Card 4] Databases
→ MySQL, MongoDB, Redis

[Card 5] Cloud & DevOps
→ AWS (S3), Docker, Nginx

[Card 6] Real-Time Systems
→ WebSockets, Socket.IO, WebRTC

[Card 7] AI & Developer Tools
→ Claude Code, GitHub Copilot, OpenAI Codex, Agentic AI

[Card 8] Tools & Platforms
→ Git, Postman, PM2, BullMQ, OAuth2, JWT
```

**Each card design:**
- Card header: category name — 16px weight 700 white, with a small accent-green left border strip (3px wide)
- Skills: rendered as dark pill tags (`#1f1f1f` background, `#b3b3b3` text, `border-radius: 9999px`, `padding: 4px 12px`, `font-size: 12px`)
- Card hover: background `#1f1f1f`, shadow `var(--shadow-card)`

---

### Section 4: Professional Experience

**ID:** `#experience`
**Layout:** Vertical timeline — left timeline line (accent green), right content cards

**Section label:** `"EXPERIENCE"` — 12px uppercase, letter-spacing 2px, accent green
**Heading:** `"Work Experience"` — 32px, weight 700

---

#### Experience Entry 1:

```
[Company]    Desk Nine Pvt Ltd — Bengaluru, India
[Role]       Associate Software Engineer
[Duration]   July 2025 – Present
[Badge]      "Full-Time" — accent green pill tag
```

**Sub-sections inside this entry (render as expandable or tabbed cards):**

**Tab/Sub-section A: "Core VCIP Platform"**

Render these as bullet achievements inside a dark card:

- **VCIP Architecture Modernization:** Led transition from monolithic to Dockerized microservices architecture, cutting deployment time by 70%.
- **Database Optimization & Storage Migration:** Migrated image storage from Base64/MongoDB to AWS S3 (object path only in DB), improving database performance by ~40%.
- **Microsoft Graph & SMTP Email Automation:** Built secure email automation using Microsoft Graph API with OAuth2 authentication and SMTP fallback for resilient multi-provider delivery.
- **Real-Time & Event-Driven Backend:** Designed WebSocket-based live video workflows and asynchronous processing using Redis and BullMQ for session state, background jobs, and RC validation microservices integration.
- **Application Rebranding:** Led end-to-end platform rebranding — theme transformation, UI consistency, and standardized email/SMS templates.

**Tab/Sub-section B: "Equitas Bank & MDP — Video KYC"**

- **Production Stability Engineering:** Diagnosed Oracle DB connection leaks in a high-concurrency Node.js (PM2) environment. Implemented tuned connection pooling with proper release management and graceful shutdown hooks — reduced active handles from 87,000 to 5,000, eliminating recurring production instability.
- **Redis Job Processing Optimization:** Improved BullMQ-based Redis job processing with async timeout and error handling for stuck jobs — reduced queue-block incidents from weekly to near zero, eliminating manual queue clearing and service restarts.
- **Security Hardening:** Developed hybrid encryption mechanism for sensitive KYC data and enforced API rate limiting for high-traffic protection.
- **MDP Service & Configuration Management:** Maintained business-critical MDP workflows and implemented dynamic configuration panels for evolving operational and regulatory requirements.

**Tab/Sub-section C: "Centralized Authentication Server"**

- **Auth Server Development:** Planned and built a secure standalone authentication server using Java Spring Boot for centralized identity and access management across microservices.
- **Enterprise SSO & Identity Integration:** Integrated Google, Microsoft, and Oracle IDCS identity providers for Social and enterprise SSO workflows.
- **Token Security APIs:** Built APIs for token generation, encryption, decryption, and payload authorization for secure inter-service communication.
- **Production Deployment:** Dockerized the auth server with comprehensive unit and integration test suites.

---

#### Experience Entry 2:

```
[Company]    Desk Nine Pvt Ltd — Bengaluru, India
[Role]       Software Engineer Intern
[Duration]   February 2025 – June 2025
[Badge]      "Internship" — dark outlined pill tag
```

**Content:**
- Gained practical expertise in Node.js, Oracle DB, Redis, AWS S3, and Docker through hands-on training.
- Contributed to 3+ internal modules and proof-of-concepts.
- Worked on high-concurrency, banking-grade system design under senior mentorship.

---

#### Experience Entry 3:

```
[Company]    Center for System Design, NITK Surathkal
[Sub]        National Institute of Technology Karnataka, India
[Mentor]     Prof. K. V. Gangadharan
[Role]       Virtual Reality Intern
[Duration]   October 2023 – November 2023
[Badge]      "Internship" — dark outlined pill tag
```

**Content:**
- **Virtual 3D Object Manipulation System:** Designed and developed a system for virtual 3D object manipulation using rotational data from the MPU6050 sensor, enabling real-time interaction between physical motion and virtual environments.
- **Hardware–Software Integration:** Integrated MPU6050 sensor and ESP8266 module with Unity, demonstrating seamless embedded systems ↔ virtual application communication.
- **Immersive Simulation:** Implemented real-time data processing and visualization within Unity for physical-input-driven 3D object manipulation.

---

**Timeline visual design:**
- Vertical line: 2px, `var(--accent)` green, runs down the left
- Timeline dot: 12px circle, `var(--accent)` green fill, at each entry
- Cards: `var(--bg-surface)` background, 8px radius, left padding offset from timeline
- Company name: 18px weight 600 white
- Role: 16px weight 700 white
- Duration: 14px weight 400 `#b3b3b3`
- Achievement bullets: 14px weight 400, white, with a small green dot prefix

---

### Section 5: Projects

**ID:** `#projects`
**Layout:** 3-column card grid (desktop) → 2 (tablet) → 1 (mobile)

**Section label:** `"PROJECTS"` — 12px uppercase, letter-spacing 2px, accent green
**Heading:** `"Featured Projects"` — 32px, weight 700

---

#### Project Card 1: BodhiMent

```
[Title]        BodhiMent
[Subtitle]     AI-Driven Mnemonic Generation System
[Date]         August 2024
[Tech Stack]   Python · React.js · Node.js
[GitHub Link]  github.com/Humbledot00  (link to GitHub profile)

[Description]
An AI-driven system that analyzed 500+ educational resources to automatically
generate 500+ mnemonics for improved concept retention. Built a responsive
web interface using React with a Node.js backend for seamless mnemonic
retrieval and interaction.

[Key Highlights — render as pill badges]
→ 500+ Educational Resources Processed
→ AI-Generated Mnemonics
→ React + Node.js Full Stack
→ Optimized Content Pipeline

[Achievement badge — accent green pill]
"2nd Prize — IEEE I2CONECCT 2025"
```

---

#### Project Card 2: Facial Feature-Based Image Sorter

```
[Title]        Facial Feature Image Sorter
[Subtitle]     Automated Photo Classification System
[Date]         August 2024
[Tech Stack]   React.js · Python
[GitHub Link]  github.com/Humbledot00

[Description]
Designed an image sorting system that categorized 1,000+ images into folders
based on facial feature recognition. Identified and grouped photos of 50+
distinct individuals — achieving high accuracy across diverse image sets.

[Key Highlights]
→ 1,000+ Images Classified
→ 50+ Distinct Individuals
→ Automated Facial Recognition
→ High Classification Accuracy
```

---

#### Project Card 3: Sankalp Chatbot

```
[Title]        Sankalp Chatbot
[Subtitle]     AI-Powered NLP Conversational System
[Date]         December 2023
[Tech Stack]   Node.js · Python · NLP
[GitHub Link]  github.com/Humbledot00

[Description]
Built an AI-powered chatbot leveraging NLP and a pretrained Python model
for dynamic conversational responses. Integrated Node.js and Python backend
servers for real-time input handling and context-aware output generation.
Enabled tokenization and adaptive learning for improved personalization.

[Key Highlights]
→ NLP-Powered Conversations
→ Node.js + Python Dual Backend
→ Real-Time Context-Aware Responses
→ Adaptive Learning

[Achievement badge — accent green pill]
"1st Place — Intra-College Hackathon 2023"
```

---

**Project card design:**
- Background: `var(--bg-surface)` — `#181818`
- Hover: `var(--bg-interactive)` — `#1f1f1f`, shadow `var(--shadow-card)`
- Top accent strip: 3px height, `var(--accent)` green, full width, top rounded corners
- Title: 18px weight 700 white
- Subtitle: 14px weight 400 `#b3b3b3`
- Description: 14px weight 400 white, line-height 1.6
- Tech tags: dark pills `#1f1f1f`, `#b3b3b3` text, `border-radius: 9999px`
- Achievement badge: `var(--accent)` green background, `#000000` text, pill shape
- GitHub button: outlined pill, icon + "View on GitHub", links to https://github.com/Humbledot00

---

### Section 6: Achievements

**ID:** `#achievements`
**Layout:** 2-column card grid (desktop) → 1 (mobile)

**Section label:** `"ACHIEVEMENTS"` — 12px uppercase, letter-spacing 2px, accent green
**Heading:** `"Recognition & Awards"` — 32px, weight 700

**Render each as a card with a trophy/medal icon, rank badge, and description:**

```
[Achievement 1]
🥇 1st Place — Primed Hackathon
Mangalore, Karnataka | June 2024
Outperformed 200+ students in a placement-themed competitive hackathon.
[Badge: "1st Place" — accent green pill]

[Achievement 2]
🥈 2nd Prize — IEEE I2CONECCT 2025
Mangalore Institute of Technology & Engineering
Project Competition for BodhiMent: AI-Powered Mnemonics & Smart Learning Hub.
[Badge: "2nd Prize" — outlined pill]

[Achievement 3]
🥇 1st Place — Intra-College Hackathon
Puttur, Karnataka | December 2023
Developed the Sankalp AI Chatbot — ranked 1st among 20+ competing teams.
[Badge: "1st Place" — accent green pill]

[Achievement 4]
🏛️ Branch Figure — CSE-CoRE
Puttur, Karnataka | December 2022 – Present
Led 17+ club activities and 5+ projects involving 250+ participants.
[Badge: "Leadership" — dark pill]

[Achievement 5]
🗄️ IEEE VCET Student Branch — Database Development
Puttur, Karnataka | January 2023 – Present
Developed and maintained a secure database system supporting 217+ student members.
[Badge: "Technical" — dark pill]
```

**Card design:**
- Icon: large emoji or SVG icon, 32px, top-left
- Rank badge: pill — accent green for 1st place, outlined for 2nd, dark for others
- Title: 16px weight 700 white
- Subtitle/venue: 14px weight 400 `#b3b3b3`
- Description: 14px weight 400 white

---

### Section 7: Education

**ID:** `#education`
**Layout:** Single centered card or two-column layout

**Section label:** `"EDUCATION"` — 12px uppercase, letter-spacing 2px, accent green
**Heading:** `"Academic Background"` — 32px, weight 700

**Render as a featured card:**

```
[Institution]  Vivekananda College Of Engineering And Technology
[Location]     Puttur, Karnataka
[Degree]       Bachelor of Engineering — Computer Science
[Duration]     December 2021 – June 2025
[CGPA]         9.21 / 10

[Highlight badges — accent green]
→ CGPA: 9.21
→ Computer Science
→ 2021 – 2025
```

**Card design:**
- Large card, `var(--bg-surface)`, left border: 4px `var(--accent)` green
- Institution: 20px weight 700 white
- Degree: 16px weight 600 `#b3b3b3`
- CGPA stat: rendered prominently — large number `9.21` in accent green, `/10` in `#b3b3b3`
- Duration: 14px weight 400 `#b3b3b3`

---

### Section 8: Contact

**ID:** `#contact`
**Layout:** Centered, single column, max-width 600px

**Section label:** `"CONTACT"` — 12px uppercase, letter-spacing 2px, accent green
**Heading:** `"Get In Touch"` — 32px, weight 700
**Subtext:** `"Open to backend engineering opportunities and interesting collaborations."` — 16px weight 400 `#b3b3b3`

**Contact cards (render as dark pill rows or icon cards):**

```
📧  Email        shreyasrao012@gmail.com
💼  LinkedIn     linkedin.com/in/helloshreyass
🐙  GitHub       github.com/Humbledot00
🌐  Portfolio    helloshreyas.vercel.app
📍  Location     Bengaluru, India
📞  Phone        +91-8762387438
```

**CTA Buttons:**
```
→ "Send Email"         [Primary accent pill — mailto:shreyasrao012@gmail.com]
→ "Download Resume"    [Secondary dark pill — links to resume PDF]
→ "View GitHub"        [Outlined pill — github.com/Humbledot00]
```

**Design notes:**
- Each contact row: icon (accent green) + label (`#b3b3b3`) + value (white), clickable link
- Hover: row background goes to `#1f1f1f`
- Small availability badge: `"Open to Opportunities"` — accent green pill, top of section

---

## 4. Footer

**Layout:** Full-width, `var(--bg-surface)` background, centered content

**Content:**
```
Shreyas M Rao  ·  Backend Software Engineer

[Nav links row]
About · Skills · Experience · Projects · Achievements · Contact

[Social icons row]
LinkedIn · GitHub · Email

© 2025 Shreyas M Rao. Built with React.js
```

**Design:**
- Separator line: 1px `#4d4d4d` above footer
- Text: 14px weight 400 `#b3b3b3`
- Links: hover color `#ffffff`
- Copyright: 12px weight 400 `#b3b3b3`

---

## 5. Animations & Interactions

| Element | Animation |
|---|---|
| Hero heading | Fade-in + slide-up on load, 0.6s ease |
| Hero subtext | Typewriter effect (optional) |
| Nav links | Underline slide-in on hover (accent green) |
| Cards | Fade-in on scroll (IntersectionObserver), staggered 100ms |
| Timeline entries | Slide-in from left on scroll |
| Skill tags | Fade-in staggered on scroll |
| Buttons | Scale `1.02` on hover, `0.98` on active |
| Accent green glow | `box-shadow: 0 0 12px rgba(30,215,96,0.3)` on primary CTA hover |

**Performance rules:**
- Use `will-change: transform` only on animated elements
- Prefer `transform` and `opacity` for animations (GPU-accelerated)
- `prefers-reduced-motion: reduce` — disable all animations for accessibility

---

## 6. Responsive Breakpoints

```css
/* Mobile Small  */ @media (max-width: 425px)  { /* 1 column, compact padding */ }
/* Mobile        */ @media (max-width: 576px)  { /* 1 column, hamburger nav  */ }
/* Tablet        */ @media (max-width: 768px)  { /* 2 column grid            */ }
/* Desktop Small */ @media (max-width: 1024px) { /* full layout, sidebar     */ }
/* Desktop       */ @media (min-width: 1024px) { /* 3 column, full features  */ }
```

**Responsive rules:**
- Hero: font scales from 48px → 32px → 24px
- Section headings: 32px → 24px
- Card grids: 3 col → 2 col → 1 col
- Timeline: left-aligned → top-aligned (mobile)
- Nav: horizontal → hamburger overlay
- Padding: 80px → 48px → 32px per section

---

## 7. Accessibility Rules

- All images: `alt` text required
- Color contrast: ensure all text passes WCAG AA (white on `#181818` passes)
- Focus states: `outline: 2px solid var(--accent)` on all interactive elements
- Semantic HTML: use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Skip to content link: hidden, shown on focus, for keyboard users
- ARIA labels on icon-only buttons (social icons, hamburger)
- `prefers-reduced-motion` support

---

## 8. SEO Optimization (Comprehensive)

> **Agent instruction:** Implement ALL subsections below. SEO must be baked in from the start — not added later. Every item here has a direct impact on Google ranking, LinkedIn/Twitter link previews, and discoverability by recruiters.

---

### 8.1 HTML `<head>` — Full Meta Tag Block

Paste this complete block inside `<head>` in `index.html`:

```html
<!-- ═══════════════════════════════════════════════
     CORE SEO
═══════════════════════════════════════════════ -->
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Shreyas M Rao — Backend Software Engineer | Node.js · Spring Boot · Microservices</title>

<meta name="description" content="Shreyas M Rao is a Backend Software Engineer specializing in scalable microservices, real-time systems, secure authentication, and banking-grade Node.js and Java Spring Boot applications. Based in Bengaluru, India." />

<meta name="keywords" content="Shreyas M Rao, backend software engineer, Node.js developer, Spring Boot engineer, microservices architect, real-time systems, WebSocket developer, Redis BullMQ, Docker AWS, banking backend engineer, Bengaluru software engineer, VCET Puttur, Desk Nine, Java developer India, KYC backend, authentication server, portfolio" />

<meta name="author" content="Shreyas M Rao" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
<link rel="canonical" href="https://helloshreyas.vercel.app" />

<!-- ═══════════════════════════════════════════════
     OPEN GRAPH (Facebook, LinkedIn, WhatsApp previews)
═══════════════════════════════════════════════ -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Shreyas M Rao — Portfolio" />
<meta property="og:title" content="Shreyas M Rao — Backend Software Engineer" />
<meta property="og:description" content="Backend Engineer specializing in scalable microservices, real-time systems, and banking-grade Node.js & Spring Boot applications. Open to backend engineering opportunities." />
<meta property="og:url" content="https://helloshreyas.vercel.app" />
<meta property="og:image" content="https://helloshreyas.vercel.app/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Shreyas M Rao — Backend Software Engineer Portfolio" />
<meta property="og:locale" content="en_IN" />

<!-- ═══════════════════════════════════════════════
     TWITTER / X CARDS
═══════════════════════════════════════════════ -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Shreyas M Rao — Backend Software Engineer" />
<meta name="twitter:description" content="Backend Engineer specializing in scalable microservices, real-time systems, Node.js & Spring Boot. Based in Bengaluru." />
<meta name="twitter:image" content="https://helloshreyas.vercel.app/og-image.png" />
<meta name="twitter:image:alt" content="Shreyas M Rao Portfolio" />
<meta name="twitter:creator" content="@helloshreyass" />

<!-- ═══════════════════════════════════════════════
     FAVICON & APP ICONS
═══════════════════════════════════════════════ -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#1ed760" />

<!-- ═══════════════════════════════════════════════
     PERFORMANCE HINTS
═══════════════════════════════════════════════ -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://github.com" />
<link rel="dns-prefetch" href="https://linkedin.com" />
```

---

### 8.2 JSON-LD Structured Data (Schema.org)

Add this `<script>` block inside `<head>` — this is what Google uses for rich results and Knowledge Panel data:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://helloshreyas.vercel.app/#person",
      "name": "Shreyas M Rao",
      "alternateName": "helloshreyass",
      "url": "https://helloshreyas.vercel.app",
      "image": {
        "@type": "ImageObject",
        "url": "https://helloshreyas.vercel.app/og-image.png",
        "width": 1200,
        "height": 630
      },
      "jobTitle": "Associate Software Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Desk Nine Pvt Ltd",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressCountry": "IN"
        }
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Vivekananda College Of Engineering And Technology",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Puttur",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "email": "shreyasrao012@gmail.com",
      "telephone": "+91-8762387438",
      "sameAs": [
        "https://linkedin.com/in/helloshreyass",
        "https://github.com/Humbledot00",
        "https://helloshreyas.vercel.app"
      ],
      "knowsAbout": [
        "Node.js",
        "Java Spring Boot",
        "Microservices Architecture",
        "Real-Time Systems",
        "WebSockets",
        "Redis",
        "BullMQ",
        "Docker",
        "AWS S3",
        "OAuth2",
        "JWT Authentication",
        "MongoDB",
        "Oracle DB",
        "MySQL",
        "React.js",
        "Backend Engineering",
        "Banking Software",
        "KYC Systems",
        "Distributed Systems"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Bachelor of Engineering in Computer Science",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "CollegeOrUniversity",
            "name": "Vivekananda College Of Engineering And Technology"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://helloshreyas.vercel.app/#website",
      "url": "https://helloshreyas.vercel.app",
      "name": "Shreyas M Rao — Backend Software Engineer Portfolio",
      "description": "Portfolio of Shreyas M Rao, a Backend Software Engineer specializing in scalable microservices, real-time systems, and banking-grade applications.",
      "author": {
        "@id": "https://helloshreyas.vercel.app/#person"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://helloshreyas.vercel.app/#profilepage",
      "url": "https://helloshreyas.vercel.app",
      "name": "Shreyas M Rao — Portfolio",
      "mainEntity": {
        "@id": "https://helloshreyas.vercel.app/#person"
      }
    }
  ]
}
</script>
```

---

### 8.3 OG Image Specification

**Agent instruction:** Generate a static OG image and place it at `/public/og-image.png`.

**Exact specs for the OG image:**

```
Dimensions:   1200 × 630 px
Background:   #121212 (near black)
Left panel:   Name "Shreyas M Rao" in white, 64px bold
              Role "Backend Software Engineer" in #1ed760 (accent green), 28px
              Tags row: Node.js · Spring Boot · Docker · AWS — #b3b3b3, 18px
              Social: github.com/Humbledot00 · linkedin.com/in/helloshreyass
Right panel:  Tech stack icons or terminal code snippet visual
Bottom bar:   helloshreyas.vercel.app — accent green, 16px
Border:       4px left strip in #1ed760
```

Use a tool like `@vercel/og`, `canvas`, or `sharp` in Node.js to generate this programmatically, OR create it as a static PNG in Figma/Canva following the above spec. Store at `/public/og-image.png`.

---

### 8.4 `robots.txt`

Create `/public/robots.txt`:

```txt
User-agent: *
Allow: /

# Disallow nothing — this is a public portfolio, full crawling is desired

Sitemap: https://helloshreyas.vercel.app/sitemap.xml
```

---

### 8.5 `sitemap.xml`

Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://helloshreyas.vercel.app/</loc>
    <lastmod>2025-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://helloshreyas.vercel.app/#about</loc>
    <lastmod>2025-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://helloshreyas.vercel.app/#experience</loc>
    <lastmod>2025-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://helloshreyas.vercel.app/#projects</loc>
    <lastmod>2025-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://helloshreyas.vercel.app/#contact</loc>
    <lastmod>2025-07-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

### 8.6 `site.webmanifest` (PWA + Search)

Create `/public/site.webmanifest`:

```json
{
  "name": "Shreyas M Rao — Backend Software Engineer",
  "short_name": "Shreyas M Rao",
  "description": "Portfolio of Shreyas M Rao, Backend Software Engineer specializing in Node.js, Spring Boot, and Microservices.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#121212",
  "theme_color": "#1ed760",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

### 8.7 Semantic HTML SEO Rules

**Agent instruction:** Every section must use correct semantic HTML. This directly affects how Google reads and indexes the page.

```html
<!-- Page structure -->
<body>
  <header role="banner">          <!-- Navbar -->
  <main role="main">
    <section id="hero"            aria-label="Introduction">
    <section id="about"           aria-label="About Shreyas M Rao">
    <section id="skills"          aria-label="Technical Skills">
    <section id="experience"      aria-label="Work Experience">
    <section id="projects"        aria-label="Featured Projects">
    <section id="achievements"    aria-label="Achievements and Awards">
    <section id="education"       aria-label="Education">
    <section id="contact"         aria-label="Contact Information">
  </main>
  <footer role="contentinfo">
</body>

<!-- Heading hierarchy — NEVER skip levels -->
<h1>Shreyas M Rao</h1>                    <!-- ONE h1 only — in Hero -->
<h2>Work Experience</h2>                  <!-- Section headings -->
<h3>Core VCIP Platform</h3>               <!-- Sub-section headings -->
<h4>VCIP Architecture Modernization</h4>  <!-- Achievement titles -->
```

---

### 8.8 Performance SEO (Core Web Vitals)

Google ranks pages partly on Core Web Vitals. Implement all of the following:

**LCP (Largest Contentful Paint) — target < 2.5s:**
- Preload the hero heading font: `<link rel="preload" as="font" href="..." crossorigin />`
- No render-blocking scripts — all JS at bottom or `defer`/`async`
- Hero section renders with plain CSS, no JS dependency

**CLS (Cumulative Layout Shift) — target < 0.1:**
- All images must have explicit `width` and `height` attributes
- Reserve space for dynamically loaded content with `min-height`
- No late-loading fonts that shift text (use `font-display: swap`)

**FID / INP (Interaction to Next Paint) — target < 200ms:**
- Debounce scroll event listeners
- Use CSS transitions instead of JS animations where possible
- Lazy-load all non-hero images: `<img loading="lazy" />`

**Implementation checklist for the agent:**
```html
<!-- Add to all non-hero images -->
<img src="..." alt="..." loading="lazy" width="400" height="300" />

<!-- Add to index.html <head> for font swap -->
<style>
  @font-face {
    font-family: 'Inter';
    font-display: swap;
  }
</style>

<!-- All <script> tags -->
<script src="..." defer></script>
```

---

### 8.9 Content SEO — Keyword Placement Rules

**Agent instruction:** Place the following keywords naturally in the page content. Do NOT stuff — integrate them into existing copy.

| Keyword | Target placement |
|---|---|
| `Shreyas M Rao` | `<h1>`, page title, meta description, JSON-LD |
| `Backend Software Engineer` | Hero subtitle, About section, title tag |
| `Node.js developer` | Skills section, Experience section |
| `Spring Boot` | Skills section, Auth Server experience bullet |
| `microservices` | About section, Experience section |
| `Bengaluru` | About card, JSON-LD, Contact section |
| `real-time systems` | Hero subtext, About section |
| `Docker AWS` | Skills section, Experience bullets |
| `banking backend` | About section, Experience heading |
| `WebSocket` | Skills section, VCIP experience bullet |
| `Redis BullMQ` | Skills section, Equitas Bank experience bullet |
| `VCET Puttur` | Education section |
| `helloshreyas.vercel.app` | Footer, canonical tag, OG url |

---

### 8.10 Link SEO — External & Internal

**External links (add `rel` attributes):**
```html
<!-- LinkedIn — follow (your own profile) -->
<a href="https://linkedin.com/in/helloshreyass" rel="noopener noreferrer" target="_blank">LinkedIn</a>

<!-- GitHub — follow (your own profile) -->
<a href="https://github.com/Humbledot00" rel="noopener noreferrer" target="_blank">GitHub</a>

<!-- External companies — add noopener only, Google decides follow/nofollow -->
<a href="https://desknine.com" rel="noopener noreferrer" target="_blank">Desk Nine</a>
```

**Internal anchor links (smooth scroll):**
```html
<!-- All nav links must use anchor IDs for single-page crawlability -->
<a href="#about">About</a>
<a href="#experience">Experience</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
```

---

### 8.11 Vercel Deployment SEO Config

Create `vercel.json` in project root:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/og-image.png",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)\\.(js|css|png|jpg|svg|woff2)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

### 8.12 SEO Checklist — Agent Must Verify Before Done

```
[ ] <title> tag includes name + role + 2 key technologies (under 60 chars)
[ ] <meta name="description"> is 140–160 characters, includes name + role + location
[ ] Canonical URL set to https://helloshreyas.vercel.app
[ ] robots.txt created at /public/robots.txt
[ ] sitemap.xml created at /public/sitemap.xml
[ ] JSON-LD Person schema added to <head>
[ ] og:image exists at /public/og-image.png (1200×630px)
[ ] og:title, og:description, og:url, og:image all populated
[ ] twitter:card set to summary_large_image
[ ] theme-color meta set to #1ed760
[ ] site.webmanifest created
[ ] One <h1> only, in the Hero section
[ ] All section <h2> headings contain target keywords
[ ] All images have alt text + loading="lazy" + width/height
[ ] All external links have rel="noopener noreferrer"
[ ] All <script> tags use defer attribute
[ ] font-display: swap applied to Inter font
[ ] vercel.json created with security headers + cache rules
[ ] Core Web Vitals: no render-blocking resources in <head>
```

---

## 9. Key Design Rules — DO's and DON'Ts

### DO
- Use `#121212` as the deepest page background — nothing goes darker
- Apply accent green (`#1ed760`) ONLY on CTAs, active nav links, timeline dots, card border accents, CGPA stat, and achievement badges
- Use `border-radius: 9999px` on ALL buttons — pill shape always
- Apply `text-transform: uppercase` + `letter-spacing: 1.4px` on all button labels
- Use `#b3b3b3` for secondary text (subtitles, dates, meta info)
- Apply `box-shadow: rgba(0,0,0,0.3) 0px 8px 8px` on card hover
- Keep spacing tight and content-dense — this is an app portfolio, not a blog

### DON'T
- Don't use accent green as a background fill on large areas
- Don't use square buttons — pill geometry is mandatory
- Don't use light backgrounds (`#fff`, `#f0f0f0`) anywhere
- Don't use thin shadows — shadows must be heavy (0.3–0.5 opacity) to be visible on dark
- Don't add extra brand colors — only green + achromatic grays
- Don't make the UI visually noisy — the content is the star, the design recedes

---

## 10. File Structure (React)

```
/src
  /components
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Achievements.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  /styles
    globals.css       ← CSS variables, reset, base styles
    animations.css    ← keyframes, transitions
  App.jsx
  main.jsx
/public
  resume.pdf          ← Shreyas_MRao_Resume.pdf for download
  favicon.ico
index.html
```

---

## 11. Quick Agent Reference Card

```
Name:         Shreyas M Rao
Role:         Associate Software Engineer (Backend)
Company:      Desk Nine Pvt Ltd, Bengaluru
Email:        shreyasrao012@gmail.com
LinkedIn:     linkedin.com/in/helloshreyass
GitHub:       github.com/Humbledot00
Portfolio:    helloshreyas.vercel.app
Phone:        +91-8762387438
College:      VCET Puttur — B.E. CSE — CGPA 9.21
Duration:     Dec 2021 – Jun 2025

Primary color:   #1ed760   (accent green)
Background:      #121212   (base)
Surface:         #181818   (cards)
Text:            #ffffff   (primary)
Text muted:      #b3b3b3   (secondary)

Sections order:  Hero → About → Skills → Experience → Projects → Achievements → Education → Contact → Footer
```
