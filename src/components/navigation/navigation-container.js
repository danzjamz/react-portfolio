import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavigationComponent extends Component {
    constructor(props) {
        super();
    }

    

    render() {
        return (
            <div className="nav-wrapper"> 
                <div className="left-side">
                    {/* navlinks add the active class to the current page link */}
                    <div className="nav-link-wrapper">
                        <NavLink exact to='/' activeClassName='nav-link-active'>Home</NavLink> 
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to='/about' activeClassName='nav-link-active'>About</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to='/contact' activeClassName='nav-link-active'>Contact</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to='/blog' activeClassName='nav-link-active'>Blog</NavLink>
                    </div>
                </div>

                <div className="right-side">
                    DANZ
                </div>
            </div>
        )
    }
}