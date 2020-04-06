import React,{Component} from 'react';
import UserNav from './layouts/userNav';
import MainFooter from './layouts/mainFooter';
import UserForms from './Forms/userForms';

class userprofile extends Component {
    render(){
        return(
            <div className='wrapper'>
            <UserNav/>
            <UserForms/>
            <MainFooter/>
            
            </div>
            
        );
    }
}





export default userprofile;