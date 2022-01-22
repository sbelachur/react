//la card

import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
    return (
        <>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={item.pictureURL} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description} {item.price}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
                <Link to= {`/product/${item.id}`}>Más Info</Link>
            </Card>
        </>
        
    );
}


export default Item
