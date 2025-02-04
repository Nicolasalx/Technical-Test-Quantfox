import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('TRELLOFOX BACKEND API')
      .setDescription('API for TRELLOFOX project')
      .setVersion('1.0')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'JWT',
          description: 'Enter JWT token',
          in: 'header',
        },
        'JWT-auth',
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);

    const paths = Object.values(document.paths);

    paths.forEach((path: { [key: string]: any }) => {
      Object.values(path).forEach(
        (method: { security?: { [key: string]: any }[] }) => {
          if (!method.security) {
            method.security = [{ 'JWT-auth': [] }];
          }
        },
      );
    });

    SwaggerModule.setup('api', app, document);
  }
}

