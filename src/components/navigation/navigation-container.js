import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavigationComponent extends Component {
    constructor(props) {
        super();
    }

    

    render() {
        return (
            <div> exact to='/'
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <button>Contact</button>
                <button>Blog</button>
                { false ? <button>Add Blog</button> : null }
            </div>
        )
    }
}