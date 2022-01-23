//contenedor de lista y cards
//llamada api o promesa
//manejo de estados
//traer 1 item list

import React from 'react'
import ItemList from '../../components/ItemList';
import MockedItems from '../../mocks/MockedItems';
import Loading from '../../components/Loading'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getFirestore } from '../../firebase';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {catId} = useParams ();

    useEffect(() => {
        // const bd = getFirestore ();
        // const itemCollection = bd.collection ("items");
        // itemCollection.get().then
        //     ((value) =>
        //         {let productos = value.docs.map((e) => {
        //             return {...e.data(), id: e.id};
        //         });
        //         setItems (productos)
        //         });
        // }, []);
        setLoading (true);
        const itemPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                const myItems = catId
                    ? MockedItems.filter (item => item.category === catId)
                    : MockedItems;

                resolve (myItems)
            }, 2000);
        });
        itemPromise.then((resolve) => {
            setItems (resolve);
        }).finally (() => setLoading(false));
    }, [catId]);

    return loading ? (
        <h2><Loading /></h2> ) : (
            <div>
                <ItemList items = {items}/>
            </div>
        )
        
};

export default ItemListContainer