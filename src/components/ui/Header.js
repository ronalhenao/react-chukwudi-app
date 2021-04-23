import React from 'react';
import { Search } from './Search';

export const Header = () => {
    return (
        <header className="d-flex flex-wrap flex-md-nowrap justify-content-between mb-5">
            <span className="navbar-brand">Chukwudi</span>
            <Search />
        </header>
    )
}
