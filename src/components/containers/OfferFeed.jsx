import React, { Component } from 'react';
import { withStore } from '../../store';

class OfferFeed extends Component {
    CURRENT_USER = [
        {vertical: this.props.store.get('vertical') || 'Unknown'},
        {type: this.props.store.get('loan_type') || 'Unknown'},
        {checking: this.props.store.get('checking') || 'Unknown'},
    ]

    render() {
        return (
            <div className='offers-feed-container'>
                Offers/Feed 
                <ul>
                    {this.CURRENT_USER.map((data_point, i) => {
                        let keyValue = Object.keys(data_point)[0];
                        let value = data_point[keyValue];
                        return (value === 'Unknown' ? "":
                            (
                                <li key={i}>
                                    <h4>{keyValue}:</h4>
                                    <p>{value}</p>
                                </li>
                            )
                        )
                    })}
                </ul>
            </div>
        )
    }
};

export default withStore(OfferFeed);