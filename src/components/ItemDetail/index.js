import React from 'react';
import Cart from '../Cart';

function ItemDetail ({product}) {

    const {id, title, description, category, pictureURL, price} = product;
    
    return (
        <div>
            <img src={pictureURL} />
            <section>
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>${price}</h2>
            </section>
            <Cart/>
        </div>
    );
};

export default ItemDetail