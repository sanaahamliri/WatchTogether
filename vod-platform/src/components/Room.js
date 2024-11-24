import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import VideoPlayer from './VideoPlayer';

const socket = io('http://localhost:3000');

const Room = ({ roomId }) => {
  const [url, setUrl] = useState('');
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    socket.emit('joinRoom', { roomId });

    socket.on('playVideo', (url) => {
      setUrl(url);
      setPlaying(true);
    });

    socket.on('pauseVideo', () => {
      setPlaying(false);
    });

    return () => {
      socket.emit('leaveRoom', { roomId });
      socket.off('playVideo');
      socket.off('pauseVideo');
    };
  }, [roomId]);

  const handlePlay = () => {
    socket.emit('playVideo', { roomId, url });
  };

  const handlePause = () => {
    socket.emit('pauseVideo', { roomId });
  };

  return (
    <VideoPlayer url={url} onPlay={handlePlay} onPause={handlePause} playing={playing} />
  );
};

export default Room;
