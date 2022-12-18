import app from './server';

async function start() {
  try {
    await app.listen({ port: 3000 });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();
