import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('board'); // 'board' or 'intro'
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // TODO: Fetch messages from the backend and update state
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Upload the photo and message to the backend
    // Reset the form
    setName('');
    setMessage('');
    setSelectedFile(null);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <h1>Message Board</h1>
        <button onClick={() => setCurrentPage('intro')}>Introduction</button>
        <button onClick={() => setCurrentPage('board')}>Message Board</button>
        <span className="message-counter">{messages.length} Messages</span>
      </div>
      {currentPage === 'intro' && (
        <div className="introduction">
          <p>Welcome to the Message Board. Please share your thoughts and photos with us!</p>
        </div>
      )}
      {currentPage === 'board' && (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Your name" required />
            <textarea value={message} onChange={handleMessageChange} placeholder="Your message" required />
            <input type="file" onChange={handleFileChange} accept="image/*" required />
            <button type="submit">Post Message</button>
          </form>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <img src={msg.photoUrl} alt="User upload" />
                <p><strong>{msg.name}</strong></p>
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;