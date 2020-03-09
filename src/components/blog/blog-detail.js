import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogFeaturedImage from './blog-featured-image';
import BlogForm from './blog-form';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: { },
            editMode: false
        };

        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick() {
        this.setState({ editMode: true })
    }

    componentDidMount() {
        this.getBlogItem();
    }

    getBlogItem() {
        axios.get(`https://danzjamz.devcamp.space/portfolio/portfolio_blogs/${ this.state.currentId }`)
            .then(response => {
                this.setState({ blogItem: response.data.portfolio_blog });
            }).catch(error => {
                console.log('getBlogItem error', error)
            })
    }

    contentManager = () => {
        const { id, title, content, blog_status, featured_image_url } = this.state.blogItem;
        
        if (this.state.editMode) {
            return <BlogForm 
                editMode={this.state.editMode}
                blog={this.state.blogItem}
            />
        } else {
            return (
                <div className='content-container'>
                    <h1 onClick={this.handleEditClick }>{ title }</h1>

                    <BlogFeaturedImage img={ featured_image_url } />

                    <div className='content'>{ ReactHtmlParser(content) }</div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='blog-container'>
                { this.contentManager() }
            </div>
        )
    }
}