//contenedor de lista y cards
//llamada api o promesa
//manejo de estados
//traer 1 item list

import React from 'react'
import ItemList from '../componentes/ItemList';
import MockedItems from '../mocks/MockedItems';
import { useState, useEffect } from 'react'; 

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemPromise = new Promise ((resolve, reject) => {
            setTimeout(function (){
                resolve (MockedItems)
            }, 2000);
        });
        itemPromise.then((resolve) => setItems (resolve))
    }, [items]);

    return (
        <ItemList items = {items}/>
    )
};

export default ItemListContainer