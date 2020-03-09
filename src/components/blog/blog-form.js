import React, { Component } from 'react';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            blog_status: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        this.props.handleSuccessfulFormSubmission(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input 
                    type='text' 
                    name='title'
                    onChange={ this.handleChange } 
                />
                <input 
                    type='text'
                    name='blog_status' 
                    onChange={this.handleChange } 
                />

                <button >button</button>
            </form>
        )
    }
}