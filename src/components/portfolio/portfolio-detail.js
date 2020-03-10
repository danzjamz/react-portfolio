import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        console.log(this.props)
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios.get(`https://danzjamz.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
            { withCredentials: true })
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log('get portfolio item error ->', error)
            });
    }

    render() {
        return (
            <div>
                <h2>Portfolio detail for {this.props.match.params.slug}</h2>
            </div>
        )
    }
}