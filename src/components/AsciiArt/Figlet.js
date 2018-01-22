import React, { Component } from 'react';

export default class Figlet extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        
    }

    render() {
        const { figletText } = this.props;
        return (
            <div>
                <pre style={{
                    padding: '24px',
                    margin: '0px',
                    width: 'fit-content'
                }}>
                    <code style={{ fontSize: `${this.props.fontSize}px`, fontWeight: this.props.boldFont ? 'bold' : 'normal' }}>{figletText}</code>
                </pre>
            </div>
        );
    }
}