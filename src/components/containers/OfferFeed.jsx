import React, { Component } from 'react';
import { withStore } from '../../store';

class OfferFeed extends Component {
    render() {
        return (
            <div className='offers-feed-container'>
                Offers/Feed 
                <div>
                    Vertical:
                    <p>{this.props.store.get('vertical')}</p>
                </div>
                <div>
                    Type:
                    <p>{this.props.store.get('loan_type')}</p>
                </div>
            </div>
        )
    }
};

export default withStore(OfferFeed);