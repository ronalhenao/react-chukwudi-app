import React from 'react';
import searchIcon from '../../assets/icons/search.svg';

export const Search = () => {
    return (
        <form className="d-flex search">
            <span className="search-icon">
                <img className="search-icon--i" src={ searchIcon } alt="Search" />
            </span>
            <input 
                type="search" 
                className="search-input" 
                placeholder="Search"
            />
        </form>
    )
}
