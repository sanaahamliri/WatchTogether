import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/WatchTogether'),
    PlaylistsModule,
  ],
})
export class AppModule {}
