import React, { useEffect, useState } from 'react';
import { Product } from './Product';

export const ProductList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('data/products.json')
            .then(response => response.json())
            .then(data => setProductos(data));
    }, []);

    return (
        <section className="products row">
            { productos.map( item =>
                <Product 
                    key={ item.id } {...item}
                />
            ) }
        </section>
    )
}
