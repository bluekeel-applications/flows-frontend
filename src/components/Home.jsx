import React from 'react';
import { A } from 'hookrouter';

function Home() {
    return (
        <div className="home-page">
            Home Page
            <ul>
                <li>
                    <A href="/auto_loans">Auto Loans</A>
                </li>
                <li>
                    <A href="/credit_cards">Credit Cards</A>
                </li>
                <li>
                    <A href="/home_loans">Home Loans</A>
                </li>
                <li>
                    <A href="/personal_loans">Personal Loans</A>
                </li>
            </ul>
        </div>
    );
}

export default Home;