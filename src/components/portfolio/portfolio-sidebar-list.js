import React from 'react';

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(item => {
        return (
            <div>
                <div>
                    <img src={ item.thumb_image_url } />
                </div>
                <h1>{ item.name }</h1>
                <h2>{ item.id }</h2>
            </div>
        )
    });
    console.log(portfolioList)
    
    return (
        <div>
            { portfolioList }
        </div>
    )
}

export default PortfolioSidebarList;