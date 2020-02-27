import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    // for State and lifecycle hooks use class component

    constructor() {
        super(); // MUST have this
        
        this.state = {
            pageTitle: 'Welcome to my portfolio',
            isLoading: false,
            data: [ ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    getPortfolioItems() {
        // Make a request for a user with a given ID
        axios.get('https://danzjamz.devcamp.space/portfolio/portfolio_items')
          .then((response) => {
            // handle success
            console.log(response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch((error) => {
            // handle error
            console.log(error);
          });
      }

    portfolioItems() {
        return this.state.data.map(item => {
            return (
                <PortfolioItem 
                        key={item.id} 
                        item={item}
                    /> // passing values into functional component
            )
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading</div>
        }

        return (
            // uses JSX to simplify rendering of html from react
            
                <div className="portfolio-items-wrapper">
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                    <button className="btn" onClick={() => this.handleFilter('Education')}>Education</button>

                    { this.portfolioItems() }
                </div>
        );
    }
}