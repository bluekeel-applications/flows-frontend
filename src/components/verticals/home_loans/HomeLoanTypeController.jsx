import React, { Component } from 'react';
import { A } from 'hookrouter';
import { withStore } from '../../../store';

const LOAN_TYPES = [
    'HELOC',
    'Lease To Own',
    'Purchase',
    'Refinance'
];

class AutoTypeController extends Component {

    componentDidMount = () => {
        this.props.store.set('vertical', 'home_loans');
    }

    setTypeOnClick = (e) => {
        const auto_type_raw = e.target.innerHTML.toLowerCase();
        const cleanValue = auto_type_raw.split(' ').join('_');
        this.props.store.set('loan_type', cleanValue);
    }

    cardChoiceButton = (typeName, i) => {
        return (
            <li key={i}>
                <A href="/offer_feed" onClick={this.setTypeOnClick}>{typeName}</A>
            </li>
        )
    }

    render() {
        return (
            <div className="home-loan-type">
                Select Loan Type:
                <ul>
                    {LOAN_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}
                </ul>
            </div>
        );
    }
}

export default withStore(AutoTypeController);