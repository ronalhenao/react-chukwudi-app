import React from 'react';
import { Banner } from './Banner';
import { Categories } from './Categories';
import { Header } from './Header';
import { ProductList } from './ProductList';
import { Restaurants } from './Restaurants';
import { Sidebar } from './Sidebar';

export const Ui = () => {
    return (
        <div className="ui-main container-fluid">
            <div className="row">
                <main className="ui-main-content col-md-8">
                    <Header />
                    <Banner />
                    <Restaurants />
                    <Categories />
                    <ProductList />
                </main>
                <Sidebar />
            </div>
        </div>
    )
}
