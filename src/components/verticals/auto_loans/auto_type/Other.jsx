import React, { Component } from 'react';
import { withStore } from '../../../../store';

class Other extends Component {
    componentDidMount = () => {
        this.props.store.set('vertical', 'auto_loan');
        this.props.store.set('loan_type', 'general_auto_loan');
    }

    render() {
        return (
            <div className="auto-type-selected">
                <div>Vertical:<p>{this.props.store.vertical}</p></div>
                <div>Loan Type:<p>{this.props.store.loan_type}</p></div>
            </div>
        );
    }
}

export default withStore(Other);