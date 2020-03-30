import React from 'react';
import Teach from '../images/teach.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blackdeep from '../blackdeep.png';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const loginForms =()=>{
    return(
        <div className="container-fluid imgfield ">
            <Row>
                
                <Col>
                
                    <div className="card logincard">
                        <div className="card-body" >
                            <img src={Blackdeep} height= "150" width= "210"/>
                            <Form >
                                <Form.Group  controlId="formHorizontalFirst">
                                
                                    <Form.Control type="text" size='lg'  placeholder="EMAIL" />
                                    <Form.Control type="password" size='lg'  placeholder="PASSWORD" />
                                    <Row>
                                        <Col>
                                            <Form.Text className="text-muted">
                                            <Link to=''>Forgot Password ?</Link>
                                            </Form.Text>
                                        </Col>
                                        <Col>
                                            <Form.Check type="checkbox" label="Remember Password" />
                                        </Col>
                                    </Row>
                                
                                </Form.Group>
                                
                                <Button  size="lg" variant='danger' className="butt ">
                                LOG IN
                                </Button>
                                
                            </Form>
                            <p>Dont Have An Account ?<span><Link to='' style={{ color: 'red' }}> SIGN UP</Link></span> </p>

                        </div>
                    </div> 
                </Col>

            </Row>

            
            
           
        </div>
    )
}





export default loginForms;