import React from 'react';
import {Row, Col} from 'react-bootstrap';


function Category ({category}) {
    return (

        <Row>
            <Col>
                <h3>
                    <a href= {category.title?`/Productos/${category.title}`:'/Products'}>
                        {category.title}
                    </a>
                </h3>
            </Col>
        </Row>

    )
}

export default Category;