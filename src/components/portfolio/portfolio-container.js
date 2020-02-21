import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    // for State and lifecycle hooks use class compenent

    constructor() {
        super(); // MUST have this
        console.log('Portfolio container has rendered');
    }

    portfolioItems() {
        const data = ['Fenrir', 'Zuko', 'Paul'];
        return data.map(item => {
            return <PortfolioItem />;
        });
    }


    render() {
        return (
            <div className='app'>
                <h1>Porfolio items go here...</h1>
                { this.portfolioItems() }
            </div>
        );
    }
}