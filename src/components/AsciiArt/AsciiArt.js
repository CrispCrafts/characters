import React, { Component } from 'react';
import './AsciiArt.css';
import SearchBar from '../SearchBar/SearchBar';
import figlet from 'figlet';
import Figlet from './Figlet';
import asyncFiglet from './utils/async-figlet';

class AsciiArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textValue: '',
        figletText: '',
        font: 'Bloody',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        fontSize: 18,
        fontColor: '#000',
        backgroundColor: null,
        editorFocused: false
    };
    this.handleFigletTextChange = this.handleFigletTextChange.bind(this);
  }

  handleFigletTextChange(str) {
    this.setState({
        textValue: str
    });
    this.updateFiglet(str);
  }

  updateFiglet(str) {
      console.log(str);
      const options = {
        font: this.state.font,
        horizontalLayout: this.state.horizontalLayout,
        verticalLayout: this.state.verticalLayout
      };
      console.log(options);
      asyncFiglet(str, options)
        .then(asciiText => {
            this.setState({
                figletText: asciiText
            });
        }).catch(err => {
            console.log(err);
        });
  }

  componentDidMount() {
  }

  render() {
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
                value={this.state.textValue}
                onChange={this.handleFigletTextChange}
                onFocus={(focused) => {
                    console.log(focused);
                    this.setState({
                        editorFocused: focused
                    });
                }}
            />
        </div>
        <div className="fig-container" style={{
            height: `calc(100vh - ${ 154}px)`,
            paddingTop: `${this.state.editorFocused ? 184 : 64}px`
        }}>
            <Figlet 
                figletText={this.state.figletText}
                backgroundColor={this.state.backgroundColor}
                fontSize={this.state.fontSize}
                fontColor={this.state.fontColor}
            />
        </div>
      </div>
    );
  }
}

export default AsciiArt;