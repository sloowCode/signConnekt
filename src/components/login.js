import React,{Component} from 'react';
import TransNav from './layouts/transNav';
import Loginforms from './Forms/loginForms';

class login extends Component {
    render(){
        return(
            <div className='signin'>
                <TransNav/>
            
                <Loginforms/>
            
            </div>
            
        );
    }
}




export default login;