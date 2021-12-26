//contenedor de lista y cards
//llamada api o promesa
//manejo de estados
//traer 1 item list

import React from 'react'
import ItemList from '../components/ItemList';
import MockedItems from '../mocks/MockedItems';
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {catId} = useParams ();

    useEffect(() => {
        const itemPromise = new Promise ((resolve) => {
            setTimeout(() => {
                const myItems = catId 
                    ? MockedItems.filter (item => 
                    item.category === catId)
                    : MockedItems;

                resolve (myItems)
            }, 2000);
        });
        itemPromise.then((resolve) => {
            setItems (resolve);
        });
    }, [catId]);

    return (
        <ItemList items = {items}/>
    )
};

export default ItemListContainer