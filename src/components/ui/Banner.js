import React from 'react';
import imageHeader from '../../assets/images/headerimage.png';
import arrowIcon from '../../assets/icons/arrow-right.svg';

export const Banner = () => {
    return (
        <section className="banner mb-5">
            <img className="banner-image" src={ imageHeader } alt="Chuckwudi" />
            <div className="banner-info">
                <h2 className="banner-title">$0 delivery for 30 days!</h2>
                <p>$0 delivery fee for orders over $10 for 30 days</p>
            </div>
            <div className="banner-btn">
                <a className="btn btn-link banner-btn--link" href="/">Learn more</a>
                <img className="banner-icon" src={ arrowIcon } alt="Learn more" />
            </div>

        </section>
    )
}
