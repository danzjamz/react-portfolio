import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <h1>No Matching Routes</h1>
            <Link to='/'>Return to homepage</Link>
        </div>
    )
}