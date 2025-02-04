import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from '@common/dtos/create-list.dto';
import { UpdateListDto } from '@common/dtos/update-list.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new list' })
  @ApiResponse({
    status: 201,
    description: 'The list has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all lists' })
  @ApiResponse({ status: 200, description: 'Return all lists.' })
  findAll() {
    return this.listsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific list by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the list to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the requested list.' })
  @ApiResponse({ status: 404, description: 'List not found.' })
  findOne(@Param('id') id: string) {
    return this.listsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific list by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the list to update' })
  @ApiResponse({
    status: 200,
    description: 'The list has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'List not found.' })
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listsService.update(id, updateListDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific list by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the list to delete' })
  @ApiResponse({
    status: 200,
    description: 'The list has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'List not found.' })
  remove(@Param('id') id: string) {
    return this.listsService.remove(id);
  }
}
