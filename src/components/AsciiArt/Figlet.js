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
                <pre style={{padding: '24px'}}>
                    <code style={{ fontSize: `${this.props.fontSize}px` }}>{figletText}</code>
                </pre>
            </div>
        );
    }
}