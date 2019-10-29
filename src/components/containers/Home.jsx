import React, { Component } from 'react';
import ButtonLink from '../shared/ButtonLink';
import Banner from '../../assets/approvalBanner.png';
import { withStore } from '../../store';

class Home extends Component {
    render() {
        return (
            <div id='home-page-container'>
                <div id='home-banner-div'>
                    <img id='home-banner' src={Banner} alt='home_banner_img'/>
                </div>
                <div id='get-started-button-div'>
                    <ButtonLink 
                        href='/get_started'
                        updateOnClick={false}
                        text='Get Started'
                    />            
                </div>
            </div>
        );
    }
}

export default withStore(Home);