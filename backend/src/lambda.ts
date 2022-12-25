import awsLambdaFastify from '@fastify/aws-lambda';
import { app } from './server';

export const handler = awsLambdaFastify(app);
