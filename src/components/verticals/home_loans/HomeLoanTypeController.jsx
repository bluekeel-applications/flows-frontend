import React from 'react';
import { A } from 'hookrouter';

function HomeLoanTypeController() {
    return (
        <div className="auto-type">
            Select Loan Type:
            <ul>
                <li>
                    <A href="/home_loans/refinance">Refinance</A>
                </li>
                <li>
                    <A href="/home_loans/lease">Lease to Own</A>
                </li>
                <li>
                    <A href="/home_loans/heloc">HELOC</A>
                </li>
                <li>
                    <A href="/home_loans/purchase">Purchase</A>
                </li>    
            </ul>
        </div>
    );
}

export default HomeLoanTypeController;