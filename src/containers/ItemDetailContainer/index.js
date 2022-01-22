import React, {useState, useEffect} from "react";
import {ItemDetail} from '../../components/ItemDetail/index';
import {MockedItems} from '../../mocks/MockedItems';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});

    const {itemId} = useParams ();

    useEffect(() => {
        const getItems = new Promise ((resolve, reject) => {
            const myItems = MockedItems.find ((item) => item.id === itemId);
            resolve (myItems);
        });

        getItems.then ((resolve) => {
            setProduct (resolve);
        });
    }, [itemId]);

    return <ItemDetail product= {product} />;
};

export default ItemDetailContainer