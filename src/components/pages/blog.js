import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogItem from '../blog/blog-item';

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 1
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.activateInfiniteScroll();
    }

    // componentWillMount() { // Jordan used this, but its 'unsafe'
    componentDidMount() {
        this.getBlogItems();
    }

    activateInfiniteScroll() {
        window.onscroll = () => {
            if ((window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
                console.log('get more posts');
            }
        }
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
        axios.get('https://danzjamz.devcamp.space/portfolio/portfolio_blogs', { withCredentials: true })
            .then(response => {
                this.setState({
                    blogItems: response.data.portfolio_blogs,
                    totalCount: response.data.meta.total_records
                })
            }).catch(error => {
                console.log('getBlogItems error', error);
            })
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={ blogItem } />
        });
        return (
            <div>
                <div className='blog-container'>
                    <div className='content-container'>{ blogRecords }</div>
                </div>
            </div>
        )
    }
}