# Windows XP Personal Portfolio

A personal portfolio website that faithfully recreates the Windows XP desktop experience. Every detail, from the Luna title bar gradients to the Start menu and taskbar clock, is designed to feel like sitting at a classic XP desktop.

Built as a tribute to the operating system that sparked a generation of developers.

**[chilman.co.nz](https://chilman.co.nz)**

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 15 (Pages Router) |
| State | Redux Toolkit |
| Language | TypeScript |
| Styling | CSS Modules, xp.css |
| Interactivity | react-draggable |
| Contact | mailto: link (opens default email client) |
| Hosting | Cloudflare Pages |

## Features

- **XP Luna theme** — title bars, window chrome, taskbar, Start menu
- **Draggable, resizable windows** — multi-window desktop with z-index management
- **Start menu** — program list, quick links, pinned items, log off / shut down
- **Taskbar** — real-time clock, window tabs, system tray styling
- **Portfolio sections** — About Me, Projects, Skills, Experience, Contact
- **Space Cadet Pinball** — playable via WebAssembly (iframe embed)
- **XP-style progress bars** — skill proficiency visualisation

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Cloudflare Pages

```bash
npx next build
npx vercel build --yes
cmd.exe /c "npx @cloudflare/next-on-pages --skip-build"
npx wrangler pages deploy .vercel/output/static --project-name=winxpsite --branch=main
```

`@cloudflare/next-on-pages` must run via `cmd.exe /c` on Windows; it spawns `npx` internally and fails under Git Bash.

## Credits

**Original project** — This portfolio is a fork of **[firwer/winxpsite](https://github.com/firwer/winxpsite)**. The XP desktop shell (window management, Start menu, taskbar, draggable windows, desktop icons) was built by firwer. All subsequent customisation, rebranding, and feature work is mine.

**Libraries and inspiration:**
- [xp.css](https://github.com/botoxparty/XP.css) — CSS pre-styled XP components (buttons, scrollbar)
- [ShizukuIchi/winXP](https://github.com/ShizukuIchi/winXP) — General inspiration and Start menu styling
- [alula/SpaceCadetPinball](https://github.com/alula/SpaceCadetPinball) — WebAssembly port of 3D Pinball Space Cadet

## Licence

MIT
