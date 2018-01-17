import React, { Component } from "react";
import keyCodes from '../HTMLCodes/keycodes';
import './Key.css';

class Key extends Component {
    
    constructor(props) {
        super(props);
        this.generatePressedKeys = this.generatePressedKeys.bind(this);
    }

    generatePressedKeys() {
        let keysPressed = [];
        if(this.props.info.shiftKey && this.props.info.keyCode !== 16) {
            keysPressed.push(16);
        }
        if(this.props.info.ctrlKey && this.props.info.keyCode !== 17) {
            keysPressed.push(17);
        }
        if(this.props.info.altKey && this.props.info.keyCode !== 18) {
            keysPressed.push(18);
        }
        if(this.props.info.metaKey && this.props.info.keyCode !== 91) {
            keysPressed.push(91);
        }
        
        keysPressed.push(this.props.info.keyCode);
        
        return keysPressed.map((k, indx, keys) => {
            let keyComp;
            let keyCode = keyCodes(k);
            keyComp = keyCode.icon ? <i className={keyCode.icon.class}>{keyCode.icon.name}</i> : keyCode.key;
            if(indx < keys.length - 1) {
                return (
                    <div key={`${k}`} className="key-combo">
                        <div className="key-container">
                            <div className="key-title">{keyComp}</div>
                        </div>
                        <div className="combo">
                            <i className="material-icons">add</i>
                        </div>
                    </div>
                );
            }
            return (
                <div key={`${k}`} className="key-container">
                    <div className="key-title">{keyComp}</div>
                </div>
            );
        });
    }

    render() {
        if(!this.props.info) {
            return null;
        }
        return (
            <div className="keys-container">
                {this.generatePressedKeys()}
            </div>
        );
    }
}

export default Key;