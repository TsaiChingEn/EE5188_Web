import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = { name, message, id: Date.now() };
    setMessages([...messages, newMessage]);
    setName('');
    setMessage('');
  };

  return (
    <div className="App">
      <h1>Message Board</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your name"
          className="nameInput"
        />
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Your message"
          className="messageInput"
        ></textarea>
        <button type="submit" className="submitButton">Post Message</button>
      </form>
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.name}</strong>: {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;