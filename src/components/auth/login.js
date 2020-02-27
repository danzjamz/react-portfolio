import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Login to access your dashboard</h1>
                <form>
                    <input type="text"></input>
                    <input type="password"></input>
                </form>
            </div>
        );
    }
}