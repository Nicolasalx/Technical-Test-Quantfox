import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '@common/dtos/create-task.dto';
import { UpdateTaskDto } from '@common/dtos/update-task.dto';

@Controller('lists/:listId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(
    @Param('listId') listId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    try {
      return this.tasksService.create(listId, createTaskDto);
    } catch (error) {
      console.error('Error during task creation', error);
      throw new InternalServerErrorException();
    }
  }

  @Get()
  findAll(@Param('listId') listId: string) {
    return this.tasksService.findAll(listId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
