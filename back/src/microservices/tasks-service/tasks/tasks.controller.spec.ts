import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { PrismaServiceModule } from '@microservices/prisma-service/prisma-service.module';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaServiceModule],
      providers: [TasksService],
      controllers: [TasksController],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
