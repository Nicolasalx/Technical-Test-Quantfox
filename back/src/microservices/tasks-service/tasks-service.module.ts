import { Module } from '@nestjs/common';
import { PrismaServiceModule } from '../prisma-service/prisma-service.module';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [PrismaServiceModule],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksServiceModule {}
