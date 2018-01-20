import React, { Component } from "react";
import './AsciiCode.css';

class AsciiCode extends Component {
    
    constructor(props) {
        super(props);
        this.generateCode = this.generateCode.bind(this);
    }

    generateCode() {
        var character = this.props.character;
        var code = this.props.character.charCodeAt(0);
        switch(code) {
            case 32:
                character = <i className="material-icons">space_bar</i>
                break;
            case 9:
                character = <i className="material-icons">keyboard_tab</i>;
                break;
            default:
                break;
        }
        return (
            <div className="ascii-code">
                <div className="character">
                    {character}
                </div>
                <div className="code">
                    {code}
                </div>
            </div>
        );
    }

    render() {
        if(!this.props.character) {
            return (
                <div>Type any character</div>
            )
        }
        return this.generateCode();
    }
}

export default AsciiCode;