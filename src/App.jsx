import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [page, setPage] = useState('board');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && message) {
      setMessages([...messages, { name, message }]);
      setName('');
      setMessage('');
    }
  };

  const renderToolbar = () => (
    <div className="toolbar">
      <h1>Message Board</h1>
      <button onClick={() => setPage('intro')}>Introduction</button>
      <button onClick={() => setPage('board')}>Message Board</button>
    </div>
  );

  const renderIntroduction = () => (
    <div className="introduction">
      <h2>Welcome to the Message Board Site!</h2>
      <p>This is a simple message board where you can leave your name and a message for others to see.</p>
    </div>
  );

  const renderMessageBoard = () => (
    <div className="message-board">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={handleMessageChange}
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
  );

  return (
    <div className="App">
      {renderToolbar()}
      {page === 'intro' ? renderIntroduction() : renderMessageBoard()}
    </div>
  );
};

export default App;