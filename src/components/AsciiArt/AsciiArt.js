import React, { Component } from 'react';
import './AsciiArt.css';
import SearchBar from '../SearchBar/SearchBar';


class AsciiArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: '',
    };
    this.handleAsciiChange = this.handleAsciiChange.bind(this);
  }

  handleAsciiChange(str) {
    this.setState({
        query: str
    });
  }

  render() {
    var showShadow = (this.scrollContainer && this.scrollContainer.scrollTop > 0);
    if(this.scrollContainer) {
        console.log(this.scrollContainer.scrollTop);
    }
    return (
      <div className="ascii-container" ref={(d) => { this.scrollContainer = d; }}>
        <div className="input-section"
            style={{
                boxShadow: '0 1px 0px 1px rgba(0, 0, 0, 0.2)'
            }}>
            <SearchBar
                leftIconName="format_size"
                placeholder="Text to Ascii Art"
                spellCheck="false"
                value={this.state.query}
                onChange={this.handleAsciiChange}
            />
        </div>
        <div className="grid-container">
            <div className="ascii-grid">
            </div>
        </div>
      </div>
    );
  }
}

export default AsciiArt;