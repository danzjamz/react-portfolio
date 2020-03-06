import React, { Component } from 'react';
import axios from 'axios';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: { }
        }
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

    render() {
        const { id, title, content, blog_status, featured_image_url } = this.state.blogItem;
        return (
            <div>
                <h1>{ title }</h1>
                <img src={ featured_image_url } />
                <p>{ content }</p>
            </div>
        )
    }
}