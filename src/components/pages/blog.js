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
        return (
            <div>
                <h2>Blog</h2>
    
                <div>
                    <Link to='/about'>More about me</Link>
                </div>
            </div>
        )
    }
}