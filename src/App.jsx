// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [visitorsCount, setVisitorsCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Here you would fetch the current visitor count and messages from the server
    // For demonstration purposes, we'll just increment the visitor count
    setVisitorsCount(visitorsCount + 1);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNewMessage = (name, message, photo) => {
    // Here you would send the new message to the server
    // and fetch the updated list of messages
    // For demonstration purposes, we'll just add it to the state
    const newMessage = { name, message, photo };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
        <nav>
          <button onClick={() => handlePageChange('home')}>Home</button>
          <button onClick={() => handlePageChange('board')}>Message Board</button>
          <span>Visitors: {visitorsCount}</span>
        </nav>
      </header>
      <main>
        {currentPage === 'home' && (
          <div className="introduction">
            <h2>Welcome to the Message Board Website</h2>
            <p>Here you can leave a message for others to see!</p>
          </div>
        )}
        {currentPage === 'board' && (
          <div className="message-board">
            <h2>Leave a Message</h2>
            <MessageForm onNewMessage={handleNewMessage} />
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className="message">
                  <img src={message.photo} alt={`${message.name}'s message`} />
                  <p><strong>{message.name}</strong></p>
                  <p>{message.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const MessageForm = ({ onNewMessage }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewMessage(name, message, photo);
    setName('');
    setMessage('');
    setPhoto('');
  };

  return (
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
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <button type="submit">Post Message</button>
    </form>
  );
};

export default App;