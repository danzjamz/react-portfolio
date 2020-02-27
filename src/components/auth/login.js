import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>Login to access your dashboard</h1>
                <form onSubmit={ this.handleSubmit }>
                    <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={ this.state.email } 
                        onChange={ this.handleChange } />
                    <input type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={ this.state.password } 
                        onChange={ this.handleChange } />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}