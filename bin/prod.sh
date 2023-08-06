#!/bin/bash

set -eux
pnpm run prisma:migrate
pnpm run prisma:generate
pnpm run generate-schema
pnpm run relay
pnpm run build
