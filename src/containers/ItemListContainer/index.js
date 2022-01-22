//contenedor de lista y cards
//llamada api o promesa
//manejo de estados
//traer 1 item list

import React from 'react'
import ItemList from '../../components/ItemList';
import MockedItems from '../../mocks/MockedItems';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    // const {catId} = useParams ();

    useEffect(() => {
        const bd = getFirestore ();
        const itemCollection = bd.collection ("items");
        itemCollection.get().then
            ((value) =>
                {let productos = value.docs.map((e) => {
                    return {...e.data(), id: e.id};
                });
                setItems (productos)
                });
        }, []);

    //     const itemPromise = new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //             const myItems = catId
    //                 ? MockedItems.filter (item =>
    //                 item.category === catId)
    //                 : MockedItems;

    //             resolve (myItems)
    //         }, 2000);
    //     });
    //     itemPromise.then((resolve) => {
    //         setItems (resolve);
    //     });
    // }, [catId]);

    return (
        <ItemList items = {items}/>
    )
};

export default ItemListContainer