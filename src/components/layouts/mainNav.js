import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logo2 from '../logo2.png';
import {Link, NavLink, withRouter} from 'react-router-dom';



 const mainNav = (props)=>{
        
     return (
         
                    
                    <Navbar className=" navbar-light" expand="lg" fixed="top">
                        <div className="container-fluid">
                            <Navbar.Brand href="#homePage"> <img src={Logo2}  height= "80" width= "120"/> </Navbar.Brand>
                            
                            <Nav className="ml-auto navbar-nav">
                                <Link to="/" exact className='nav-link main-links'>HOME</Link>
                                <Link to="/searchPage" className='nav-link main-links'>SEARCH</Link>
                                <Link to="/signUp" className='nav-link main-links'>JOIN</Link>
                                <Link to="/aboutPage" className='nav-link main-links'>ABOUT</Link>
                                
                            </Nav>
                   
                        </div>
                            
                    </Navbar>
                    
                        
                    
            )
 }
 export default withRouter(mainNav);