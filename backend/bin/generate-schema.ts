import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { printSchema, lexicographicSortSchema } from 'graphql';
import { schema } from '../src/schema';

console.log('WRITING SCHEMA...');

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const schemaAsString = printSchema(lexicographicSortSchema(schema));
const outputFile = path.resolve(__dirname, '..', '..', 'client', 'schema.graphql');
fs.writeFileSync(outputFile, schemaAsString, { encoding: 'utf8' });

console.log('WRITE SCHEMA COMPLETE!');
