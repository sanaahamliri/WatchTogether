import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ReactPlayer from 'react-player';

const socket = io('http://localhost:3000');

const Room = ({ match }) => {
  const roomId = match.params.id;
  const [url, setUrl] = useState('');
  const [playing, setPlaying] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinRoom', { roomId });

    socket.on('playVideo', (url) => {
      setUrl(url);
      setPlaying(true);
    });

    socket.on('pauseVideo', () => {
      setPlaying(false);
    });

    socket.on('message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.emit('leaveRoom', { roomId });
      socket.off('playVideo');
      socket.off('pauseVideo');
      socket.off('message');
    };
  }, [roomId]);

  const handlePlay = () => {
    socket.emit('playVideo', { roomId, url });
  };

  const handlePause = () => {
    socket.emit('pauseVideo', { roomId });
  };

  const handleSendMessage = () => {
    socket.emit('sendMessage', { roomId, message });
    setMessages((prev) => [...prev, message]);
    setMessage('');
  };

  return (
    <div>
      <h2>Room {roomId}</h2>
      <ReactPlayer url={url} playing={playing} controls onPlay={handlePlay} onPause={handlePause} />
      <div>
        <h3>Push-to-Talk</h3>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Room;
