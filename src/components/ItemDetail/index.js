import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount';
import {cartContext} from '../../context/CartContext';
import {NavLink} from 'react-router-dom';
import {Container, Image, Row, Col, Button} from 'react-bootstrap';
import ItemDetailContainer from '../../containers/ItemDetailContainer';

const ItemDetail = ({item}) => {
    
    const {addItem} = useContext(cartContext);

    const onAdd = (contador) => {
        addItem(item, cantidad);
    };

    return (
        <>
        <Container>
            <Row>
                <Col>
                <Image src={item.pictureURL}></Image>
                </Col>
                <Col>
                <h2>{item.title}</h2>
                <h2>{item.price}</h2>
                <ItemCoun stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                <h3>Descripción</h3>
                <p>{item.description}</p>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ItemDetail;