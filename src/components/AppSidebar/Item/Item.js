import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        var selectedStyle = {
            color: this.props.selected ? '#fff' : '#000'
        };
        return (
            <div className="item" style={selectedStyle}>
                <i className="material-icons">{this.props.icon}</i>
                <div className="item-title">{this.props.title}</div>
            </div>
        );
    }
}

Item.defaultProps = {
    icon: 'keyboard',
    title: 'hello_world',
    showTitle: true,
};

export default Item;