# chilman.co.nz Personal Website

Windows XP-themed personal portfolio site built with Next.js Pages Router, deployed to Cloudflare Pages.

## Architecture

```
Next.js 15 (Pages Router) → @cloudflare/next-on-pages → Cloudflare Pages
                                                               └──── chilman.co.nz
```

- **Framework:** Next.js 15.5.19 (Pages Router, not App Router)
- **Styling:** `xp.css` (Windows XP UI kit) + CSS Modules
- **State:** Redux Toolkit (`src/redux/tabSlice.tsx`) — manages open windows, z-ordering, focus
- **Programs:** `src/programs/*` — each "app" is a component rendered inside `WinForm`
- **Window manager:** `components/WinForm/` — draggable, resizable, minimisable XP-style windows via `react-draggable`
- **API:** Single serverless function at `src/pages/api/contact.ts` (sends email)
- **Tests:** Jest + React Testing Library (15 tests, 4 suites)
- **Font:** Tahoma (local WOFF, loaded via `next/font/local`)

### Key files

| Path | Purpose |
|------|---------|
| `src/pages/index.tsx` | Main desktop — icons, window rendering, app dispatch |
| `src/pages/_app.tsx` | Redux Provider, Tahoma font, Vercel Analytics |
| `components/WinForm/WinForm.tsx` | Window chrome — drag, resize, minimise, maximise, close |
| `components/StartBar/StartBar.tsx` | Taskbar with Start menu |
| `src/redux/tabSlice.tsx` | Window state: add/remove/minimise/maximise/focus |
| `src/appData/index.tsx` | App registry — maps IDs to programs |
| `src/types/index.tsx` | TypeScript types (App enum, Tab interface, etc.) |

## Commands

```bash
npm run dev          # Dev server on port 3000
npm run build        # Next.js production build → .next
npm run test         # Jest (15 tests)
```

## Deploy to Cloudflare

```bash
# 1. Build Next.js
npx next build

# 2. Build Vercel output format
npx vercel build

# 3. Transform for Cloudflare (MUST run via cmd.exe on Windows — Git Bash fails with spawn npx ENOENT)
cmd.exe /c "npx @cloudflare/next-on-pages --skip-build"

# 4. Deploy
npx wrangler pages deploy .vercel/output/static --project-name=winxpsite --branch=main
```

**Windows caveat:** `@cloudflare/next-on-pages` spawns `npx vercel build` internally and fails with `spawn npx ENOENT` under Git Bash / POSIX shells. Solution: run step 3 via `cmd.exe /c`, or use `--skip-build` and run steps 1-2 separately first.

**Cloudflare project:** `winxpsite` (ID: `8544e301-c919-4fd5-82a1-8581c05d98af`)  
**Domain:** `chilman.co.nz`  
**Production branch:** `main`  
**Account:** Jayson@chilman.co.nz's Account (`9f2163c2cca3d9f0e7c72b891aa06e19`)

## Known issues

- `@vercel/analytics` loads `/_vercel/insights/script.js` which 404s on Cloudflare Pages (Vercel-only script). Harmless — doesn't break the site.
- React hydration warnings on production build (non-critical)
