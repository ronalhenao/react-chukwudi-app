import React from 'react';

export const OrderItem = ({ name, price, number, image }) => {
    return (
        <article className="order-item">
            <img className="order-item--image" src={ image } alt={name} />
            <span className="order-item--number">{ number } x</span>
            <h4 className="order-item--title">{ name }</h4>
            <span className="order-item--price">${ price }</span>
        </article>
    )
}
