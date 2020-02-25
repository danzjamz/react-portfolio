import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    // for State and lifecycle hooks use class component

    constructor() {
        super(); // MUST have this
        
        this.state = {
            pageTitle: 'HomePage',
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
            console.log('data', item)
            return <PortfolioItem title={item.name} url={item.url} slug={item.id} />; // passing values into functional component
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
            <div className='app'>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter('person')}>person</button>
                <button onClick={() => this.handleFilter('dog')}>dog</button>

                <h3>{ this.portfolioItems() }</h3>

            </div>
        );
    }
}