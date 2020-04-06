import React,{Component} from 'react';
import MainNav from './layouts/mainNav';
import MainFooter from './layouts/mainFooter';
import SearchContent from './contents/searchContent';
import Searchforms from './Forms/searchForms';

class searchPage extends Component {
    render(){
        return(
            <div className='wrapper'>
                <MainNav/>
                
                <SearchContent/>
                
                <MainFooter/>
            
            </div>
            
        );
    }
}





export default searchPage;