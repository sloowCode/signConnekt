import React,{Component} from 'react';
import MainNav from './layouts/mainNav';
import ContactContent from './contents/contactContent';

class contactPage extends Component {
    render(){
        return(
            <div>
            <MainNav/>
            <ContactContent/>
            
            </div>
            
        );
    }
}





export default contactPage;