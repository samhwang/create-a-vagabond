# Create a Vagabond

## Parts

This repo currently has 3 parts:

- [`client`](./client/README.md) - Frontend React App bootstrapped with Vite.
- [`backend`](./backend/README.md) - Backend logic: Database stuff and tRPC router creation goes here.
- Database: This project's database currently lives in PlanetScale.
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
- [PlanetScale](https://app.planetscale.com) - Serverless MySQL

---

## Setup

### Environment Variables

- Copy an `backend/.env` file out from `backend/.env.sample`.

#### Running with Neon

- After creating a PlanetScale Account, create a new project in the [console](https://app.planetscale.com).
- Copy the connection string. This will be the `DATABASE_URL` in the `.env` file.

#### Running with Docker

- `DATABASE_URL` is `mysql://root:root@localhost:3306/db`.

### Install Scripts

```shell
pnpm install
pnpm run init:client
docker compose up -d db
pnpm run dev
```
