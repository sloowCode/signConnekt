import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
// import {Slider , Slide , Caption} from 'react-materialize';
// import M from 'materialize-css';



const homebackground =()=>{
    return(

        <div className="container-fluid center">
        {/* <div className=" ">
                     
                     <Slider
                      fullscreen={false}
                      options={{
                        duration: 500,
                        height: 700,
                        indicators: true,
                        interval: 6000
                      }}
                    >
                      <Slide image={<img alt="" src='/images/hand.jpg'/>}>
                        <Caption placement="center">
                        <h1>Africa's No.1 Platform Connecting People With<br/>
                            Qualified Sign Language Tutors Interpreters 
                            <br/> and Sign Buddies Across The Globe
                        </h1> 
                        <Row>
                            <Col className='butts'>
                            <Link to='/searchPage'> <Button  size="lg" className="one mb-2 ">
                                SEARCH
                            </Button></Link>
                            </Col>
                         </Row>
                            <p className='or'> <i>OR</i></p>
                        <Row>
                            <Col className='butts'>
                            <Link to='/signUp'><Button  size="lg" className=" two mb-2">
                                JOIN
                            </Button></Link>
                            </Col>
                        </Row>

                        </Caption>
                      </Slide>
                      <Slide image={<img alt="" src='/images/teacher.jpg'/>}>
                        <Caption placement="left">
                        <h1>Meet Thousands of Qualified Sign Language Interpreters And Buddies Near You  
                        <br/>Who Are Ready To Help You And Hangout
                        </h1>
                        <Row>
                            <Col className='butts'>
                            <Link to='/searchPage'> <Button  size="lg" className="one mb-2 ">
                                SEARCH
                            </Button></Link>
                            </Col>
                         </Row>
                        </Caption>
                      </Slide>
                      <Slide image={<img alt="" src='/images/sss.jpg' />}>
                        <Caption placement="right">
                        <h1>Are You A Sign Language Interpreter Or Sign Buddy ? You Are Just A Step Away From Getting New Job Opportunities And Meeting New People.<br/>
                         Join Now And Meet People Across The Globe Awaiting Your Services.
                        </h1>

                        <Row>
                            <Col className='butts'>
                            <Link to='/signUp'><Button  size="lg" className=" two mb-2">
                                JOIN
                            </Button></Link>
                            </Col>
                        </Row>
                        </Caption>
                      </Slide>
                      
                      <Slide image={<img alt="" src='/images/hand.jpg'/>}>
                      <h1>Africa's No.1 Platform Connecting People With<br/>
                            Qualified Sign Language Tutors Interpreters 
                            <br/> and Sign Buddies Across The Globe
                        </h1> 
                      </Slide>
                    </Slider>
                             
                    </div> */}

         <h1>Africa's No.1 Platform Connecting People With<br/>
                Qualified Sign Language Tutors Interpreters 
                <br/> and Sign Buddies Across The Globe
            </h1> 

                <Container>
                    <Row>
                        <Col className='butts'>
                        <Link to='/searchPage'> <Button  size="lg" className="one mb-2 ">
                            SEARCH
                        </Button></Link>
                        </Col>
                    </Row>
                    
                        <p className='or'> <i>OR</i></p>
                        
                    
                    <Row>
                        <Col className='butts'>
                        <Link to='/signUp'><Button  size="lg" className=" two mb-2">
                            JOIN
                        </Button></Link>
                        </Col>
                    </Row>
                </Container> 
        </div>

    )}

    export default homebackground;