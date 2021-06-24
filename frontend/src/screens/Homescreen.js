import React from 'react'
import {Row} from 'react-bootstrap'
import Products from '../products'
import SingleProduct from '../components/SingleProduct'

function HomeScreen() {
    
    return (
        <Row>
            {Products.map(function (prod){
                return (
                    <SingleProduct product={prod}/>
                )
            }) }
        </Row>
    )
}

export default HomeScreen
