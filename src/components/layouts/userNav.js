import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Blackdeep from '../blackdeep.png';
import {Link, NavLink, withRouter} from 'react-router-dom';
import Kwaku from '../images/kwaku.jpg';



 const userNav = (props)=>{
        
     return (
          <Navbar className=" navbar-light" id='trans' expand="lg" >
                        <div className="container-fluid">
                            <Navbar.Brand href="#homePage"> <img src={Blackdeep}  height= "80" width= "120"/> </Navbar.Brand>
                            
                            <Nav className="ml-auto navbar-nav">
                                <Link to="/" className='nav-link'>HOME</Link>
                                <Link to="/searchPage" className='nav-link'>SEARCH</Link>
                                <Link to="/aboutPage" className='nav-link'>ABOUT</Link>
                                <img src={Kwaku} height='70' width='70'/>


                                
                                
                            </Nav>
                   
                        </div>
                            
                    </Navbar>
     )
 }
 export default withRouter(userNav);