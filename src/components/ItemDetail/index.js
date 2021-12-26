import React from 'react';

const ItemDetail = ({
    id,
    title,
    description,
    category,
    pictureURL,
    price,
}) => {
    return (
        <div>
            <img src={pictureURL} />
            <section>
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>${price}</h2>
            </section>
        </div>
    );
};

export default ItemDetail