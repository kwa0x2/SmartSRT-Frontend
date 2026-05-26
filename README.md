# SmartSRT Frontend

[![Next.js 14](https://img.shields.io/badge/Next.js-14-black.svg?logo=next.js)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38BDF8.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20TR-blueviolet.svg)](./messages)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A production-ready frontend for SmartSRT — the AI-powered service that turns audio and video files into accurate `.srt` subtitles. Built with Next.js, TypeScript and Tailwind CSS.

---

## Overview

SmartSRT Frontend is the web client of SmartSRT. Users upload media files, monitor transcription progress, manage their subscription and download the generated subtitles — all through a fast, responsive UI. It talks to the [SmartSRT Backend](https://github.com/kwa0x2/SmartSRT-Backend) over REST and integrates Paddle for in-app billing.

## Screenshots

### Main
![Main](https://smartsrt.s3.eu-west-3.amazonaws.com/assets/main.png)

### Login
![Login](https://smartsrt.s3.eu-west-3.amazonaws.com/assets/login.png)

### Dashboard
![Dashboard](https://smartsrt.s3.eu-west-3.amazonaws.com/assets/dashboard.png)

### Profile
![Profile](https://smartsrt.s3.eu-west-3.amazonaws.com/assets/profile.png)

### Subscription
![Subscription](https://smartsrt.s3.eu-west-3.amazonaws.com/assets/subscription.png)

## Features

- **Drag-and-drop media uploads** with `react-dropzone`
- **Real-time job status & quota tracking**
- **Authentication** via NextAuth (Google + GitHub OAuth, email/password)
- **In-app billing** powered by [Paddle.js](https://www.paddle.com/)
- **Internationalization** (English & Turkish) with `next-intl`
- **Phone input & verification** (libphonenumber + OTP)
- **Dark mode** via `next-themes`
- **Responsive UI** built with Tailwind CSS, Radix UI and shadcn/ui
- **State management** with Zustand & Jotai
- **Data fetching** with SWR
- **Forms & validation** with React Hook Form + Zod

## Tech Stack

| Layer          | Technology                                                      |
|----------------|-----------------------------------------------------------------|
| Framework      | [Next.js 14](https://nextjs.org/) (App Router)                  |
| Language       | TypeScript 5                                                    |
| UI             | Tailwind CSS, Radix UI, shadcn/ui, Iconify                      |
| State          | Zustand, Jotai                                                  |
| Data Fetching  | SWR, Axios                                                      |
| Forms          | React Hook Form + Zod                                           |
| Auth           | NextAuth (v5 beta) — Google, GitHub                             |
| Billing        | Paddle.js                                                       |
| i18n           | next-intl (EN, TR)                                              |
| Animations     | Motion (Framer Motion successor)                                |
| Code Display   | Prism + react-syntax-highlighter, KaTeX                         |

## Getting Started

### Prerequisites

- Node.js 18+ and npm / pnpm / yarn / bun
- A running instance of the [SmartSRT Backend](https://github.com/kwa0x2/SmartSRT-Backend)
- A Paddle sandbox account (for billing)

### 1. Clone the repository

```bash
git clone https://github.com/kwa0x2/SmartSRT-Frontend.git
cd SmartSRT-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.development` (or `.env.local`) file in the project root:

```env
# NextAuth — generate with: npx auth secret
AUTH_SECRET=

# URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:9000/api/v1

# Cookies / sessions
COOKIE_NAME=sid
AUTHJS_SESSION_TOKEN=authjs.session-token
DOMAIN_NAME=localhost

# Quotas (seconds / month) — keep in sync with the backend
NEXT_PUBLIC_FREE_UPLOAD_LIMIT_SECONDS=600
NEXT_PUBLIC_PRO_UPLOAD_LIMIT_SECONDS=4500

# Paddle
NEXT_PUBLIC_PADDLE_TOKEN=
NEXT_PUBLIC_PADDLE_PRICE_ID=
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build
npm run lint     # run ESLint
```

## Internationalization

The app ships with English (`en`) and Turkish (`tr`) translations under `messages/`. Routes are locale-prefixed under `app/[locale]/` and handled by [`next-intl`](https://next-intl-docs.vercel.app/). To add a new language, drop a `messages/<locale>.json` file and register it in the `i18n/` config.

## Project Structure

```
SmartSRT-Frontend/
├── app/
│   ├── [locale]/        # Locale-prefixed routes (App Router)
│   ├── api/             # Route handlers
│   └── fonts/           # Custom fonts
├── action/              # Server actions
├── components/          # Reusable UI components
├── config/              # App-level config
├── hooks/               # Custom React hooks
├── i18n/                # next-intl configuration
├── lib/                 # Utilities & helpers
├── messages/            # i18n translation files (en, tr)
├── providers/           # Context providers (theme, auth, paddle, …)
├── schemas/             # Zod validation schemas
├── types/               # Shared TypeScript types
├── public/              # Static assets
├── middleware.ts        # Auth & i18n middleware
└── next.config.mjs      # Next.js configuration
```

## Related Repositories

- [SmartSRT Backend](https://github.com/kwa0x2/SmartSRT-Backend) — Go + Gin + RabbitMQ + AWS
- [SmartSRT Lambda](https://github.com/kwa0x2/SmartSRT-Lambda) — transcription Lambda function

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.
