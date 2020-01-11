import React, { Component } from 'react';
import size from '../../Assets/icons/square.svg';

export default class PenSizeBar extends Component {
    render () {
        return (
            <div className="pen-size">
                <div className="square activeTool">
                    <img src={size} className="size-one" />
                </div>
                <div className="square activeTool">
                    <img src={size} className="size-two" />
                </div>
                <div className="square activeTool">
                    <img src={size} className="size-three" />
                </div>
                <div className="square activeTool">
                    <img src={size} className="size-four" />
                </div>
            </div>
        );
    }
}
