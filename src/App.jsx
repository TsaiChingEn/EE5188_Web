import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to hold the list of messages
  const [messages, setMessages] = useState([]);
  // State to hold the current page ('board' or 'introduction')
  const [currentPage, setCurrentPage] = useState('board');
  // State to hold the form inputs
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = { name, message };
    setMessages([...messages, newMessage]);
    setName('');
    setMessage('');
  };

  // Function to switch pages
  const switchPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <h1>Message Board</h1>
        <button onClick={() => switchPage('introduction')}>Introduction</button>
        <button onClick={() => switchPage('board')}>Message Board</button>
        <span className="message-counter">Messages: {messages.length}</span>
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
          <p>Welcome to our message board. Feel free to leave a message!</p>
        </div>
      )}
    </div>
  );
};

export default App;