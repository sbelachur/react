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
            <Button onClick={quitarItem} disabled={contador===0}>-</Button>
            <p>{contador}</p>
            <Button onClick={agregarItem} disabled={contador===0}>+</Button>
        </div>
        <div>
            <Button onClick={() => onAdd(contador)} disabled={contador===0}>Agregar al carrito</Button>
        </div>
    
        </>
    )
}

export default ItemCount;