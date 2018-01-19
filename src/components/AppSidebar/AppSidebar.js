import React, { Component } from 'react';
import logo from '../../chip.png';
import './AppSidebar.css';

class AppSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebarContainer">
        {this.props.children}
      </div>
    );
  }
}

export default AppSidebar;