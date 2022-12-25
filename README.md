# Quiz Site

## Parts

This repo currently has 3 parts:

- [`client`](./client/README.md) - Frontend React App bootstrapped with Vite.
- [`backend`](./backend/README.md) - Backend logic: Database stuff and tRPC router creation goes here.
- Database: This project's database currently lives in Neon DB.

---

## Requirements

### Tools

- Node v16
  - PNPM v7
- Netlify CLI

### Accounts

- [Netlify](https://app.netlify.com) - For hosting the site
- [Neon DB](https://neon.tech) - Serverless Postgres

---

## Setup

### Environment Variables

- Copy an `backend/.env` file out from `backend/.env.sample`.
- After creating a Neon Account, create a new project in the [Neon console](https://console.neon.tech).
- Copy the connection string. This will be the `DATABASE_URL` in the `.env` file.
- Create a second DB in the same project. The new connection string will be the `SHADOW_DATABASE_URL`.

### Install Scripts

```shell
pnpm install
pnpm run dev
```
