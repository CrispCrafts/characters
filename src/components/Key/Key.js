import React, { Component } from "react";
import {getKeyIcon} from '../HTMLCodes/keycodes';
import './Key.css';

class Key extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            keyIcon: getKeyIcon(props.info),
        };
    }
    
    componentWillUpdate(nextProps, nextState) {
        // key name has changed
        if(nextProps.info.keyCode !== this.props.info.keyCode) {
            //check if key name has icon
            console.log(nextProps.info);
            this.setState({
                keyIcon: getKeyIcon(nextProps.info)
            });
        }
    }

    render() {
        if(!this.props.info) {
            return null;
        }
        let comp;
        if(this.state.keyIcon) {
            comp = <i className="material-icons">{this.state.keyIcon}</i>;
            console.log(comp);
        } else {
            comp = this.props.info.name;
        }
        return (
            <div className="key-container">
                <div className="key-title">{comp}</div>
            </div>
        );
    }
}

export default Key;