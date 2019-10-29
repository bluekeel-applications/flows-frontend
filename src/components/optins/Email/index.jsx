import React, { Component } from 'react';
import { A } from 'hookrouter';
import { withStore } from '../../../store';

class EmailOptin extends Component {
    setTypeOnClick = (e) => {
        const emailInput = document.getElementById('email-input').value;
        this.props.store.set('email', emailInput);
    }

    clearPlaceholder = (e) => {
        const inputEl = e.target;
        inputEl.setAttribute('placeholder', '');
    };
    
    render() {
        return (
            <div className='optin-container'>
                <div className='question-header'>
                    <h2 className='optin-header'>
                        Email Optin
                    </h2>
                    <hr />
                </div>
                <div className='answer-container'>
                    <div className='form-input-div'>
                        <input id='email-input' placeholder='Enter email address' onFocus={this.clearPlaceholder}></input>
                    </div>
                    <div className='form-button-div'>
                        <A href='/offer_feed' onClick={this.setTypeOnClick}>
                            <button className='link-button' type='submit'>Next</button>
                        </A>
                    </div>
                </div>
            </div>
        )
    }
};

export default withStore(EmailOptin);