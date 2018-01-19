import React, { Component } from 'react';

class AppPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

AppPage.defaultProps = {
  value: 0,
};

export default AppPage;
