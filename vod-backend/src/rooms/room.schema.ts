import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Room extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ownerId: string;

  @Prop()
  playlistId: string;

  @Prop()
  participants: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
