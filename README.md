# Create a Vagabond

[![Netlify Status](https://api.netlify.com/api/v1/badges/aa171ef2-cc08-4023-b732-81d4210e9af5/deploy-status)](https://app.netlify.com/sites/sam-create-a-vagabond/deploys)

## Description

This project aims to provide a quick and simple way to generate a Vagabond for the [Root RPG](https://magpiegames.com/pages/root-rpg).
Other than that, this project is not in any way, shape or form related to the original game itself. I just love the game!

## Acknowledgements

- [Kyle Ferrin](https://boardgamegeek.com/boardgameartist/65224/kyle-ferrin) and [Leder Games](https://ledergames.com/) - the creators of the board game [Root: A Game of Woodland Might and Right](https://ledergames.com/products/root-a-game-of-woodland-might-and-right).
- [Magpie Games](https://magpiegames.com) - the creator of the [Root RPG](https://magpiegames.com/pages/root-rpg).

---

## Parts

This repo currently has 3 parts:

- [`client`](./workspaces/client/README.md) - Frontend React App bootstrapped with Vite.
- [`backend`](./workspaces/backend/README.md) - Backend logic: GraphQL server goes here.
- Database: This project's database currently lives in PlanetScale.
  - Locally, it can also be hosted in Docker using a MySQL Container, or use the `pscale` command
  to connect to a branch on PlanetScale.

---

## Requirements

### Tools

- Node v16
  - PNPM v7
- Docker (optional)
- Netlify CLI
- PlanetScale CLI (optional)

### Accounts

- [Netlify](https://app.netlify.com) - For hosting the site
- [PlanetScale](https://app.planetscale.com) - Serverless MySQL
- [Cler](https://clerk.dev) - For User authentication

---

## Setup

### Environment Variables

- Copy an `.env` file out from `.env.sample`. This will be used by both the Netlify CLI and Prisma.

#### Running with PlanetScale

- After creating a PlanetScale Account, create a new project in the [console](https://app.planetscale.com).
- Copy the connection string. This will be the `DATABASE_URL` in the `.env` file.

#### Running with Docker

- `DATABASE_URL` is `mysql://root:root@localhost:3306/createvagabondapp`.

### Starting the services

```shell
cp .env.sample .env

# Start the local database with Docker
# If you want to, replace this step with the `pscale` CLI.
docker compose up -d db

# Install Dependencies
npm install

# Start the services
npm run dev

# Or run these 2 scripts in 2 different terminals to start each service separately
npm run dev:backend
npm run dev:client
```
