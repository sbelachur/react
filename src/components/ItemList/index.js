//mapear productos y devolver uno

import React from 'react';
import Item from '../Item';

const ItemList = ({items}) => {
    return (
        <section>
        {items?.map((item) => (
            <Item {...item} key={item.id} item= {items}/>
        ))}
        </section>

    );
};



export default ItemList
