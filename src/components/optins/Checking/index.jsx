import React, { Component } from 'react';
import { withStore } from '../../../store';

class CheckingOptin extends Component {
    // componentDidMount() {
    //     this.props.store.set('name', 'Weston')
    // }

    render() {
        return <div>Checking Optin</div>
    }
};

export default withStore(CheckingOptin);