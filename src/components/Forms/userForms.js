import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Kwaku from 'public/images/kwaku.jpg';


class  userForms extends Component {
    render(){
    return(
        <div className="user">
           <div className="card usercard">
               <div className='container-fluid'>
                    <div className="card-body">
                        <Row>
                            <Col><h5 className="card-title">MY PROFILE: <span>KWAKU BAAH</span></h5></Col>
                            <Col><h5 className='card-title right'> BASIC DETAILS</h5></Col>
                            
                            
                        </Row>
                        <hr className='userline'/>
                        <Container>
                            <Row>
                                <Col>
                                <figure className="figure">
                                    <img className="figure-img img-fluid" src='/images/kwaku.jpg' height='300' width='300' />
                                    <figcaption className="figure-caption"><p>Change Photo</p> <span><button className='picbutt'>BROWSE</button></span></figcaption>
                                </figure>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group >
                                            <Form.Label className='labels'>NAME</Form.Label>
                                            <Form.Control type="text" placeholder="Kwaku Baah" />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='labels'>EMAIL</Form.Label>
                                            <Form.Control type="text" placeholder="kkabshouseware@gmail.com" />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='labels'>PHONE</Form.Label>
                                            <Form.Control type="input" placeholder="(+233) 055-2236-555" />
                                            
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label className='labels'>WHATSAPP</Form.Label>
                                            <Form.Control type="input" placeholder="(+233) 050-3292-799" />
                                            <Form.Text className="text-muted mini-text">
                                            * Must accept video calls
                                            </Form.Text>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                        
                    </div>
               </div>
               
           </div>
                        <Container>
                            <Row className='aboutrow'>
                                <Col>
                                    <Form>
                                    <Form.Group >
                                        <Form.Label className='aboutlabels'>ABOUT</Form.Label>
                                        <Form.Control as="textarea" rows="7" placeholder='Write briefly about yourself here ....' />
                                    </Form.Group>
                                    </Form>

                                    <h5>Password Settings</h5>
                                    <hr className='userline'/>
                                    <Form>
                                    <Form.Group >
                                        <Form.Label className='aboutlabels'>OLD</Form.Label>
                                        <Form.Control type="Password"  placeholder='Password' />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label className='aboutlabels'>NEW</Form.Label>
                                        <Form.Control type="Password"  placeholder='New Password' />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label className='aboutlabels'>CONFIRM</Form.Label>
                                        <Form.Control type="Password"  placeholder='Confirm Password' />
                                    </Form.Group>
                                    </Form>
                                    

                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label className='rightlabels'>LOCATION</Form.Label>
                                            <Form.Control as="select">
                                            <option>Location</option>
                                            <option>Greater-Accra</option>
                                            <option>Ashanti Region</option>
                                            <option>Central Region</option>
                                            <option>Western Region</option>
                                            <option>Eastern Region</option>
                                            <option>Volta Region</option>
                                            <option>Northern Region</option>
                                            <option>Upper-East</option>
                                            <option>Upper-West</option>
                                            <option>Brong-Ahafo</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                            <Form.Label className='rightlabels'>GENDER</Form.Label>
                                            <Form.Control as="select" >
                                            <option>Male</option>
                                            <option>Female</option>
                                            
                                            </Form.Control>
                                        </Form.Group>
                                        <Row>
                                            <Col>
                                            <Form.Group >
                                                <Form.Label className='rightlabels'>AGE</Form.Label>
                                                <Form.Control type='text' placeholder='32'/>
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group controlId="exampleForm.ControlSelect2">
                                                <Form.Label className='rightlabels'>STATUS</Form.Label>
                                                <Form.Control as="select" >
                                                <option>Single</option>
                                                <option>Married</option>
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                            <Form.Label className='rightlabels'>SERVICES</Form.Label>
                                            <Form.Control as="select" >
                                            <option>Home Tution</option>
                                            <option>General Recruitment</option>
                                            <option>Hangout</option>
                                            <option>Any</option>
                                            
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                            <Form.Label className='rightlabels'>LANGUAGE TYPE</Form.Label>
                                            <Form.Control as="select" >
                                            <option>ASL</option>
                                            <option>BSL</option>
                                            <option>GSL</option>
                                            <option>Any</option>
                                            
                                            </Form.Control>
                                        </Form.Group>

                                    </Form>
                                    <hr className='sideline'/>
                                    <div className="userbutt">
                                        <button size='lg' className='update-butt'>UPDATE</button>
                                        <button size='lg' className='del-butt'>DELETE PROFILE</button>
                                    </div>
                                
                                </Col>
                            </Row>
                        </Container>


        </div>
    )}
}





export default userForms;