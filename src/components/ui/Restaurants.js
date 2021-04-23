import React from 'react';
import clockIcon from '../../assets/icons/clock.svg';

export const Restaurants = () => {
    return (
        <section className="rest d-flex justify-content-between align-items-center mb-5">
            <h2 className="title rest-title">Restaurants</h2>
            <div className="rest-dropdown">
                <button className="btn btn-primary rest-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="rest-icon" src={ clockIcon } alt="Clock Icon" />
                    Delivery: <strong>Now</strong>
                </button>
            </div>
        </section>
    )
}
