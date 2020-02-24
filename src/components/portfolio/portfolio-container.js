import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    // for State and lifecycle hooks use class compenent

    constructor() {
        super(); // MUST have this
        
        this.state = {
            pageTitle: 'Welcome',
            data: [
                {title: 'Fenrir'},
                {title: 'Zuko'},
                {title: 'Paul'}
            ]
        };

        this.handlePageTitle = this.handlePageTitle.bind(this);
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google'} />; // passing values into functional component
        });
    }

    handlePageTitle() {
        this.setState({
            pageTitle: 'Something else'
        })
    }


    render() {
        return (
            // uses JSX to simplify rendering of html from react
            <div className='app'>
                <h2>{this.state.pageTitle}</h2>
                <h1>Porfolio items go here...</h1>
                { this.portfolioItems() }

                <button onClick={this.handlePageTitle}>change title</button>
            </div>
        );
    }
}