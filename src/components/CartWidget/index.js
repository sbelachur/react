import React, {useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button, Badge } from 'react-bootstrap';
import {CartContext} from "../../context/CartContext"

const CartWidget = () => {
    const {items} = useContext(CartContext);
    let count = 0;

    items.map((item) => {
        count = count + item.quantity;
        return item;
    });

        return (
            <>
            {count !== 0 && (
                <Button>
                <FontAwesomeIcon icon ={faShoppingCart} />
                <Badge>{count}</Badge>
                </Button>

            )}
            </>
           
        );
    } 

export default CartWidget;