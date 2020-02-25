import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    // for State and lifecycle hooks use class component

    constructor() {
        super(); // MUST have this
        
        this.state = {
            pageTitle: 'Welcome',
            isLoading: false,
            data: [
                {title: 'Fenrir', category: 'dog', slug: 'fenrir'},
                {title: 'Zuko', category: 'dog', slug: 'zuko'},
                {title: 'Paul', category: 'person', slug: 'paul'}
            ]
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

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google'} slug={item.slug} />; // passing values into functional component
        });
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

                { this.portfolioItems() }

            </div>
        );
    }
}