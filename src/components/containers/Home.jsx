import React from 'react';
import ButtonLink from '../shared/ButtonLink';

function Home() {
    return (
        <div className='home-page'>
            <ButtonLink 
                href='/get_started'
                updateOnClick={false}
                text='Get Started'
            />            
        </div>
    );
}

export default Home;