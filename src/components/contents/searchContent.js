import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Taught from '../images/taught.jpg';
import Container from 'react-bootstrap/Container';
import Os from '../images/os.jpg';
import Hair from '../images/hair.jpg';
import Is from '../images/is.jpg';
import Kwaku from '../images/kwaku.jpg';
import Boy from '../images/boy.jpg';
import Down from '../images/down.jpg';
import Black from '../images/black.jpg';
import Smile from '../images/smile.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const searchContent =()=>{
    return(
        <div className="mainsearch">
            <div className="card search">
                <div className="card-body">
                    <Row>
                        <Col><h1 className="card-text">FIND YOUR INTERPRETER/TUTOR NOW </h1></Col>
                        <Col className='searchimg'> <img src={Taught} height='350' width='600' /> </Col>
                    </Row>
                    
                    
                </div>
            </div>

            <div className="container-fluid searchfield">
            <Form>
                <Row>
                    <Col>
                        <Form.Group >
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
                    </Col>
                    <Col>
                    <Form.Group >
                            <Form.Control as="select">
                                    <option>Services</option>
                                    <option>Home Tution</option>
                                    <option>General Recruitment</option>
                                    <option>Hangouts</option>
                                    <option>Any</option>
                                    
                            </Form.Control>
                                
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group >
                            <Form.Control as="select">
                                    <option>Language Type</option>
                                    <option>ASL</option>
                                    <option>BSL</option>
                                    <option>GSL</option>
                                    <option>Any</option>
                                    
                            </Form.Control>
                                
                        </Form.Group>
                    </Col>
                </Row>

                <Button  size="lg" variant='secondary' className="butt ">
                        Explore
                </Button>
                <Button  size="lg" variant='info' className="resetbutt ">
                        Reset Filter
                </Button>
            </Form>
                
            </div>

            <hr className='searchline'/>

            <div className="container-fluid searchcard">
                <Container>
                    <Row>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Os} alt="" />    
                            <div className="card-body">
                                <h5 className="card-title" variant='primary'>Ben 
                                    <p className="card-textp"><span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>
                                     GREATER-ACCRA</p>
                                </h5>

                                <button size='lg' className='searchbutt'>CONTACT ME</button>


                                
                            </div>
                            
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Hair} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Laser <p className="card-textp">
                                    <span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>ASHANTI-REGION</p>
                                    </h5>
                                
                                <button size='lg' className='searchbutt'>CONTACT ME</button>

                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                           <Link to='/profileview'><img className="card-img-top" src={Kwaku} alt="" /></Link> 
                            <div className="card-body">
                                <h5 className="card-title">Kwaku<p className="card-textp">
                                    <span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>EASTERN-REGION</p>
                                </h5>
                                

                                <button size='lg' className='searchbutt'>CONTACT ME</button>

                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Is} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Simon<p className="card-textp">
                                    <span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>VOLTA-REGION</p>
                                    </h5>
                                

                                <button size='lg' className='searchbutt'>CONTACT ME</button>

                            </div>
                            
                        </div>
                        </Col>
                    </Row>

                    <Row className='second'>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Down} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Ladie<p className="card-textp">
                                    <span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>OTI-REGION</p>
                                </h5>
                                

                                <button size='lg' className='searchbutt'>CONTACT ME</button>

                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Boy} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Kwame<p className="card-textp">
                                    <span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>CENTRAL-REGION</p>
                                </h5>
                                

                                <button size='lg' className='searchbutt'>CONTACT ME</button>

                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Smile} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Josephine<p className="card-textp">
                                    <span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>GREATER-ACCRA</p>
                                </h5>
                                

                                <button size='lg' className='searchbutt'>CONTACT ME</button>

                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Black} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Zita<p className="card-textp">
                                    <span> <LocationOnIcon style={{ color: 'orangered', fontSize:15 }}/></span>WESTERN-REGION</p>
                                </h5>
                                

                                <button size='lg' className='searchbutt'>CONTACT ME</button>

                            </div>
                            
                        </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>

                <div className="container rowbadge">
                    <Link to=""> <span className="badge badge-light">1</span></Link>
                    <Link to=""> <span className="badge badge-light">2</span></Link>
                    <Link to=""> <span className="badge badge-light">3</span></Link>
                    <Link to=""> <span className="badge badge-light">4</span></Link>
                    <Link to=""> <span className="badge badge-light">5</span></Link>
                </div>
            
            
            
            
        </div>
    )
}





export default searchContent;