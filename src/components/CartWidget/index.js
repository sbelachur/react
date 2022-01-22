import React, {useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button, Badge } from 'react-bootstrap';
import {CartContext} from "../../context/CartContext"

function CartWidget () {
    const {items} = useContext(CartContext)

    const sumaItems = (items) => {
        var x = 0;
        for ( let i = 0; i < items.length; i++) {
            x = x + items[i].quantity;
        }
        return x;
    };
    
    if(items.length > 0 ) {
        return (
            <Button>
                <FontAwesomeIcon icon ={faShoppingCart} />
                <Badge>{sumaItems(items)}</Badge>

            </Button>
        );
    } else {
        return (
            <Button>
                <FontAwesomeIcon icon ={faShoppingCart} />
            </Button>
        )
    }

    }
    

export default CartWidget;