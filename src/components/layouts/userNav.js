import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'

import Blackdeep from '../blackdeep.png';
import {Link, NavLink, withRouter} from 'react-router-dom';
// import Kwaku from '../images/kwaku.jpg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



 const userNav = (props)=>{
        
     return (
            <Navbar className="usernav navbar-light" id='trans' expand="lg" >
                        <div className="container-fluid">
                            <Navbar.Brand href="#homePage"> <img src={Blackdeep}  height= "80" width= "120"/> </Navbar.Brand>
                            
                            <Nav className="ml-auto navbar-nav">
                                <Link to="/" className='nav-link'>HOME</Link>
                                <Link to="/searchPage" className='nav-link'>SEARCH</Link>
                                <Link to="/aboutPage" className='nav-link'>ABOUT</Link>
                                <img src="/images/kwaku.jpg" height='70' width='70'/>
                                <Dropdown className='arrowdown'>
                                    <Dropdown.Toggle variant="secondary" size='sm'title='lg' id="dropdown-basic">
                                        
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/userprofile">Edit profile</Dropdown.Item>
                                        <Dropdown.Item> <Link to="/login">Logout</Link> </Dropdown.Item> 
                                        
                                    </Dropdown.Menu>
                                </Dropdown>
                                    


                                
                                
                            </Nav>
                   
                        </div>
                            
                    </Navbar>
     )
 }
 export default withRouter(userNav);