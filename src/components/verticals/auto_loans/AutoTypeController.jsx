import React, { Component } from 'react';
import { withStore } from '../../../store';
import ButtonLink from '../../shared/ButtonLink';

const AUTO_TYPES = [
    'Car',
    'SUV',
    'Truck',
    'Van/Minivan',
    'Not Sure'
];

class AutoTypeController extends Component {

    componentDidMount = () => {
        this.props.store.set('vertical', 'auto_loans');
    }

    cardChoiceButton = (typeName, i) => {
        return (          
            <ButtonLink 
                href="/offer_feed"
                updateOnClick={true}
                text={typeName}
                storeValue='loan_type'
                key={i}
            />                        
        )
    }

    render() {
        return (
            <div className="auto-type">
                <h2>Select Car Type:</h2>
                <div className='answer-container'>
                    {AUTO_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}                
                </div>
            </div>
        );
    }
}

export default withStore(AutoTypeController);