import React from 'react';
import ButtonLink from '../shared/ButtonLink';

function StartFlow() {
    return (
        <div className='start-flow-page'>
            <ButtonLink 
                href='/auto_loans'
                updateOnClick={false}
                text='Auto Loans'
            />                    
            <ButtonLink
                href='/credit_cards'
                updateOnClick={false}
                text='Credit Cards'
            />                      
            <ButtonLink
                href='/home_loans'
                updateOnClick={false}
                text='Home Loans'
            />                    
            <ButtonLink
                href='/personal_loans'
                updateOnClick={false}
                text='Personal Loans'
            />                    
        </div>
    );
}

export default StartFlow;