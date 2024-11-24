import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Playlist } from './playlist.schema';

@Injectable()
export class PlaylistsService {
  constructor(@InjectModel(Playlist.name) private playlistModel: Model<Playlist>) {}

  async create(playlist: Playlist): Promise<Playlist> {
    const createdPlaylist = new this.playlistModel(playlist);
    return createdPlaylist.save();
  }

  async findAll(): Promise<Playlist[]> {
    return this.playlistModel.find().exec();
  }

}
