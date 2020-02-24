import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavigationComponent extends Component {
    constructor(props) {
        super();
    }

    

    render() {
        return (
            <div> 
                {/* navlinks add the active class to the current page link */}
                <NavLink exact to='/'>Home</NavLink> 
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                { false ? <button>Add Blog</button> : null }
            </div>
        )
    }
}