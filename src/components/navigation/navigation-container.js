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
                        <NavLink exact to='/'>Home</NavLink> 
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to='/about'>About</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to='/blog'>Blog</NavLink>
                    </div>
                </div>

                <div className="right-side">
                    DANZ
                </div>
            </div>
        )
    }
}