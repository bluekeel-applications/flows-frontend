import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

class DebtAmountController extends Component {
    render() {
        return (
            <div className="personal-debt-amount">
                <h2>Select Your Debt Amount:</h2>
                <div className='answer-container'>
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        text='Less than $15,000'
                        storeValue='debt_amount'
                    />
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        text='$15,000 - $30,000'
                        storeValue='debt_amount'
                    />
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        text='$30,000 - $50,000'
                        storeValue='debt_amount'
                    />
                    <ButtonLink
                        href='/email_optin'
                        updateOnClick={true}
                        text='More than $50,000'
                        storeValue='debt_amount'
                    />
                </div>
            </div>
        );
    }
}

export default withStore(DebtAmountController);