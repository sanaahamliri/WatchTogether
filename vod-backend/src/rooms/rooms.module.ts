import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './room.schema';
import { RoomsService } from './rooms.service';
import { RoomsGateway } from './rooms.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])],
  providers: [RoomsService, RoomsGateway],
  exports: [RoomsService],
})
export class RoomsModule {}
