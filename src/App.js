import React, { Component } from 'react';
import './App.css';
import AppToolbar from './components/AppToolbar/AppToolbar';
import AppFooter from './components/AppFooter/AppFooter';
import AppSidebar from './components/AppSidebar/AppSidebar';
import KeyCodes from './components/KeyCodes/KeyCodes';
import Item from './components/AppSidebar/Item/Item';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <AppToolbar title="Characters"/>
        <AppSidebar>
          <Item
            icon="keyboard"
            title={<span>Key<br/>Codes</span>} />
          <Item
            icon="font_download"
            title="ASCII" />
        </AppSidebar>
        <KeyCodes></KeyCodes>
        <AppFooter />
      </div>
    );
  }
}

export default App;
