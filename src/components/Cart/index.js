import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = ({item, removeItem, addItem}) => {
    return (
        <div>
            <h2>
                {item.title} - cantidad: {item.number}
            </h2>
            <div>
                <Button onClick={() => addItem (item.id)}> Agregar al Carrito </Button>
                <Button onClick={() => removeItem (item.id)}>Borrar Producto</Button>
            </div>
        </div>
    );
};

// function Cart () {
//     const addCart = () => {
//         alert (`Agregaste el producto a tu carrito`);
//     }

//     return <Button onClick={addCart}>Agregar al Carrito</Button>
// }

export default Cart