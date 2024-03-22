import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('board'); // 'board' or 'intro'

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <h1>Message Board Website</h1>
        <button onClick={() => handleNavClick('intro')}>Introduction</button>
        <button onClick={() => handleNavClick('board')}>Message Board</button>
      </div>
      <div className="content">
        {currentPage === 'intro' ? (
          <div className="introduction">
            <h2>Welcome to our Message Board Website</h2>
            <p>This is a simple message board where you can leave your name and a message for others to see.</p>
          </div>
        ) : (
          <div className="message-board">
            <h2>Message Board</h2>
            <form>
              <input type="text" placeholder="Your Name" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Post Message</button>
            </form>
            {/* Messages would be listed here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;