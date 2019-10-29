import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
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

    cardChoiceButton = (typeName, i) => {
        return (            
            <ButtonLink 
                href="/offer_feed"
                updateOnClick={true}
                storeValue='loan_type'
                text={typeName}
                key={i}
            />           
        )
    }

    render() {
        return (
            <div className="home-loan-type">
                <h2>Select Loan Type:</h2>
                <div className='answer-container'>
                    {LOAN_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}
                </div>
            </div>
        );
    }
}

export default withStore(AutoTypeController);