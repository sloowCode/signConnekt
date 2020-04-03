import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Kwaku from '../images/kwaku.jpg';

const profileviewContent =()=>{
    return(
        <div className="container profile-view">
            <div className="card main-card">
                <div className="card-body">
                <Row>
                    <Col>
                        <div className="card profile-img">
                            <img className="card-img-top" src={Kwaku} height='400' width='' />
                            <div className="card-body">
                                <span className="card-title"><LocationOnIcon className="action" style={{ fontSize: 25 }}/><p>EASTERN - REGION</p></span>
                                <p className="card-text">Am a sign language interpreter . I support the mission to promote 
                                                            sign language , and  am ready offer Home Tution , hangout with buddies  and available
                                                            for job Recruitments connected with sign language.<b><i>"Perceived Inabilities Can Blur out True Abilities".</i></b> YES WE CAN!!!</p>
                            </div>
                        </div>
                    </Col>
                    
                    <Col>
                        <div className="card profile-info">
                            <div className="card-body">
                                <h5 className="card-title">KWAKU BAAH</h5>
                                <p className="card-text">MALE - <i className='status'>Single</i></p>
                                <hr className='title-line'/>
                                
                                <div className="info">
                                    <Row>
                                        <Col md='12'><h1>AGE</h1></Col>
                                        <Col md='11' className='serv'><p>32Yrs</p></Col>
                                        <Col md='12'><h1>SERVICES</h1></Col>
                                        <Col md='11' className='serv'><p>Home Tution , Hangout, General Recruitments</p> </Col>
                                        <Col md='12'><h1>SIGN LANGUAGE</h1></Col>
                                        <Col md='11' className='serv'><p>ASL/BSL/GSL</p></Col>
                                    </Row>

                                    
                                        <h6>CONTACT DETAILS</h6>
                                        <hr className='title-line'/>
                                    <Row className='contact-info'>
                                        
                                        <Col md='12' className='serv2'><EmailIcon className="action" style={{ fontSize: 25 }}/><p>kkabshouseware@gmail.com</p></Col>
                                        <Col md='12' className='serv2'><PhoneIcon className="action" style={{ fontSize: 25 }}/><p>(+233) 055-223-6555 </p></Col>
                                        <Col md='12' className='serv2'><WhatsAppIcon className="action" style={{ fontSize: 25 }}/><p>(+233) 050-329-2799</p></Col>
                                        <Col md='12' className='serv2'><FacebookIcon className="action" style={{ fontSize: 25 }}/><p>facebook.com/Kwaku-Baah</p></Col>
                                         
                         
                          

                                    </Row>
                                    
                                </div>
                            </div> 
                            
                        </div>
                    </Col>
                </Row>
                    
                </div>
            </div>
            
        </div>
    )
}





export default profileviewContent;