import { Injectable } from '@nestjs/common';
import { CreateListDto } from '@common/dtos/create-list.dto';
import { UpdateListDto } from '@common/dtos/update-list.dto';
import { PrismaService } from '@microservices/prisma-service/prisma/prisma.service';

@Injectable()
export class ListsService {
  constructor(private prisma: PrismaService) {}

  async create(createListDto: CreateListDto) {
    return this.prisma.lists.create({
      data: {
        name: createListDto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.lists.findMany();
  }

  async findOne(id: string) {
    return this.prisma.lists.findUnique({
      where: { id },
      include: { tasks: true },
    });
  }

  async update(id: string, updateListDto: UpdateListDto) {
    return this.prisma.lists.update({
      where: { id },
      data: {
        name: updateListDto.name,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.lists.delete({
      where: { id },
    });
  }
}
