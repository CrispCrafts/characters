import React, { Component } from 'react';
import './AsciiCodes.css';
import AsciiCode from './AsciiCode';
import SearchBar from '../SearchBar/SearchBar';


class AsciiCodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: '',
    };
    this.handleAsciiChange = this.handleAsciiChange.bind(this);
    this.generateGrid = this.generateGrid.bind(this);
  }

  generateGrid() {
      if(this.state.query.length > 0) {
        var set = Array.from(new Set(this.state.query.split('')).values());
        return set.map((x, indx) => {
            return (
                <AsciiCode key={`${indx}${x}`} character={x} />
            );
        });
      }
            
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
                spellCheck="false"
                value={this.state.query}
                onChange={this.handleAsciiChange}
            />
        </div>
        <div className="grid-container">
            <div className="ascii-grid">
                {this.generateGrid()}
            </div>
        </div>
      </div>
    );
  }
}

export default AsciiCodes;