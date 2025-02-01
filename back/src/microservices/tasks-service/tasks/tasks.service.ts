import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/common/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/common/dtos/update-task.dto';
import { PrismaService } from 'src/microservices/prisma-service/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(listId: string, createTaskDto: CreateTaskDto) {
    return this.prisma.tasks.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        dueDate: new Date(),
        status: 'PENDING',
        listId: listId,
      },
    });
  }

  async findAll(listId: string) {
    return this.prisma.tasks.findMany({
      where: { listId: listId },
    });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.tasks.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: string) {
    return this.prisma.tasks.delete({
      where: { id },
    });
  }
}
