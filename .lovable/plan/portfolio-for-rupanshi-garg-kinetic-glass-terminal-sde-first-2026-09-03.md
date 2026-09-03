# Portfolio for Rupanshi Garg — Kinetic Glass Terminal, SDE-first

A one-page recruiter-facing portfolio built from your resume, positioned to get you shortlisted for **Software Development Engineer (SDE)** roles first, with your AI/DevOps work as supporting depth.

## Design
- Dark "kinetic glass terminal" aesthetic: deep navy ink background, cyan + pink accents, glassmorphic panels with clipped corners, subtle grid lines, Inter + Space Grotesk + Space Mono fonts.
- Award-caliber art direction: a bold editorial hero composition, asymmetric project rhythm, crisp typographic hierarchy, and a visible systems-thinking motif that makes the SDE positioning memorable without becoming decorative noise.
- Restrained but intentional motion: status pulses, scroll-aware section reveals, project hover transitions, and a refined cursor/terminal signal treatment with reduced-motion fallbacks.
- Every visual flourish must preserve recruiter scanability: high contrast, fast entry to work, no autoplay media, and no interaction required to understand the resume-backed facts.

## Content strategy (SDE-first reframe)
- Hero headline positions you as a **Software Development Engineer** who ships full-stack systems — DSA + engineering depth first, FinOps/AI as proof of range. The opening viewport should feel like a confident personal product, not a template: name, role, proof, and featured work are immediately legible.
- Sections in recruiter-scan order:
  1. **Hero** — name, "Software Development Engineer · Available 2026" badge, resume-backed summary, CTA (View work / email), live status card for current Allcognix build.
  2. **Tech marquee** — Java, Python, React, TypeScript, Spring Boot, FastAPI, PostgreSQL, Docker, LangGraph, etc.
   3. **Selected work** — 4 cards with editorial variation rather than a uniform card wall: CI/CD Pipeline Visualizer as the lead case study, followed by E-Commerce Platform (Flipkart clone), FinOps Multi-Agent Chatbot, and Chess Crypt patent. Each gets a concise problem / build / result framing, with copy strictly from the resume and no invented metrics.
  4. **Proof strip** — 800+ problems, Codeforces Specialist 1510, CodeChef 5★ 2074, global rank 1081/40k (top 2.7%).
  5. **Experience** — Allcognix (Jun 2026–now), GeeksForGeeks Problem Setter (Aug–Dec 2025), recognition callout (patent, Ideat-a-thon 2nd runner-up).
  6. **Education** — B.Tech CSE Chandigarh University (2023–27, GPA 7.3), DAV Public School 85%.
  7. **Contact** — email, phone, LinkedIn / GitHub / YouTube links, "Download resume" CTA.

## Content integrity
- Only resume-supported facts. No invented metrics, logos, or testimonials.
- Missing project/profile URLs → clearly marked editable placeholders (e.g. `[add GitHub URL]`).
- Your uploaded resume PDF becomes a downloadable asset so the "Download resume" button works immediately.

## Technical
- Replace `src/routes/index.tsx` placeholder with the full one-page portfolio (TanStack Start + Tailwind v4).
- Theme tokens in `src/styles.css` (ink, accent, warm, ice; Space Grotesk/Inter/Space Mono via Google Fonts `<link>` in `__root.tsx`).
- Components split under `src/components/portfolio/` (Nav, Hero, Marquee, Work, Proof, Experience, Contact).
- Unique SEO head() on index: title, description, og:title/description, og:type, twitter:card.
- Resume PDF registered via `lovable-assets` pointer and linked from the Download button.
- Fully responsive; mobile nav collapses to CTA.
- Quality bar: keyboard-accessible navigation and controls, visible focus states, semantic headings, reduced-motion support, responsive checks at mobile/tablet/desktop widths, and a final browser pass for overflow, contrast, and interaction polish.
