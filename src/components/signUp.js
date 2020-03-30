import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import MainNav from './layouts/mainNav';
import MainFooter from './layouts/mainFooter'
import SignupForms from './Forms/signupForms';

class signUp extends Component {
    render(){
        return(
            <div className='mainsign'>
                <MainNav/>
                <SignupForms/> 
                <MainFooter/>
            </div>
            
        );
    }
}





export default signUp;