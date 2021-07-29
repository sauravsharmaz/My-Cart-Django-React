import React from 'react'
import {Card} from 'react-bootstrap'

function SingleProduct({product}) {
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Img src={product.image} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <h2>${product.price}</h2>
            </Card.Body>
        </Card>
        </>
    )
}

export default SingleProduct
