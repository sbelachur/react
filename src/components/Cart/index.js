import React, {useContext} from 'react';
import { Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import CartDetail from '../CartDetail';

const Cart = () => {
    const {item, setItem, clearCart} = useContext (CartContext);

    const onClear = () => {
        clearCart ();
    };

    if (item.length > 0) {
        return (
            <>
            <Table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    <CartDetail />
                </tbody>
            </Table>
            <Button onClick={onClear}>Borrar productos del Carrito</Button>
            </>
        );
    } else {
        return (
            <>
            <div>
                No hay productos en el Carrito
            </div>
            <div>
                <NavLink to="/">Seguir Comprando</NavLink>
            </div>
            </>
        )
    }
}


export default Cart