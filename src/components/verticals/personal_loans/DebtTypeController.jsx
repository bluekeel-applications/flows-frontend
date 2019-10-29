import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

class DebtTypeController extends Component {
    render() {
        return (
            <div className="personal-debt-type">
                <h2>Select Primary Debt Type:</h2>
                <div className='answer-container'>
                    <ButtonLink
                        href='/debt_amount'
                        updateOnClick={true}
                        storeValue='debt_type'
                        text='Credit Card'
                    />
                    <ButtonLink
                        href='/debt_amount'
                        updateOnClick={true}
                        storeValue='debt_type'
                        text='Personal Loan'
                    />
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        storeValue='debt_type'
                        text='Medical'
                    />
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        storeValue='debt_type'
                        text='Student Loan'
                    />
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        storeValue='debt_type'
                        text='Auto Loan'
                    />
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        storeValue='debt_type'
                        text='Other'
                    />
                </div>
            </div>
        );
    }
}

export default withStore(DebtTypeController);