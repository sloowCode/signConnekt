import React, { Component } from 'react';
import MainFooter from './layouts/mainFooter';
import TransNav from './layouts/transNav';
import HomeContent from './contents/homeContent';
import HomeBackground from './contents/homebackground';
import {connect} from 'react-redux';


class homePage extends Component {
    render() {
        const {profiles}=this.props;
        return (
            <div className='wrapper'>
                <div className='homebackpic'>
                <TransNav/>
                <HomeBackground/>
                </div>
                <HomeContent profiles={profiles} />
                <MainFooter />
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        profiles: state.profile.profiles
    }
}


export default connect(mapStateToProps)(homePage);
