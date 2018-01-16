import React, { Component } from 'react';
import logo from './chip.png';
import './App.css';
import HTMLCodes from './components/HTMLCodes/HTMLCodes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Characters</h1>
        </header>
        <HTMLCodes></HTMLCodes>
      </div>
    );
  }
}

export default App;
