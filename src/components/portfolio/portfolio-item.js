import React from 'react';
import { Link } from 'react-router-dom';


export default function PortfolioItem(props) {
    // use a functional/presentational component just to render data
    const {id, description, thumb_image_url, logo } = props.item;
    return (
        <div>
            <div>
                {description}
            </div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}