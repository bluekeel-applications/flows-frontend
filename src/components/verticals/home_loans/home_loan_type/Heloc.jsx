import React, { Component } from 'react';
import { withStore } from '../../../../store';

class Heloc extends Component {
    componentDidMount = () => {
        this.props.store.set('vertical', 'home_loan');
        this.props.store.set('loan_type', 'heloc');
    }

    render() {
        return (
            <div className="homeloan-type-selected">
                <div>Vertical:<p>{this.props.store.vertical}</p></div>
                <div>Loan Type:<p>{this.props.store.loan_type}</p></div>
            </div>
        );
    }
}

export default withStore(Heloc);