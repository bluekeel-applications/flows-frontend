import React, { Component } from 'react';
import { withStore } from '../../../store';

class DebtOptin extends Component {
    // componentDidMount() {
    //     this.props.store.set('name', 'Weston')
    // }

    render() {
        return <div>Debt Optin</div>
    }
};

export default withStore(DebtOptin);