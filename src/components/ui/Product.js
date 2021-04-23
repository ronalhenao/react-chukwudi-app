import React from 'react';

export const Product = ({ name, qualification, time, price, image }) => {
    return (
        <article className="product col-md-4 mb-4">
            <figure className="product-image">
                <img className="product-image--item img-fluid" src={ image } alt={ name } title={ name }/>
                <span className="product-time">{ time }</span>
            </figure>
            <h3 className="product-title">{ name }</h3>
            <span className="product-qualification">{ qualification }</span>
            <span className="product-price">$${ price }</span>
        </article>
    )
}
