import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Playlist extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  videos: string[];

  @Prop({ required: true })
  ownerId: string;

  @Prop()
  roomId: string;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
