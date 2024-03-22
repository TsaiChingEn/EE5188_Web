import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('intro'); // 'intro' or 'board'

  const switchPage = () => {
    setCurrentPage(currentPage === 'intro' ? 'board' : 'intro');
  };

  return (
    <div className="App">
      <div className="toolbar">
        <h1>Message Board Website</h1>
        <button onClick={switchPage}>
          {currentPage === 'intro' ? 'Go to Message Board' : 'Go to Introduction'}
        </button>
      </div>
      {currentPage === 'intro' ? (
        <div className="introduction">
          <h2>Welcome to our Website!</h2>
          <p>This is the introduction page where you can learn more about us.</p>
        </div>
      ) : (
        <div className="message-board">
          <h2>Message Board</h2>
          <p>Leave your name and message below:</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Post Message</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;