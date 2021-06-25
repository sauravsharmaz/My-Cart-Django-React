import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Rating from './Rating'

function SingleProduct({product}) {
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Img src={product.image} />
                <h1>{product.name}</h1>
                <p>{product.brand}</p><hr />
                <Card.Text>{product.desc}</Card.Text>
                <Rating value={product.rating} />
                <h2>${product.price}</h2>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default SingleProduct
