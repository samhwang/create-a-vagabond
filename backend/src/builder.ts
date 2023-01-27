import SchemaBuilder from '@pothos/core';

import ErrorsPlugin from '@pothos/plugin-errors';

import RelayPlugin from '@pothos/plugin-relay';

import PrismaPlugin from '@pothos/plugin-prisma';
import { PrismaClient } from '@prisma/client';
import type PrismaTypes from '@pothos/plugin-prisma/generated';

export const prisma = new PrismaClient({});

type SchemaBuilderContext = {
  PrismaTypes: PrismaTypes
}

export const builder = new SchemaBuilder<SchemaBuilderContext>({ 
  plugins: [ErrorsPlugin, RelayPlugin, PrismaPlugin],

  errorOptions: {
    defaultTypes: [],
  },

  relayOptions: {
    // These will become the defaults in the next major version
    clientMutationId: 'omit',
    cursorType: 'String',
  },

  prisma: {
    client: prisma,
    filterConnectionTotalCount: true,
  }
});
