import React, { Component } from 'react';
import axios from 'axios';
import RichTextEditor from '../../forms/rich-text-editor';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            blog_status: '', 
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
    }

    handleRichTextEditorChange(content) {
        this.setState({ content });
    }

    buildForm() {
        let formData = new FormData();

        formData.append('portfolio_blog[title]', this.state.title);
        formData.append('portfolio_blog[blog_status]', this.state.blog_status);
        formData.append('portfolio_blog[content]', this.state.content);

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
            this.setState({
                  title: '',
                  blog_status: ''
            });
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
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

                <RichTextEditor handleRichTextEditorChange={ this.handleRichTextEditorChange } />

                <button className='btn'>button</button>
            </form>
        )
    }
}