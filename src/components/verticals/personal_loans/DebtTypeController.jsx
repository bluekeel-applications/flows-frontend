import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

const DEBT_TYPES = [
    'Credit Card',
    'Personal Loan',
    'Other'
];

class DebtTypeController extends Component {

    cardChoiceButton = (typeName, i) => {
        return (
            <div key={i}>
                <ButtonLink 
                    href='/email_optin'
                    updateOnClick={true}
                    storeValue='debt_type'
                    text={typeName}
                />
            </div>
        )
    }

    render() {
        return (
            <div className="personal-debt-type">
                <h2>Select Primary Debt Type:</h2>
                <div className='answer-container'>
                    {DEBT_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}
                </div>
            </div>
        );
    }
}

export default withStore(DebtTypeController);