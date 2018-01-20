import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        var selectedStyle = {
            color: this.props.selected ? '#fff' : 'rgba(255,255,255,0.5)',
            cursor: 'pointer'
        };
        return (
            <div className="item" style={selectedStyle} onClick={() => {
                this.props.onSelect(this.props.value);
            }}>
                <i className="material-icons">{this.props.icon}</i>
                <div className="item-title">{this.props.title}</div>
            </div>
        );
    }
}

Item.defaultProps = {
    value: 0,
    icon: 'keyboard',
    title: 'hello_world',
    showTitle: true,
};

export default Item;