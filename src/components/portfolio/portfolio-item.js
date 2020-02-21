import React from 'react';



export default function PortfolioItem(props) {
    // use a functional/presentational component just to render data
    return (
        <div>
            <h3>{ props.title }</h3> {/* retrieve passed items */}
            <a href='https://google.com'>{ props.url }</a>
        </div>
    )
}