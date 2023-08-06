#!/bin/bash

set -eux
pnpm run msw:init
pnpm run prisma:generate
pnpm run generate-schema
pnpm run relay
vite --config client/vite.config.ts
