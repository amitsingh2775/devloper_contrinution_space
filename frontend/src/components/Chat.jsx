import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = ({ projectId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('joinProject', projectId);

    socket.on('newMessage', (messageData) => {
      setMessages((prev) => [...prev, messageData]);
    });

    return () => {
      socket.disconnect();
    };
  }, [projectId]);

  const sendMessage = () => {
    const messageData = { projectId, message };
    socket.emit('sendMessage', messageData);
    setMessages((prev) => [...prev, messageData]);
    setMessage('');
  };

  return (
    <div className="p-4 border-t">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        onClick={sendMessage}
        className="mt-2 p-2 bg-blue-500 text-white"
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
