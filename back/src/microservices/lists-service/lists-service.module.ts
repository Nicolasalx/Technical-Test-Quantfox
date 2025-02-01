import { Module } from '@nestjs/common';
import { PrismaServiceModule } from '../prisma-service/prisma-service.module';
import { ListsService } from './lists/lists.service';
import { ListsController } from './lists/lists.controller';

@Module({
  imports: [PrismaServiceModule],
  providers: [ListsService],
  controllers: [ListsController],
})
export class ListServiceModule {}
