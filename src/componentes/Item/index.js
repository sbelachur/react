//la card

import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Item = ({item}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.pictureURL} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Item
