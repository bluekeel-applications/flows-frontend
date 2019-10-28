import React from 'react';
import { A } from 'hookrouter';

function Home() {
    return (
        <div className="home-page">
            <A href="/get_started">Get Started</A>
        </div>
    );
}

export default Home;