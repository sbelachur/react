import React from 'react';
import { Button } from 'react-bootstrap';

function Cart () {
    const addCart = () => {
        alert (`Agregaste el producto a tu carrito`);
    }

    return <Button onClick={addCart}>Agregar al Carrito</Button>
}

export default Cart