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
import Sso from '../images/sso.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import WorkIcon from '@material-ui/icons/Work';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Spinner from 'react-bootstrap/Spinner'

const homeContent =()=>{
    return(
        <div className="container-fliud center">
            
            
            

                <div className="container-fluid ">
                    <Container className="badges">
                        
                            <ul className='iconz'>
                                <li className='list-item'><Link to="/searchpage"><HomeWorkIcon className='icon1' color='action' style={{ fontSize: 90 }}/><p>Home Tution</p></Link></li>
                                <li className='list-item'><Link to="/searchpage"><WorkIcon className='icon2' color='action' style={{ fontSize: 90 }}/><p>General Recruitments</p></Link></li>
                                <li className='list-item'><Link to="/searchpage"><SportsKabaddiIcon className='icon3' color='action' style={{ fontSize: 90 }}/><p className='hang'>Hangout</p></Link></li>
                                
                                

                            </ul>
                            
                            
                            
                    
                                              
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
                            <Link to='/searchPage'><img className="card-img-top" src={Boy} alt="" /></Link>    
                            <div className="card-body">
                                <h5 className="card-title" variant='primary'>Kwame</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span> GREATER-ACCRA</p>
                            </div>
                            
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                        <Link to='/searchPage'><img className="card-img-top" src={Eye} alt="" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">Laser</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>ASHANTI-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                        <Link to='/searchPage'> <img className="card-img-top" src={SignL} alt="" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">Bernard</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>EASTERN-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                        <Link to='/searchPage'><img className="card-img-top" src={Hear} alt="" /></Link>
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
                        <Link to='/searchPage'><img className="card-img-top" src={Sign} alt="" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">Garry</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>OTI-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                        <Link to='/searchPage'><img className="card-img-top" src={Smile} alt="" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">Josephine</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>CENTRAL-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                        <Link to='/searchPage'> <img className="card-img-top" src={Es} alt="" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">Joseph</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>GREATER-ACCRA</p>
                            </div>
                            
                        </div>
                        </Col>
                        <Col>
                        <div className="card">
                        <Link to='/searchPage'><img className="card-img-top" src={Sss} alt="" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">Nakwa</h5>
                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span>WESTERN-REGION</p>
                            </div>
                            
                        </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>

                    <Jumbotron  className='container shine'>
                    <>
                    <Spinner animation="border" size="sm" variant="danger"/>
                    <Spinner animation="border" />
                    <Spinner animation="grow" size="sm" variant="danger"/>
                    <Spinner animation="grow" variant="success" />
                    </>
                        <Row className='shinerow'>
                            <Col md='7'>
                                    <h1>Hello, Lets ShiNe Together</h1>
                                <p>
                                    Support the <b><span>SiGn</span>-2-<span>ShiNe</span></b> campaigne , powered by <Link to=''>Nakwa Arms Foundation</Link> ,<br/> Together lets voice out and  promote
                                    the use  of  Sign language  and make  it a  common language in our society ,<br/> The barrier  between the hard hearing and the hearing can be broken <br/>
                                <i>"Perceived Inabilities Can Blur Out True Abilities "</i>.  The Deaf Can. Together We Can Shine!!!
                            
                                </p>
                                <p>
                                    <Button variant="danger">Support Us</Button>
                                </p>
                            </Col>
                            <Col md='5'>
                            <img className="card-img" src={Sso} width='' height='' />
                            </Col>
                        </Row>
                        
                    </Jumbotron>
                
               
 
                
        </div>
        

    )
}





export default homeContent;



