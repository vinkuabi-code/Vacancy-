# Vacancy Walla

A lightweight Next.js 15 demo for a government job portal with Tailwind CSS and Firebase Firestore.

## Getting started

1. Copy `.env.example` to `.env.local` and fill in your Firebase values.
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Project structure

- `app/` — App Router pages and layout
- `components/` — Reusable UI components
- `lib/firebase.ts` — Firebase initialization
- `hooks/useJobs.ts` — Firestore vacancy loader
- `styles/globals.css` — global Tailwind styling
