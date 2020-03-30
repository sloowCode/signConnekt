import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, NavLink, withRouter} from 'react-router-dom';
import Logo from '../logo2.png';
import Hear from '../images/hear.jpg';
import Boy from '../images/boy.jpg';
import Eye from '../images/eye.jpg';
import SignL from '../images/signL.jpg';
import Sign from '../images/sign.jpg';
import Sss from '../images/sss.jpeg';
import Es from '../images/es.png';
import Smile from '../images/smile.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const homeContent =()=>{
    return(
        <div className="container-fliud center">
            
            
            

                <div className="container-fluid ">
                    <Container className="badges">
                        <Row>
                            <Col>
                            <Link to="/searchpage"> <span className="badge badge-dark">HOME TUTION</span></Link>
                            </Col>
                            <Col>
                            <Link to="/searchpage"> <span className="badge badge-dark">JOB RECRUITMENT</span></Link>
                            </Col>
                            <Col>
                            <Link to="/searchpage"> <span className="badge badge-dark">HANGOUT</span></Link>

                            </Col>
                        </Row>
                                              
                     </Container>
                     <Container>
                         <Row>
                            <Col>
                            <p className='searchTitle'>FIND YOUR SIGN TUTORS INTERPRETERS AND SIGN BUDDIES NOW</p>
                            </Col>
                         </Row>
                         
                         
                     </Container>
                      <hr className='homeline'/>    
                </div>
                 

            <div className="container-fluid homecard">
                <Container>
                    <Row>
                        <Col>
                        <div className="card">
                            <Link to='/searchPage'><img className="card-img-top" src={Boy} alt="" />    
                            <div className="card-body">
                                <h5 className="card-title" variant='primary'>Kwame</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span> GREATER-ACCRA</p>
                            </div>
                            </Link>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Eye} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Laser</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>ASHANTI-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={SignL} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Bernard</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>EASTERN-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Hear} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Simon</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>VOLTA-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                    </Row>

                    <Row className='second'>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Sign} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Garry</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>OTI-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Smile} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Josephine</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>CENTRAL-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Es} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Joseph</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>GREATER-ACCRA</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                            <img className="card-img-top" src={Sss} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Nakwa</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>WESTERN-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
                
               
 
                
        </div>
        

    )
}





export default homeContent;



