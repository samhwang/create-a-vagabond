# Quiz Site

## Parts

This repo currently has 3 parts:

- [`client`](./client/README.md) - Frontend React App bootstrapped with Vite.
- [`backend`](./backend/README.md) - Backend logic: Database stuff and tRPC router creation goes here.
- Database: This project's database currently lives in Neon DB.
  - Or locally, it can also be hosted in Docker.

---

## Requirements

### Tools

- Node v16
  - PNPM v7
- Docker
- Netlify CLI

### Accounts

- [Netlify](https://app.netlify.com) - For hosting the site
- [Neon DB](https://neon.tech) - Serverless Postgres

---

## Setup

### Environment Variables

- Copy an `backend/.env` file out from `backend/.env.sample`.

#### Running with Neon

- After creating a Neon Account, create a new project in the [Neon console](https://console.neon.tech).
- Copy the connection string. This will be the `DATABASE_URL` in the `.env` file.
- Create a second DB in the same project. The new connection string will be the `SHADOW_DATABASE_URL`.

#### Running with Docker

- `DATABASE_URL` is `postgress://example:example@localhost:5432/quiz-db?pgbouncer=true`.
- `SHADOW_DATABASE_URL` is blank.

### Install Scripts

```shell
pnpm install
docker compose up -d db
pnpm run dev
```
