import React, { Component } from 'react';
import './App.css';
import AppToolbar from './components/AppToolbar/AppToolbar';
import AppFooter from './components/AppFooter/AppFooter';
import AppSidebar from './components/AppSidebar/AppSidebar';
import KeyCodes from './components/KeyCodes/KeyCodes';
import Item from './components/AppSidebar/Item/Item';
import AsciiCodes from './components/AsciiCodes/AsciiCodes';
import AppPageContainer from './components/AppPageContainer/AppPageContainer';
import AppPage from './components/AppPage/AppPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  render() {
    return (
      <div className="app-container">
        <AppToolbar title="Characters"/>
        <AppSidebar
          onSelectedChange={(indx) => {
            this.setState({
              currentPage: indx
            });
          }}
          value={this.state.currentPage}>
          <Item
            value={0}
            icon="keyboard"
            title={<span>Key<br/>Codes</span>} />
          <Item
            value={1}
            icon="font_download"
            title="ASCII" />
        </AppSidebar>
        <AppPageContainer value={this.state.currentPage}>
          <AppPage value={0}>
            <KeyCodes></KeyCodes>
          </AppPage>
          <AppPage value={1}>
            <AsciiCodes></AsciiCodes>
          </AppPage>
        </AppPageContainer>
        <AppFooter />
      </div>
    );
  }
}

export default App;
