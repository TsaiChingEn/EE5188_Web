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
        <h1>網路攻防實習</h1>
        <button onClick={() => switchPage('introduction')}>About</button>
        <button onClick={() => switchPage('board')}>Chat</button>
        <span className="message-counter">參觀人數: {uniqueUsers.size}</span>
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
          <div>
            <img src="img/img4.png" alt="Introduction" className="intro-photo" align="center"/>
            <p>國立臺灣大學 電機資安所</p>
            <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp蔡謦恩</p>
          </div>
          <div>
            <h5>Welcome!</h5>
            <p>嗨! 我是台大的學生，目前就讀電機資安所</p>
            <p>這是我的期中專案</p>
            <p>晨晨力量人是我的頭貼</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;