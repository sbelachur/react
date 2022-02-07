import React, {useContext} from 'react';
import { Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import CartDetail from '../CartDetail';

const Cart = () => {
    const {items, removeItem, clearCart, totalItems} = useContext (CartContext);

    const onClear = clearCart ();

    const total = totalItems ();

    return (
        <div>
            {items.length > 0 ? (
                <>
                {items.map ((producto) => {
                    return <CartDetail 
                    key={producto.item.id}
                    productos={producto}
                    removeItem={removeItem}/>
                })}
                <p>Total: ${total}</p>
                <Button onClick={onClear}>Borrar productos del Carrito</Button>
                <NavLink to="/">Seguir Comprando</NavLink>
                <NavLink to={`/formulario`}>
                    <Button>Finalizar Compra</Button>
                </NavLink>
                </>
            ) : (
                <>
                <h2>No hay productos en el carrito</h2>
                <NavLink to="/">Seguir Comprando</NavLink>
                </>
            )}
        </div>
    )
    } 




export default Cart