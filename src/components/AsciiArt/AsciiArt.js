import React, { Component } from 'react';
import './AsciiArt.css';
import SearchBar from '../SearchBar/SearchBar';
import figlet from 'figlet';

class AsciiArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: '',
        result: null,
    };
    this.handleAsciiChange = this.handleAsciiChange.bind(this);
  }

  handleAsciiChange(str) {
    this.setState({
        query: str
    });
  }

  componentDidMount() {
    figlet.text('Hello World!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, (err, data) => {
        console.log(data);
        this.setState({
            result: data
        });
    });

    console.log(figlet);
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
                useTextArea
                leftIconName="format_size"
                placeholder="Text to Ascii Art"
                spellCheck="false"
                value={this.state.query}
                onChange={this.handleAsciiChange}
            />
        </div>
        <div className="grid-container">
            {this.state.result}
        </div>
      </div>
    );
  }
}

export default AsciiArt;