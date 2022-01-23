import React, {useState, useEffect} from "react";
import {ItemDetail} from '../../components/ItemDetail/index';
import {MockedItems} from '../../mocks/MockedItems';
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState (true);
    const {itemId} = useParams ();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise ((resolve, reject) => {
            setTimeout (() => {
                const myItems = MockedItems.find ((item) => item.id === itemId);
            resolve (myItems);
            }, 2000);
            
        });

        getItems.then ((resolve) => {
            setProduct (resolve);
        }).finally (() => setLoading (false));
    }, [itemId]);

    return loading ? (
    <h2><Loading /></h2>) : (
        <div>
        <ItemDetail product= {product} />
        </div>

    )

    
};

export default ItemDetailContainer