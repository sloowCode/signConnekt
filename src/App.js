import React,{Component} from 'react';
import HomePage from './components/homePage';
import Login from './components/login';
import AboutPage from './components/aboutPage';
import SignUp from './components/signUp';
import SearchPage from './components/searchPage';
import UserProfile from'./components/userprofile';
import NotFound from './components/notFound';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';





class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        
        
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/aboutPage'  component={AboutPage}/>
            <Route path='/login'  component={Login}/>
            <Route path='/signUp'  component={SignUp}/>
            <Route path='/searchPage'  component={SearchPage}/>
            <Route path='/userProfile'  component={UserProfile}/>
            <Route component={NotFound}/>
          </Switch>
        
        
      </div>
      </BrowserRouter>
      
    );
  }
 
}

export default App;
