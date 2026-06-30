# Lumina Design Co. | Digital Agency Portfolio

A modern, high-performance design agency homepage built as a Next.js Developer Internship evaluation task. Designed with a focus on fluid animations, strict accessibility standards, and a flawless dark/light mode toggle.

**[🔴 View Live Deployment Here](https://lumina-agency-eta.vercel.app/)**

## Tech Stack

| Layer      | Technology                  |
| ---------- | --------------------------- |
| Framework  | Next.js 15 (App Router)     |
| Language   | TypeScript                  |
| Styling    | Tailwind CSS v4             |
| Animations | Framer Motion               |
| Dark Mode  | next-themes                 |
| Images     | next/image (WebP optimized) |
| Fonts      | Google Fonts — Inter & Syne |

## Core Features

- **4 Responsive Sections:** Hero, Services, Portfolio, Contact
- **Dynamic Theming:** Dark / Light mode toggle with persistent system preference
- **Interactive UI:** Glassmorphism navbar (scroll-aware) and mobile hamburger menu
- **Advanced Animations:** Framer Motion staggered entrances and scroll-triggered reveals
- **Performant Filtering:** Portfolio category filter utilizing `<AnimatePresence>` for smooth DOM transitions
- **Form Handling:** Contact form with client-side validation and simulated success state
- **SEO & Accessibility:** OpenGraph metadata, semantic HTML, and correct heading hierarchy across all viewports
- **Fully Responsive:** Flawless scaling from 375px mobile to 1440px+ ultra-wide

## Architecture & Design Decisions

### 1. Advanced Theming & CSS Architecture

The UI doesn't just invert colors; it fundamentally shifts styling techniques between modes.

- **Dark Mode:** Utilizes absolute-positioned, heavy-blurred mesh gradients ("aurora" effect) and subtle border glows for a premium, high-contrast aesthetic.
- **Light Mode:** Strips away the ambient glows in favor of stark, crisp whites (`bg-stone-50`), utilizing subtle drop shadows to create depth (transitioning from glassmorphism to physical elevation).

### 2. High-End Micro-interactions

Leveraged Framer Motion to build an interface that feels tactile without compromising load speeds:

- Editorial-style portfolio grid with synchronized parent-card elevation (`-translate-y-1`) and child-image scaling (`scale-105`) on hover.
- Solved mobile UX constraints by keeping text permanently visible (Editorial Layout) rather than relying on hover-states, which fail on touch devices.

### 3. Performance Optimization

- **Asset Management:** All portfolio photography was compressed and converted to `.webp` format.
- **LCP (Largest Contentful Paint):** Implemented the Next.js `<Image />` component with precise `sizes` attributes and `fill` properties to prevent cumulative layout shift (CLS) and ensure instant loading.

## Local Setup

```bash
git clone [https://github.com/vidyadhar1119/design-agency.git](https://github.com/vidyadhar1119/design-agency.git)
cd design-agency
npm install
npm run dev
```
