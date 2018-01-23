import React, { Component } from 'react';
import cool from 'cool-ascii-faces';

export default class Figlet extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log('Figlet: UPDATE');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.figletText && nextProps.figletText.trim()) {
            if(
                nextProps.figletText !== this.props.figletText ||
                nextProps.fontWeight !== this.props.fontWeight ||
                nextProps.fontSize !== this.props.fontSize
            ) {
                return true;
            }
        } else if (this.props.figletText.trim() && this.props.figletText !== nextProps.figletText) {
            return true;
        } else if(this.props.figletText !== nextProps.figletText){
            return true;
        }
        return false;
    }

    render() {
        const { figletText } = this.props;
        if(!figletText.trim()) {
            return (
                <div style={{
                    fontSize: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    color: 'white',
                    flex: 1
                }}>
                    <div style={{paddingBottom: '24px'}}>{cool()}</div>
                    <div>Convert Text to Ascii Art</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.5)'}}> Type in any character</div>
                </div>
            );
        }
        return (
            <div>
                <pre style={{
                    padding: '24px',
                    margin: '0px',
                    width: 'fit-content',
                }}>
                    <code style={{ fontSize: `${this.props.fontSize}px`, fontWeight: this.props.fontWeight || 'normal' }}>{figletText}</code>
                </pre>
            </div>
        );
    }
}