import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this);
    }

    // componentWillMount() { // Jordan used this, but its 'unsafe'
    componentDidMount() {
        this.getBlogItems();
    }

    getBlogItems() {
        axios.get('https://danzjamz.devcamp.space/portfolio/portfolio_blogs', { withCredentials: true })
            .then(response => {
                this.setState({
                    blogItems: response.data.portfolio_blogs
                })
            }).catch(error => {
                console.log('getBlogItems error', error);
            })
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <h1 key={ blogItem.id }>{ blogItem.title }</h1>
        });
        return (
            <div>
                <h2>Blog</h2>
    
                <div>
                    { blogRecords }
                    <Link to='/about'>More about me</Link>
                </div>
            </div>
        )
    }
}