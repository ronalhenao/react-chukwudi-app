import React from 'react'
import { OrderEdit } from './OrderEdit'
import { OrderItem } from './OrderItem'

export const Order = () => {

    const orderData = [
        {
            "id": 1,
            "name": "Beach BBQBurger",
            "price": 14.99,
            "number": 1,
            "image": "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
        },
        {
            "id": 2,
            "name": "French Fries",
            "price": 9.99,
            "number": 1,
            "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
        },
        {
            "id": 3,
            "name": "Cheese Sause",
            "price": 0.99,
            "number": 1,
            "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
        }
    ]

    return (
        <section className="order">
            <h2 className="title">My <br />Order</h2>
            <OrderEdit />

            <div className="order-products">
                { orderData.map( item =>
                    <OrderItem 
                        key={ item.id } {...item}
                    />
                ) }
            </div>

            <div className="order-total d-flex justify-content-between align-items-center">
                <h3 className="order-total--title">Total:</h3>
                <span className="order-pay">$25.97</span>
            </div>
        </section>
    )
}
