import React, { Component } from "react";

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
        console.log(e.keyCode);
        console.log(e.shiftKey);
        this.setState({
            started: true,
            which: e.which,
            keyCode: e.keyCode,
            shiftKey: e.shiftKey.toString(),
            altKey: e.altKey.toString(),
            ctrlKey: e.ctrlKey.toString(),
            metaKey: e.metaKey.toString()
        });
    }
    
    render() {
        if(!this.state.started) {
            return (
                <div>Press any Key</div>
            );
        }
        return (
            <div>
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