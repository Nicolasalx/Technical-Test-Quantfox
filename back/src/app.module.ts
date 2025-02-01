import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaServiceModule } from './microservices/prisma-service/prisma-service.module';
import { PrismaController } from './microservices/prisma-service/prisma/prisma.controller';
import { TasksServiceModule } from './microservices/tasks-service/tasks-service.module';
import { ListServiceModule } from './microservices/lists-service/lists-service.module';

@Module({
  imports: [PrismaServiceModule, TasksServiceModule, ListServiceModule],
  controllers: [PrismaController],
  providers: [AppService],
})
export class AppModule {}
