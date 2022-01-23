import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState (0);

    const agregarItem = () => {
        if(contador<stock) {
            setContador(prevContador => prevContador+1)
        }
    }

    const quitarItem = () => {
        if(contador>0) {
            setContador(prevContador=> prevContador-1)
        }
    }

    return (
        <>
        <div>
            <Button onClick={quitarItem}>-</Button>
            <p>{contador}</p>
            <Button onClick={agregarItem}>+</Button>
        </div>
        <div>
            <Button onClick={() => onAdd(contador)}>Agregar al carrito</Button>
        </div>
    
        </>
    )
}

export default ItemCount;