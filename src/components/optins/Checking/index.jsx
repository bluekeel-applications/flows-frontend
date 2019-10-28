import React, { Component } from 'react';
import { A } from 'hookrouter';
import { withStore } from '../../../store';

class CheckingOptin extends Component {

    updateOnClick = (e) => {
        const optin_answer = e.target.innerHTML.toLowerCase();
        this.props.store.set('checking', optin_answer);
    }

    render() {
        return (
        <div className='checking-optin-container'>
            <div className='question-header'>
                <h3 className='checking-optin-header'>
                    Banks are paying $100s to new checking customers. 
                </h3>
                <h3 className='checking-optin-subheader'> 
                    Would you like to see free checking account options?
                </h3>
            </div>
            <div className='answer-container'>
                <ul>
                    <li>
                        <A href="/offer_feed" onClick={this.updateOnClick}>Yes</A>
                    </li>
                    <li>
                            <A href="/offer_feed" onClick={this.updateOnClick}>No</A>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
};

export default withStore(CheckingOptin);