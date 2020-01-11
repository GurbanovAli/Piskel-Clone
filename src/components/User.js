import React, { Component } from 'react';
import { onSignIn } from './Google';
import '../scss/user.scss';

export default class User extends Component {
    onSignIn () {
        try {
            onSignIn();
        } catch (e) {
            console.warn();
        }
    }

    render () {
        return (
            <div className="user-list">
                <button onClick={this.onSignIn}>Sign in</button>
            </div>
        );
    }
}
