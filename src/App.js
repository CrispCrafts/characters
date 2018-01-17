import React, { Component } from 'react';
import './App.css';
import HTMLCodes from './components/HTMLCodes/HTMLCodes';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <HTMLCodes></HTMLCodes>
      </div>
    );
  }
}

export default App;
