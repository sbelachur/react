import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount';
import {cartContext} from '../../context/CartContext';
import {NavLink} from 'react-router-dom';
import {Container, Image, Row, Col, Button} from 'react-bootstrap';
import ItemDetailContainer from '../../containers/ItemDetailContainer';

const ItemDetail = ({product}) => {
    const precio = product.precio;
    const [carrito, setCarrito] = useState (false);
    const {producto, addCart} = useContext(cartContext);

    const agregarCarrito = (contador) => {
        const valor = precio * contador;

        setCarrito (true);
        addCart ({productos: product, cantidad: contador});
    };
    return (
        <>
        <Container>
            <Row>
                <Col>
                <Image src={product.image}></Image>
                </Col>
                <Col>
                <h2>{product.title}</h2>
                <h2>{product.price}</h2>
                <p>{product.description}</p>

                {agregarCart ? (
                    <Button as={NavLink} to="/cart">
                    Finalizar compra
                    </Button>
                ) : (
                    <ItemCount
                    precio={product.price}
                    agregarCarrito={agregarCarrito}
                    ></ItemCount>
                )}

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ItemDetail;