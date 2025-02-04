import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  setupSwagger(app);

  await app.listen(8080).catch((error) => {
    console.error('Error during application startup', error);
  });
}

bootstrap().catch((error) => {
  console.error('Bootstrap error', error);
});
