import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    // for State and lifecycle hooks use class compenent

    constructor() {
        super();
        console.log('Portfolio container has rendered');
    }


    render() {
        return (
            <div className='app'>
                <h1>Done been built</h1>
                <PortfolioItem />
            </div>
        );
    }
}