# Quiz Site

## Parts

This repo currently has 3 parts:

- [`client`](./client/README.md) - Frontend React App bootstrapped with Vite.
- [`backend`](./backend/README.md) - Backend logic: Database stuff and tRPC router creation goes here.
  - This will then be served with CloudFlare Pages Function under `functions`.
- Database: This project's database currently lives in Neon DB, and served to the edge with Prisma Data Proxy.

---

## Requirements

### Tools

- Node v16
  - PNPM v7
- Wrangler CLI

### Accounts

- [Cloudflare Pages](https://cloudflare.com) - For hosting the site
- [Neon DB](https://neon.tech) - Serverless Postgres
- [Prisma Data Platform](https://cloud.prisma.io) - Needed for the Data Proxy to use with Edge Runtime

---

## Setup

### Environment Variables

- Copy an `.env` file out from `.env.sample`.
- After creating a Neon Account, create a new project in the [Neon console](https://console.neon.tech).
- Copy the connection string. This will be the `DATABASE_URL` in the `.env` file.
- Create a second DB in the same project. The new connection string will be the `SHADOW_DATABASE_URL`.
- Create a Proxy project in [Prisma console](https://cloud.prisma.io/projects), and link the `DATABASE_URL` into the
project.
- Create a connection string, this will be the `DATA_PROXY_URL`.

### Install Scripts

```shell
pnpm install
pnpm run dev
```
