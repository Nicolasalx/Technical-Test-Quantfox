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
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('lists/:listId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a task for a specific list' })
  @ApiParam({
    name: 'listId',
    description: 'The ID of the list to add the task to',
  })
  @ApiResponse({ status: 201, description: 'Task successfully created.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
  @ApiOperation({ summary: 'Get all tasks for a specific list' })
  @ApiParam({
    name: 'listId',
    description: 'The ID of the list to retrieve tasks from',
  })
  @ApiResponse({
    status: 200,
    description: 'Return all tasks for the specified list.',
  })
  findAll(@Param('listId') listId: string) {
    return this.tasksService.findAll(listId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific task' })
  @ApiParam({ name: 'id', description: 'The ID of the task to update' })
  @ApiResponse({ status: 200, description: 'Task successfully updated.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific task' })
  @ApiParam({ name: 'id', description: 'The ID of the task to delete' })
  @ApiResponse({ status: 200, description: 'Task successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
