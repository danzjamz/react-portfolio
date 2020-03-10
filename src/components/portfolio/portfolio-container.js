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
        if (filter === 'CLEAR_FILTERS') {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        // Make a request for a user with a given ID
        axios.get('https://danzjamz.devcamp.space/portfolio/portfolio_items')
          .then((response) => {
            // handle success
            console.log(response);
            if (filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    })
                })
            } else {
                this.setState({
                    data: response.data.portfolio_items
                })
            }
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
            <div className="homepage-wrapper">
                <div className='filter-links'>
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                    <button className="btn" onClick={() => this.handleFilter('Education')}>Education</button>
                    <button className='btn' onClick={() => this.handleFilter('CLEAR_FILTERS')}>All</button>
                </div>
                <div className="portfolio-items-wrapper">
                    { this.portfolioItems() }
                </div>
            </div>
        );
    }
}