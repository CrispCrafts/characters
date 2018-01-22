import React, { Component } from 'react';
import './AsciiArt';

export default class FontOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="font-options">
                <div className="font-option">Font</div>
                <div className="font-option">Horizontal Layout</div>
                <div className="font-option">Vertical Layout</div>
                <div className="font-option">Font Color</div>
                <div className="font-option">Font Size</div>
                <div className="font-option">Background Color</div>
            </div>
        );
    }
}