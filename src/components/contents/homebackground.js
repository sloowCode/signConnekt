import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const homebackground =()=>{
    return(

        <div className="container-fluid center">

        <h1>Africa's No.1 Platform Connecting People With<br/>
                Qualified Sign Language Tutors Interpreters 
                <br/> and Sign Buddies Across The Globe
            </h1> 

                <Container>
                    <Row>
                        <Col className='butts'>
                        <Button  size="lg" className="one mb-2 ">
                            SEARCH
                        </Button>
                        </Col>
                    </Row>
                    
                        <p className='or'> <i>OR</i></p>
                        
                    
                    <Row>
                        <Col className='butts'>
                        <Button  size="lg" className=" two mb-2">
                            JOIN
                        </Button>
                        </Col>
                    </Row>
                </Container>
        </div>

    )}

    export default homebackground;