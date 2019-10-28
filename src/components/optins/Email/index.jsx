import React, { Component } from 'react';
import { withStore } from '../../../store';

class EmailOptin extends Component {
    // componentDidMount() {
    //     this.props.store.set('name', 'Weston')
    // }

    render() {
        return <div>Email Optin</div>
    }
};

export default withStore(EmailOptin);