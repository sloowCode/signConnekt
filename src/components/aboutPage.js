import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import MainNav from './layouts/mainNav';
import MainFooter from './layouts/mainFooter';
import AboutContent from './contents/aboutContent';

class aboutPage extends Component {
    render(){
        return(
            <div className='aboutpage'>
            <MainNav/>
            <AboutContent/>
            <MainFooter/>
            
            </div>
            
        );
    }
}













export default aboutPage;