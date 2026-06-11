# Windows XP Personal Portfolio

A personal portfolio website that faithfully recreates the Windows XP desktop experience. Every detail, from the Luna title bar gradients to the Start menu and taskbar clock, is designed to feel like sitting at a classic XP desktop.

Built as a tribute to the operating system that sparked a generation of developers.

**[chilman.co.nz](https://chilman.co.nz)** — deployed on Vercel.

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 15 (Pages Router) |
| State | Redux Toolkit |
| Language | TypeScript |
| Styling | CSS Modules, xp.css |
| Interactivity | react-draggable |
| Email | Microsoft Graph API (M365) |
| Hosting | Vercel |

## Features

- **XP Luna theme** — title bars, window chrome, taskbar, Start menu
- **Draggable, resizable windows** — multi-window desktop with z-index management
- **Start menu** — program list, quick links, pinned items, log off / shut down
- **Taskbar** — real-time clock, window tabs, system tray styling
- **Portfolio sections** — About Me, Projects, Skills, Contact form
- **Space Cadet Pinball** — playable via WebAssembly (iframe embed)
- **XP-style progress bars** — skill proficiency visualisation

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Email Delivery

The contact form sends messages through Microsoft 365 using the Graph API. To enable:

### 1. Register an app in Entra ID

1. Go to **Entra ID** → **App registrations** → **New registration**
2. Name it (e.g. "Portfolio Contact Form"), register single-tenant
3. Note the **Application (client) ID** and **Directory (tenant) ID**

### 2. Grant API permissions

1. Under **API permissions** → **Add a permission** → **Microsoft Graph** → **Application permissions**
2. Add **Mail.Send**
3. Click **Grant admin consent**

### 3. Create a client secret

1. Under **Certificates & secrets** → **New client secret**
2. Copy the secret value (shown only once)

### 4. Set environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```
AZURE_TENANT_ID=your-tenant-id
AZURE_CLIENT_ID=your-client-id
AZURE_CLIENT_SECRET=your-client-secret
FROM_EMAIL=hello@chilman.co.nz
TO_EMAIL=hello@chilman.co.nz
```

`FROM_EMAIL` must be a licensed mailbox in the tenant. `TO_EMAIL` is where contact form messages land.

## Deployment

The site deploys to Vercel with zero-config. Set the same five environment variables in your Vercel project settings.

## Credits

- [xp.css](https://github.com/botoxparty/XP.css) — CSS pre-styled XP components (buttons, scrollbar)
- [ShizukuIchi/winXP](https://github.com/ShizukuIchi/winXP) — General inspiration and Start menu styling
- [alula/SpaceCadetPinball](https://github.com/alula/SpaceCadetPinball) — WebAssembly port of 3D Pinball Space Cadet

## Licence

MIT
