import React from 'react';
import clockIcon from '../../assets/icons/clock.svg';

export const OrderEdit = () => {
    return (
        <div className="order-edit mt-4">
            <div className="order-direction mb-4">
                <span className="order-direction--text">625 St Marks Ave</span>
                <p>Edit</p>
            </div>
            <div className="order-time">
                <div className="order-min">
                    <img className="order-icon" src={ clockIcon } alt="Clock" />
                    <span className="order-min--text">35 min</span>
                </div>
                <p>Choose time</p>
            </div>
        </div>
    )
}
