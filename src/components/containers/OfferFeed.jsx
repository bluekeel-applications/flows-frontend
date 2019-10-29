import React, { Component } from 'react';
import { withStore } from '../../store';

class OfferFeed extends Component {
    formatDebtAmount = () => {
        let amount = this.props.store.get('debt_amount') || 'Unknown';
        if(amount !== 'Unknown') {
            switch(amount) {
                case 'Less than $15,000':
                    amount = '<15K';
                    break;
                default:
                    amount = '>15k';
            }
        }
        return amount;
    };

    CURRENT_USER = [
        {vertical: this.props.store.get('vertical') || 'Unknown'},
        {sub_type: this.props.store.get('loan_type') || 'Unknown'},
        {debt_type: this.props.store.get('debt_type') || 'Unknown'},
        {debt_amount: this.formatDebtAmount()},
        {checking: this.props.store.get('checking') || 'Unknown'},
        {debt: this.props.store.get('debt') || 'Unknown'},
        {email: this.props.store.get('email') || 'Unknown'},
    ]

    render() {
        return (
            <div className='offers-feed-container'>
                <h1>Offers/Feed</h1> 
                <hr />
                <div>
                    {this.CURRENT_USER.map((data_point, i) => {
                        let keyValue = Object.keys(data_point)[0];
                        let value = data_point[keyValue];
                        return (value === 'Unknown' ? "":
                            (
                                <div className='offer-data-div' key={i}>
                                    <h2 className='offer-key'>{keyValue}:</h2>
                                    <h2 className='offer-value'>{value}</h2>
                                    <hr />
                                </div>
                            )
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default withStore(OfferFeed);