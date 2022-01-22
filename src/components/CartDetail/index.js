import React, { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import { Button} from "react-bootstrap";

const CartDetail = () => {
    const {item} = useContext (CartContext);

    const totalItems = (item) => {
        return item.product.price * item.quantity
    };

    const totalPrice = (item) => {
        var total = 0;
        for (let i = 0; i < item.length; i++) {
            total = total + item[i].product.price * item[i].quantity;
        }
        return total;
    };

    return (
        <>
        {item.map((item)=>{
        return (
            <tr>
                <td>{item.product.title}</td>
                <td>{item.quantity}</td>
                <td>{item.product.price}</td>
                <td>{totalItems(item)}</td>
                <td><Button>Eliminar</Button></td>
            </tr>
        );
        })}

            <td>
                <p>Precio Final</p>
            </td>
            <td>
                {totalPrice (item)}
            </td>
        </>
    )

    
}

export default CartDetail;