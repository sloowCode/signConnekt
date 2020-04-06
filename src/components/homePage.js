import React, { Component } from 'react';
import MainFooter from './layouts/mainFooter';
import TransNav from './layouts/transNav';
import HomeContent from './contents/homeContent';
import HomeBackground from './contents/homebackground';


class homePage extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='homebackpic'>
                <TransNav/>
                <HomeBackground/>
                </div>
                <HomeContent />
                <MainFooter />
            </div>
        )
    }
}


export default homePage;
