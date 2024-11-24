import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, onPlay, onPause }) => {
  return (
    <ReactPlayer
      url={url}
      playing
      controls
      onPlay={onPlay}
      onPause={onPause}
    />
  );
};

export default VideoPlayer;
