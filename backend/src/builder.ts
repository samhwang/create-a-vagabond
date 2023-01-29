import SchemaBuilder from '@pothos/core';

import ErrorsPlugin from '@pothos/plugin-errors';

import SimpleObjectsPlugin from '@pothos/plugin-simple-objects';

import RelayPlugin from '@pothos/plugin-relay';

import PrismaPlugin from '@pothos/plugin-prisma';
import { PrismaClient } from '@prisma/client';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { Context } from '@netlify/functions/dist/function/context'
import { Session } from '@clerk/clerk-sdk-node'

export const prisma = new PrismaClient({});

type SchemaBuilderContext = {
  PrismaTypes: PrismaTypes;
  Context: Context & {
    session: Session | undefined
  }
};

export const builder = new SchemaBuilder<SchemaBuilderContext>({
  plugins: [ErrorsPlugin, SimpleObjectsPlugin, RelayPlugin, PrismaPlugin],

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
  },
});
