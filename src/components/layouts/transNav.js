import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Blackdeep from '../blackdeep.png';
import {Link, NavLink, withRouter} from 'react-router-dom';



 const transNav = (props)=>{
        
     return (
         
                    
                    <Navbar className=" navbar-light" id='trans' expand="lg" >
                        <div className="container-fluid">
                            <Navbar.Brand href="#homePage"> <img src={Blackdeep}  height= "80" width= "120"/> </Navbar.Brand>
                            
                            <Nav className="ml-auto navbar-nav">
                                <Link to="/" className='nav-link'>HOME</Link>
                                <Link to="/login" className='nav-link'>LOGIN</Link>
                                <Link to="/signUp" className='nav-link'>JOIN</Link>
                                <Link to="/aboutPage" className='nav-link'>ABOUT</Link>
                                
                            </Nav>
                   
                        </div>
                            
                    </Navbar>
                    
                    
                        
                    
            )
 }
 export default withRouter(transNav);