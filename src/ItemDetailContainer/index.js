import React, {useState, useEffect} from "react";
import {ItemDetail} from '../components/ItemDetail/index';
import {MockedItems} from '../mocks/MockedItems';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState (true);

    const {itemId} = useParams ();

    console.log(itemId);

    useEffect(() => {
        setLoading (true);
        const getItems = new Promise ((resolve) => {
            const myItems = MockedItems.find ((item) => item.id === itemId);

            resolve (myItems);
        }, 2000);

        getItems
        .then ((resolve) => {
            setProduct (resolve);
        })
        .finally (() => setLoading(false));
    }, [itemId]);

    return loading ? <h2>Cargando...</h2> : <ItemDetail {...product} />;
};

export default ItemDetailContainer