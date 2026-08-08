# JustGo Landing Page

SSR-first marketing landing page built with Next.js App Router, TypeScript, React 19 and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Structure

- `app/`: root layout, metadata and page composition
- `components/`: reusable layout, UI, cards and section components
- `data/`: structured JSON content for every section
- `lib/`: shared utilities
- `public/images/`: landing illustrations and blog artwork

## Notes

- Page content is JSON-driven. Components receive props and avoid embedded business copy.
- `next/image` is used for all artwork. The hero image is marked as priority.
- Theme colors and shadows are centralized in CSS variables inside [app/globals.css](/C:/Users/HP/OneDrive/Desktop/Assignment_Task/SDE-1_Simpililern/app/globals.css).
- The page is implemented with server components by default. No client component was required for the current design.

## Quality

- Semantic sections and heading hierarchy
- Visible focus styles
- Responsive layout from mobile through large desktop
- SEO metadata configured in [app/layout.tsx](/C:/Users/HP/OneDrive/Desktop/Assignment_Task/SDE-1_Simpililern/app/layout.tsx)
