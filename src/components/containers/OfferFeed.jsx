import React, { Component } from 'react';
import { withStore } from '../../store';

class OfferFeed extends Component {
    CURRENT_USER = [
        {vertical: this.props.store.get('vertical') || 'Unknown'},
        {type: this.props.store.get('loan_type') || 'Unknown'},
        {debt_type: this.props.store.get('debt_type') || 'Unknown'},
        {checking: this.props.store.get('checking') || 'Unknown'},
        {debt: this.props.store.get('debt') || 'Unknown'},
        {email: this.props.store.get('email') || 'Unknown'},
    ]

    render() {
        return (
            <div className='offers-feed-container'>
                <h1>Offers/Feed</h1> 
                <div>
                    {this.CURRENT_USER.map((data_point, i) => {
                        let keyValue = Object.keys(data_point)[0];
                        let value = data_point[keyValue];
                        return (value === 'Unknown' ? "":
                            (
                                <div key={i}>
                                    <h3><u>{keyValue}:</u></h3>
                                    <h2>{value}</h2>
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