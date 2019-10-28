import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

const CC_TYPES = [
    'Low Interest',
    'Cash Back',
    'Rewards',
    'Student',
    'Travel',
    'Credit Building',
    'Business',
    'Balance Transfer',
    'Prepaid'
];

class CCTypeController extends Component {

    componentDidMount = () => {
        this.props.store.set('vertical', 'credit_cards');
    }

    cardChoiceButton = (typeName, i) => {
        return (
            <ButtonLink 
                href="/checking_optin"
                updateOnClick={true}
                storeValue='loan_type'
                text={typeName}
                key={i}
            />
        )
    }

    render() {
        return (
            <div className="auto-type">
                <h3>Select Card Type:</h3>
                <div>
                    {CC_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}
                </div>
            </div>
        );
    }
}

export default withStore(CCTypeController);
