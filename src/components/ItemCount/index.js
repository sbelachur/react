import React, {useState} from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';

const ItemCount = ({agregarCarrito}) => {
    const [contador, setContador] = useState (1);

    const onAdd = () => {
        agregarCarrito (contador);
    };

    return (
        <>
        <ButtonGroup>
            <Button onClick ={contador > 1 ? () => {
                setContador(contador - 1);
            }
            : () => {
                setContador(contador);
            }
            }
            >
            </Button>
            <Button>
                {contador}
            </Button>
        </ButtonGroup>
        <Button onClick={onAdd}>
            Agregar
        </Button>

        </>
    )
}

export default ItemCount;