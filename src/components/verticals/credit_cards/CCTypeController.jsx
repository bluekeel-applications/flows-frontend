import React, { Component } from 'react';
import { A } from 'hookrouter';
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
    
    onTypeClick = (e) => {
        const cc_type_raw = e.target.innerHTML.toLowerCase();
        const cleanValue = cc_type_raw.split(' ').join('_');
        this.props.store.set('loan_type', cleanValue);
    }

    cardChoiceButton = (typeName, i) => {
        return (
            <li key={i}>
                <A href="/checking_optin" onClick={this.onTypeClick}>{typeName}</A>
            </li>
        )
    }

    render() {
        return (
            <div className="auto-type">
                Select Card Type:
                <ul>
                    {CC_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}
                </ul>
            </div>
        );
    }
}

export default withStore(CCTypeController);
