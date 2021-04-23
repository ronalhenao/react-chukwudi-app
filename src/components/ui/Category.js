import React from 'react';

export const Category = ({ name, icon }) => {
    return (
        <button className="category" value={ name }>
            <img className="category-icon" src={ icon } alt={ name } />
            <p>{ name }</p>
        </button>
    )
}
