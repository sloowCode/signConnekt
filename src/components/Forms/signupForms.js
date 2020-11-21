import React from 'react';
import Blackdeep from '../blackdeep.png';
import Signhands from '../signhands.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';




const signupForms =()=>{
    return(
        <div className="container sign ">
            
            <p> Are You A Sign Language Interpreter Or Tutor ? You Are Just A Step Away From
                Getting New Job Opportunities And Meeting New People. Join Now And Meet
                People Across The Globe Awaiting Your Services. </p>
            {/* <Row> */}
                {/* <Col md=''> */}
                {/* <div className='sideimg'>
                <img src={Signhands} height='200' width='1200'/>
                </div> */}
                    
                {/* </Col> */}
                {/* <Col md=''> */}
                <div className="card">
                <img  src={Blackdeep} height='120' width='180' />
                <div className="card-body">
                    <Row>
                        <Col > <hr/> </Col>
                        <Col ><h5 className="card-title">Create Account</h5></Col>
                        <Col > <hr/> </Col>
                    </Row>

                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalFirst">
                            <Form.Label column sm={2}>
                            FIRST NAME
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" size='lg'  placeholder="First Name" />
                            </Col>
                        </Form.Group>
                        
                    
                        <Form.Group as={Row} controlId="formHorizontalLast">
                            <Form.Label column sm={2}>
                            LAST NAME
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" size='lg'  placeholder="Last Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            EMAIL
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" size='lg'  placeholder="email@example.com" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalPhone">
                            <Form.Label column sm={2}>
                            PHONE
                            </Form.Label>
                            <Col sm={4}>
                            <Form.Control type="text" size='lg'  placeholder= '(000)000 0000'/>
                            </Col>
                            <Form.Label column sm={2}>
                            WHATSAPP
                            </Form.Label>
                            <Col sm={4}>
                            <Form.Control type="text" size='lg'  placeholder= '(000)000 0000'/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            PASSWORD
                            </Form.Label>
                            <Col sm={4}>
                            <Form.Control type="password" size='lg'  placeholder="Password" />
                            </Col>
                            <Form.Label column sm={2}>
                            CONFIRM
                            </Form.Label>
                            <Col sm={4}>
                            <Form.Control type="password" size='lg'  placeholder="Password" />
                            </Col>
                        </Form.Group>
                        
                        <hr/>
                        <Form.Group as={Row} >
                            
                                <Col >
                                <h1 className='signtext'>You Are Almost Done!</h1>
                                </Col>
                                <Col>
                                    
                                    <Link to='/userprofile'><Button  size="lg" variant='danger' className="formbutt ">Get Started</Button> </Link>
                                    
                                    
                                </Col>

                                <p></p>
                            
                        </Form.Group>
                        <Row className='signrow'>
                            <Col md='3'> <hr/> </Col>
                            <Col md='6'><p className='signP'>Already A Member ?<span>
                                <Link to='./login' style={{ color: 'red' }}> LOG IN</Link></span> </p>
                            </Col>
                            <Col md='3'> <hr/> </Col>
                        </Row>
                        
                        

                    </Form>
                    
                   
                </div>
            </div>
                {/* </Col> */}
        {/* </Row> */}
            
        </div>
    )
}





export default signupForms;