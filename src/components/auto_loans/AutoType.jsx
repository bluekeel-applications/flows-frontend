import React from 'react';
import { A } from 'hookrouter';

function AutoType() {
    return (
        <div className="auto-type">
            Select Car Type
            <ul>
                <li>
                    <A href="/auto_loans/car">Car</A>
                </li>
                <li>
                    <A href="/auto_loans/suv">SUV</A>
                </li>
                <li>
                    <A href="/auto_loans/truck">Truck</A>
                </li>
                <li>
                    <A href="/auto_loans/van">Van/Minivan</A>
                </li>
                <li>
                    <A href="/auto_loans/other">Not Sure</A>
                </li>
            </ul>
        </div>
    );
}

export default AutoType;