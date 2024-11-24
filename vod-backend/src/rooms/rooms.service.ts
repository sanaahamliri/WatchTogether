import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './room.schema';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) {}

  async create(room: Room): Promise<Room> {
    const createdRoom = new this.roomModel(room);
    return createdRoom.save();
  }

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }

  async findOne(id: string): Promise<Room> {
    return this.roomModel.findById(id).exec();
  }

  async update(id: string, room: Room): Promise<Room> {
    return this.roomModel.findByIdAndUpdate(id, room, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.roomModel.findByIdAndRemove(id).exec();
  }
}
