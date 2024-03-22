import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <h1>Message Board</h1>
        <button onClick={() => navigate('home')}>Introduction</button>
        <button onClick={() => navigate('board')}>Message Board</button>
      </div>
      {currentPage === 'home' && <Introduction />}
      {currentPage === 'board' && <MessageBoard />}
    </div>
  );
};

const Introduction = () => (
  <div className="introduction">
    <h2>Welcome to Our Message Board</h2>
    <p>This is a place where you can leave messages and communicate with others. Feel free to share your thoughts!</p>
  </div>
);

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitMessage = () => {
    const newMessage = { name, message };
    setMessages([...messages, newMessage]);
    setName('');
    setMessage('');
  };

  return (
    <div className="message-board">
      <h2>Leave a Message</h2>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button onClick={submitMessage}>Submit</button>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p><strong>{msg.name}</strong>: {msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;