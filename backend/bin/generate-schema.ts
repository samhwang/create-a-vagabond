import fs from 'node:fs';
import path from 'node:path';
import { printSchema, lexicographicSortSchema } from 'graphql';
import { schema } from '../src/schema';

console.log('WRITING SCHEMA...');

const schemaAsString = printSchema(lexicographicSortSchema(schema));
const outputFile = path.resolve(__dirname, '..', 'schema.graphql');
fs.writeFileSync(outputFile, schemaAsString, { encoding: 'utf8' });

console.log('WRITE SCHEMA COMPLETE!');
