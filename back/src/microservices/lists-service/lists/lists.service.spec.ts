import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';
import { PrismaServiceModule } from '@microservices/prisma-service/prisma-service.module';

describe('ListsService', () => {
  let service: ListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaServiceModule],
      providers: [ListsService],
    }).compile();

    service = module.get<ListsService>(ListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
