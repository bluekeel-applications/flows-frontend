import React, { Component } from 'react';
import { A } from 'hookrouter';
import { withStore } from '../../../store';

class EmailOptin extends Component {
    setTypeOnClick = (e) => {
        const emailInput = document.getElementById('email-input').value;
        this.props.store.set('email', emailInput);
    }

    render() {
        return (
            <div>
                <h3>Email Optin</h3>
                <input id='email-input' placeholder='email address'></input>
                <button type='submit'><A href='/offer_feed' onClick={this.setTypeOnClick}>Next</A></button>
            </div>
        )
    }
};

export default withStore(EmailOptin);