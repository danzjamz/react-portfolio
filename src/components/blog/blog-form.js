import React, { Component } from 'react';
import axios from 'axios';

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

    buildForm() {
        let formData = new FormData();

        formData.append('portfolio_blog[title]', this.state.title);
        formData.append('portfolio_blog[blog_status]', this.state.blog_status);

        return formData;
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        axios
          .post(
            "https://danzjamz.devcamp.space/portfolio/portfolio_blogs",
            this.buildForm(),
            { withCredentials: true }
          )
          .then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);

            this.setState({
                title: '',
                blog_status: ''
            });
          })
          .catch(error => {
            console.log("handleSubmit for blog error", error);
          });

          event.preventDefault();
        }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } className='blog-form-wrapper'>
                <div className='two-column'>
                    <input 
                        type='text' 
                        name='title'
                        placeholder='title'
                        onChange={ this.handleChange } 
                    />
                    <input 
                        type='text'
                        name='blog_status' 
                        placeholder='blog status'
                        onChange={this.handleChange } 
                    />
                </div>

                <button className='btn'>button</button>
            </form>
        )
    }
}