import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.schema';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async create(@Body() room: Room) {
    return this.roomsService.create(room);
  }

  @Get()
  async findAll() {
    return this.roomsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() room: Room) {
    return this.roomsService.update(id, room);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.roomsService.delete(id);
  }
}
