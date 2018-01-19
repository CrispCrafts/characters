import React, { Component } from 'react';
import './AsciiCodes.css';

class AsciiCodes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ascii-container">
        {this.props.children}
      </div>
    );
  }
}

export default AsciiCodes;