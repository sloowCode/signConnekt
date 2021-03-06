import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, NavLink, withRouter} from 'react-router-dom';

 import {
  Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle 
} from 'reactstrap';

import Logo from '../logo2.png';
// import Hear from 'public/images/hear.jpg';
// import Boy from 'public/images/boy.jpg';
// import Eye from 'public/images/eye.jpg';
// import SignL from 'public/images/signL.jpg';
// import Sign from 'public/images/sign.jpg';
// import Sss from 'public/images/sss.jpeg';
// import Es from 'public/images/es.png';
// import Smile from 'public/images/smile.jpg';
// import Sso from '../images/sso.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import WorkIcon from '@material-ui/icons/Work';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Spinner from 'react-bootstrap/Spinner'

const homeContent =({profiles})=>{
    return(
        <div className=" center">
            
                
                    
                        
            <div className=" container home-icons">
                <div className='sign-icons'>
                        <div className='icon1'><Link to=''><p>Hire An Interpreter For Your Work & Events</p></Link><img src='/images/1.png' width='200' height='300'/></div>
                        <div>
                            <Row>
                                <Col md='3' className='icon2'><Link to=''><p>Learn Sign Language In Your Comfort Zone</p></Link><img src='/images/icon2.jpg'  width='250' height='300'/></Col>
                               <Col md='6'> 
                                    
                                    <h5 className="card-title"><h1>Join The Sign Language Community <br/> Enjoy The Experience Of New Discoveries                                     
                                
                                         </h1> 
                                    </h5>
                                </Col>
                                <Col md='3' className='icon3'><Link to=''><p>Meet Your Sign Buddy Today</p></Link><img src='/images/icon3.png' width='290' height='340'/></Col>
                            </Row>
                        
                        </div>

                 </div>
            </div>                            
                    <div className='Container-fluid questions'>
                        <Row className='row'>
                            <Col md='4' className='first'>
                                <h5><b>What Do You Do When You Meet The Deaf?</b></h5>
                                <h5><b>Are A Business Or Organisation?</b>How Do You Communicate With Your Deaf 
                                Clients Or Interact with  the deaf community in your business? </h5>
                                <h5><b>Are You A Parent Of The Deaf?</b> How Do You Exchange Meaningful thoughts 
                                ideas and emotions to your child? How well do you know them and their potentials? </h5>
                            </Col>
                            <Col md='3' className='middle'><h2>Add Value To Your Life,Work & Career</h2><p>Start communicating with the deaf  . Start having meaningful conversations with your 
                            deaf buddies and loved ones .Enjoy being able to understand deaf clients and prospects. Be the one the deaf can rely on.
                             Involve sign language in your business and Increase your market scale & credibilty . 
                              <br/><b>Stand Out !</b> </p>
                             <button>Start Now</button>
                             </Col>
                            <Col md='5'><img src='/images/blackdeaf.jpg ' width='610' height='560' ></img></Col>
                        </Row>

                    </div>
                     
                    <Container>
                         <Row>
                            <Col>
                            <p className='searchTitle'> MEET AN INTERPRETER NEAR YOU READY TO HELP YOU  </p>
                            </Col>
                         </Row>
                         
                    </Container>
                      <hr className='homeline'/>    
                
                 

            <div className="container-fluid homecard">

                            <Container>
                                <Row> 
                            
                                    {profiles&&profiles.map(profile=>{
                                     return(
                                        <div className="card home-card" key={profile.id}>
                                            <Link to='/searchPage'><img className="card-img-top" src={profile.img}  /></Link>    
                                            <div className="card-body">
                                                <h5 className="card-title" variant='primary'>{profile.name}</h5>
                                                <p className="card-text"><span> <LocationOnIcon style={{ color: 'orangered' }}/></span> {profile.location}</p>
                                            </div>
                                    
                                    
                                        </div>
                                        )}
                                    )}
                                </Row>
                            </Container>        
                                                     
            </div>
                
                
              <div className='container-fluid '>
                  <p className='home-comment'><b>"</b> I have been over protective of my daughter and it has remained this way since her infancy 
                  I have always felt insecured  and scared because of her hearing disabilities. Trying to know how she felt and whats she is thinking has been
                  a major challenge for both us and has always left worry and boredom at home. 
                  After learning sign langauge with Sandy , every thing has turnout so different and easy now . I feel very close to my 
                   daughter now and We can have good conversations always and exchange emotions and thoughts . I  understand her now and am not over protective anymore because i know her capabilities.
                   We are very happy now .Sign Language is a blessing for both hearing and deaf .
                   <b>"</b>  <p className='commentName'>Shawna Wray</p></p> 
              </div>         
                            
                                                  
                             
                    
                   
                 
                
            
                <div className=''>
                    <div  className=' card shine'>
                    
                    
                        <div className='card-body'>
                            <Row className='shinerow'>
                                <Col md='5' className='logo'>
                                {/* <img className="card-img boy-img" src='/images/boysign.jpg' width='' height='' /> */}
                                <img className="card-img" src='/images/shine1.png' width='' height='' />
                                <p className='logo-motto'>This campaign is committed to promote the use of sign langauge in Ghana&Africa to 
                                    break the barrier between the hearing and deaf and discover new opportinities</p>
                                </Col>
                                
                                <Col md='7'>
                                   <div className='shine-motto'>
                                        
                                        {/* <img className="card-img" src='/images/shine1.png' width='' height='' /> */}
                                        <h1>Join The Sign2Shine Campaign</h1>
                                        <p>Learn All The Basics You Need To Communicate With The Deaf for Free </p>
                                        <p>Take Advantage Of the 1month Free Signlanguage Training For Organizations</p>
                                        <p>Learn About The Deaf Community & Culture </p>
                                        <p>Learn How To Interact With The Deaf And Win Deaf Customers</p>
                    
                                        <Button variant="danger">Get Started</Button>
                                        
                                    </div>
                                </Col>
                            
                            </Row>
                        </div>
                        
                    </div>
                </div>
               
 
                
        </div>
        

    )
}





export default homeContent;



