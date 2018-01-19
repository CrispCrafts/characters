import React, { Component } from 'react';
import './AppSidebar.css';

class AppSidebar extends Component {
  constructor(props) {
    super(props);
    this.handleSelectRequest = this.handleSelectRequest.bind(this);
    this.generateChildren = this.generateChildren.bind(this);
  }

  handleSelectRequest(e, index) {
    this.props.onSelectedChange(index);
  }

  generateChildren() {
    return React.Children.map(this.props.children, (child, indx) => {
      if(child.props.value === this.props.value) {
        return React.cloneElement(child, {
          selected: true
        });
      }
      return child;
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