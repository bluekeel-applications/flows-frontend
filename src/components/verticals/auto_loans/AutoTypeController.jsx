import React, { Component } from 'react';
import { A } from 'hookrouter';
import { withStore } from '../../../store';

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

    setTypeOnClick = (e) => {
        const auto_type_raw = e.target.innerHTML.toLowerCase();
        const cleanValue = auto_type_raw.split(' ').join('_').split('/').join('_');
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
            <div className="auto-type">
                Select Automobile Type:
                <ul>
                    {AUTO_TYPES.map((card_type, i) => {
                        return this.cardChoiceButton(card_type, i)
                    })}
                </ul>
            </div>
        );
    }
}

export default withStore(AutoTypeController);