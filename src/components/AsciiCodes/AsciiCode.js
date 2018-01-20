import React, { Component } from "react";
import he from 'he';
import cool from 'cool-ascii-faces';
import './AsciiCode.css';
import { names } from "./core";

class AsciiCode extends Component {
    
    constructor(props) {
        super(props);
        this.generateCode = this.generateCode.bind(this);
    }

    generateCode() {
        var character = this.props.character;
        var code = character.charCodeAt(0);
        var htmlEntity = he.encode(character, {'encodeEverything': true, 'decimal': false});
        var htmlName = he.encode(character, {'encodeEverything': true, 'useNamedReferences': true, 'decimal': true});
        if(character === '&#0;') {
            code = 0;
            htmlEntity = character;
            htmlName = character;
        }
        if(code < 32 && code >= 0) {
            character= names[code]
        } 
        
        switch(code) {
            case 32:
                character = '\\s';//<i className="material-icons">space_bar</i>
                break;
            case 10:
                character = '\\n';
                break;
            case 9:
                character = '\\t';
                break;
            default:
                break;
        }
        return (
            <div className="ascii-code">
                <div className="character">
                    {character}
                </div>
                <div className="info">
                    <div>&#38;&#35;{code}&#59;</div>
                    <div>{htmlEntity}</div>
                    <div>{htmlName}</div>
                </div>
            </div>
        );
    }

    render() {
        if(!this.props.character && !this.props.forceCode) {
            return (
                <div className="ascii-code">
                    <div className="character">
                        {cool()}
                    </div>
                    <div className="info">
                        {'no character'}
                    </div>
                </div>
            )
        }
        return this.generateCode();
    }
}

export default AsciiCode;