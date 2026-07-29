# Swami Vivekanand Sr. Sec. School Website

A complete, professional multi-page school website for **Swami Vivekanand Sr. Sec. School** built with React, Vite, and Tailwind CSS.

## Run & Operate

- **School website (frontend):** `pnpm --filter @workspace/school-website run dev` — Vite dev server
- **API server:** `pnpm --filter @workspace/api-server run dev` — Express 5 API (port 8080)
- `pnpm install` — install all workspace dependencies
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + shadcn/ui components + Wouter (routing)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (configured but not yet used by the frontend)
- Validation: Zod, drizzle-zod
- API codegen: Orval (from OpenAPI spec)

## Where things live

- `artifacts/school-website/` — React frontend (all pages, components, styles)
  - `src/pages/` — one file per page (home, about, academics, etc.)
  - `src/components/` — Navbar, Footer, and UI components
  - `src/index.css` — Tailwind theme tokens (navy blue + orange brand colors)
- `artifacts/api-server/` — Express API server
- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth for API contracts)
- `lib/api-client-react/` — auto-generated React Query hooks
- `lib/api-zod/` — auto-generated Zod schemas

## Pages

- `/` — Home (hero, stats, Why Choose Us, Principal's Message preview, Facilities preview, Gallery preview, CTA)
- `/about` — About Us (school info, Vision & Mission, Infrastructure)
- `/academics` — Academics (Curriculum, Pre-Primary through Senior Secondary)
- `/principals-message` — Principal's Message
- `/facilities` — Facilities (Library, Labs, Sports, Transport, Smart Classrooms)
- `/gallery` — Gallery (image grid, placeholder images)
- `/admissions` — Admissions (process, fee structure, enquiry form)
- `/contact` — Contact Us

## Brand

- School name: Swami Vivekanand Sr. Sec. School
- Tagline: "Learn Today, Lead Tomorrow"
- Primary: Navy Blue (#0B2545)
- Accent: Orange (#F5821F)
- Placeholder spots exist for: school logo (navbar + footer), hero banner photo, principal's photo, gallery images

## Architecture decisions

- Wouter used for client-side routing (lightweight, no React Router overhead)
- All pages are placeholder-ready — photos and real content can be dropped in without structural changes
- API server is scaffolded but the school website currently runs fully client-side (no API calls yet)

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Run `pnpm install` from the workspace root before starting workflows after a fresh clone/import
- The API server builds before starting (`pnpm run build` then `pnpm run start`); build output goes to `artifacts/api-server/dist/`
