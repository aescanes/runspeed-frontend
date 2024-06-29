import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpeedConverted from './SpeedConverted.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SpeedConverted msg="Welcome Run Speed app using react App and API (python/Flask)" />
    </div>
  );
}

export default App;
