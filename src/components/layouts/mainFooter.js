import React from 'react';
import White from '../whitedeep.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon } from '@material-ui/core';



const mainFooter =()=>{
    return(
        
        <footer>
            <div className="container-fluid">
            <Row className='footcontent'>
                    <Col md='4' className='lane1'>
                    <img src={White} className='footimage' height= "105" width= "160"/>
                    
                    <p id='copyright'>Africa's No.1 Platform Connecting People With<br/>
                    Qualified Sign Language Tutors,Interpreters 
                    <br/> and Sign Buddies Across The Globe</p>

                    <p>&copy;2020 <span>si<b>G</b>n Connekt</span> .All Rights Reserved</p>
                    </Col>
                
                    <Col md='4' className='lane2'>
                    
                    <ul>
                        <h1>si<b>G</b>n Connekt</h1>
                        <hr/>
                        <Link to='/aboutPage'>ABOUT</Link>
                        <hr/>
                        <Link to='/contactPage'>CONTACT</Link>
                        <hr/>
                        <Link to='/signUp'>JOIN</Link>
                        <hr/>
                        
                    </ul>
                   
                    </Col>
               
                    <Col md='4' className='lane3'>
                        <h2>Keep Connected</h2>
                        <ul class="icons ">
                        <span><Link to=''><FacebookIcon className="action" style={{ fontSize: 45 }}/></Link></span>  
                         <span><Link to=''><InstagramIcon className="action" style={{ fontSize: 45 }}/></Link></span> 
                        <span><Link to=''><TwitterIcon className="action" style={{ fontSize: 45 }}/></Link></span>
                       <span> <Link to=''><LinkedInIcon className="action" style={{ fontSize: 45 }}/></Link></span> 
                          
                          
                            
                           
                        </ul>
                        
                    </Col>
                </Row>
            
            
            </div>
                

        </footer>
        
    )
}













 





export default mainFooter;





