# Quiz Site

## Prerequisite

- Node v16
  - PNPM v7
- Wrangler CLI

## Install

```shell
pnpm install
pnpm run dev
```

---

## Parts

This repo currently has 3 parts:

- [`client`](./client/README.md) - Frontend React App bootstrapped with Vite.
- `backend` - Backend logic: Database stuff and tRPC router creation goes here.
  - This will then be served with CloudFlare Pages Function under `functions`.
  - Created with Zod and tRPC.
