import React, { Component } from "react";
import './HTMLCodes.css';
import keycodes from './keycodes';
import Key from '../Key/Key';

class HTMLCodes extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            which: null,
            keyCode: null,
            shiftKey: null,
            altKey: null,
            ctrlKey: null,
            metaKey: null
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress, false);
    }

    handleKeyPress(e) {
        e.preventDefault();
        if(e.which === this.state.which) {
            return;
        }
        this.setState({
            ...keycodes(e),
            started: true
        });
    }
    
    render() {
        if(!this.state.started) {
            return (
                <div>Press any Key</div>
            );
        }
        return (
            <div className="htmlCodes-container">
                <Key info={{ name: this.state.key, keyCode: this.state.which }}/>
                <div>key: {this.state.key}</div>
                <div>which: {this.state.which}</div>
                <div>keyCode: {this.state.keyCode}</div>
                <div>shiftKey: {this.state.shiftKey}</div>
                <div>altKey: {this.state.altKey}</div>
                <div>ctrlKey: {this.state.ctrlKey}</div>
                <div>metaKey: {this.state.metaKey}</div>
            </div>
        );
    }
}

export default HTMLCodes;