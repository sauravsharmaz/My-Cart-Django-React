import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Products from '../products'
import SingleProduct from '../components/SingleProduct'

function HomeScreen() {
    
    return (
        <Row>
            {Products.map(function (prod){
                return (
                    <Col key={prod._id} >
                        <SingleProduct product={prod}/>
                    </Col>
                )
            }) }
        </Row>
    )
}

export default HomeScreen
