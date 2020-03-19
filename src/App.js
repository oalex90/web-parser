import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      'https://www.reddit.com/r/atx4atx/search/?q=f4m%20OR%20w4m%20OR%20f4r%20OR%20w4r%20OR%20mf4m%20OR%20mw4m&restrict_sr=1&sort=new',
      {
        method: "GET"
      }
    )
      .then(res => {
        console.log(res);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
