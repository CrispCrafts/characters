import React, { Component } from 'react';
import './AppSidebar.css';
import Item from './Item/Item';

class AppSidebar extends Component {
  constructor(props) {
    super(props);
    this.handleSelectRequest = this.handleSelectRequest.bind(this);
    this.generateChildren = this.generateChildren.bind(this);
  }

  handleSelectRequest(index) {
    this.props.onSelectedChange(index);
  }

  generateChildren() {
    return React.Children.map(this.props.children, (child, indx) => {
      let val = (index) => {
        this.handleSelectRequest(index);
      };
      if(child.props.value === this.props.value) {
        return React.cloneElement(child, {
          selected: true,
          onSelect: val
        });
      }
      return React.cloneElement(child, {
        selected: false,
        onSelect: val
      });
    });
  }

  render() {
    return (
      <div
        className="sidebarContainer"
      >
        {this.generateChildren()}
      </div>
    );
  }
}

AppSidebar.defaultProps = {
  value: 0
};

export default AppSidebar;