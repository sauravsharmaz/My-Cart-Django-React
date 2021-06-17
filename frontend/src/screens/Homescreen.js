import Products from '../products'
import {Card,Col,Row} from 'react-bootstrap'

function Homescreen(){
    
    return(
        <div><Row>
            {
                Products.map(function (prod){
                    return (
                        <Col>
                        <Card className="py-5 mx-1" >
                            <Card.Img src={prod.image} />
                        <h1>{prod.name}</h1><hr/>
                        <Card.Text>
                            {prod.desc}
                        </Card.Text>
                        <h2>${prod.price}</h2>
                        </Card>
                        </Col>
                    )
                })
            }
        </Row>
        </div>
    )
}

export default Homescreen