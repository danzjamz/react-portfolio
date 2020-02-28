import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
            <NavLink to="/blog" activeClassName="nav-link-active">
                Blog
            </NavLink>
        </div>
        );
     }
  
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

                { props.loggedInStatus === "LOGGED_IN" ? (
                    dynamicLink('/blog', 'Blog')
                ) : null }
            </div>

            <div className="right-side">
                DANZ
            </div>
        </div>
    )
}

export default NavigationComponent;