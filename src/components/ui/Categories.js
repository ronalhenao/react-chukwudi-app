import React,{ useEffect, useState } from 'react';
import { Category } from './Category';

export const Categories = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('data/categories.json')
            .then(response => response.json())
            .then(data => setCategorias(data));
    }, []);

    return (
        <section className="categories mb-5">
            { categorias.map( item => 
                <Category 
                    key={ item.id }
                    { ...item }
                />
            ) }
        </section>
    )
}
