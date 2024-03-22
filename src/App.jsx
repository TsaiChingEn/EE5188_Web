import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState('board');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [uniqueUsers, setUniqueUsers] = useState(new Set());

  useEffect(() => {
    const names = new Set(messages.map(msg => msg.name));
    setUniqueUsers(names);
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() && message.trim()) {
      const newMessage = { name, message };
      setMessages([...messages, newMessage]);
      setName('');
      setMessage('');
    }
  };

  const switchPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <h1>Message Board</h1>
        <button onClick={() => switchPage('introduction')}>Introduction</button>
        <button onClick={() => switchPage('board')}>Message Board</button>
        <span className="message-counter">Users: {uniqueUsers.size}</span>
      </div>
      {currentPage === 'board' && (
        <div className="message-board">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Post Message</button>
          </form>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <strong>{msg.name}</strong>: {msg.message}
              </div>
            ))}
          </div>
        </div>
      )}
      {currentPage === 'introduction' && (
        <div className="introduction">
          <img src="./src/photo1.png" alt="Introduction" className="intro-photo"/>
          <p>Welcome to our message board. Feel free to leave a message!</p>
          <p>This is a platform where you can share your thoughts and connect with others.</p>
        </div>
      )}
    </div>
  );
};

export default App;