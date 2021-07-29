import React from 'react'
import Products from '../products'
import SingleProduct from '../components/SingleProduct'
import {Row,Col} from 'react-bootstrap'

function Homescreens() {
    return (
        <div>
            <Row>
            {Products.map(showProduct)}
            </Row>
        </div>
    )
}

function showProduct(product) {
    return (
        <Col>
            <SingleProduct product= {product} />
        </Col>
    )
}

export default Homescreens
