import React from 'react';
import { Link } from 'react-router-dom';


export default function PortfolioItem(props) {
    // use a functional/presentational component just to render data
    return (
        <div>
            <h3>{ props.title }</h3> {/* retrieve passed items */}
            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    )
}