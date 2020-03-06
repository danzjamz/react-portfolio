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
                console.log(response)
            }).catch(error => {
                console.log('getBlogItem error', error)
            })
    }

    render() {
        return (
            <div>
                { this.state.currentId }
            </div>
        )
    }
}