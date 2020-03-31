import React,{Component} from 'react';
import MainNav from './layouts/mainNav';
import MainFooter from './layouts/mainFooter';
import ProfileviewContent from './contents/profileviewContent';

class profileview extends Component {
    render(){
        return(
            <div>
            <MainNav/>
            <ProfileviewContent/>
            <MainFooter/>
            
            </div>
            
        );
    }
}




export default profileview;