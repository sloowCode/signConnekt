import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const contactContent =()=>{
    return(
        <div className="contact-content">
            <div className=" card">
                <div className="container card-body">
                    <Row>
                        <Col md='6'>
                            <h1>GET IN TOUCH</h1>
                            <p>
                                We are very approachable and would love to get in touch with you .
                                Feel <br/>free to call , send  us an email or simply complete  the enquiry form.</p>

                            <Row className='contactinfo'>
                                <Col md='2'><PhoneIcon className="action" style={{ fontSize: 35 }}/></Col>
                                <Col md='10'><p>(+233) 050-329-2799 </p></Col>
                                
                                <Col md='2'><EmailIcon className="action" style={{ fontSize: 35 }}/></Col>
                                <Col md='10'><p>info@signconnekt.com</p></Col>
                                
                                <Col md='2'><FacebookIcon className="action" style={{ fontSize: 35 }}/></Col>
                                <Col md='10'><p>Facebook.com/SIGN-CONNEKT</p></Col>
                                
                                <Col md='2'><LinkedInIcon className="action" style={{ fontSize: 35 }}/></Col>
                                <Col md='10'><p>linkedin.com/in/sign-connekt-227593190/</p></Col>
                                
                            </Row>


                            
                        </Col>
                        
                          
                        <Col md='6'>
                        <h1>SEND US A MESSAGE</h1>
                        <Form className='contactforms'>
                                <Form.Group  >
                                
                                    <Form.Control type="text" size='lg'  placeholder="YOUR NAME" />
                                    <Form.Control type="email" size='lg'  placeholder="EMAIL ADDRESS" />
                                    <Form.Control type="text" size='lg'  placeholder="TELEPHONE NUMBER" />
                                    <Form.Control as="textarea" size='lg' rows='3' placeholder="YOUR MESSAGE" />
                                    
                                
                                </Form.Group>
                                
                                <Button  size="lg" variant='danger' className="butt ">
                                SEND MESSAGE
                                </Button>
                                
                            </Form>
                        
                        </Col>
                    </Row>
                </div>
            </div>
            <p className='copyrite'>&copy;2020 <span>si<b>G</b>n Connekt</span> .All Rights Reserved</p>
        </div>
    )
}





export default contactContent;