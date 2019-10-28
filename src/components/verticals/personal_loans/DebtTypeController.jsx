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
            <li key={i}>
                <ButtonLink 
                    href='/email_optin'
                    updateOnClick={true}
                    storeValue='debt_type'
                    text={typeName}
                />
            </li>
        )
    }

    render() {
        return (
            <div className="personal-debt-type">
                Select Primary Debt Type:
                <ul>
                    {DEBT_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}
                </ul>
            </div>
        );
    }
}

export default withStore(DebtTypeController);