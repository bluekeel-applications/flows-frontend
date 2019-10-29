import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

class CheckingOptin extends Component {

    updateOnClick = (e) => {
        const optin_answer = e.target.innerHTML.toLowerCase();
        this.props.store.set('checking', optin_answer);
    }

    setHref = () => {
        let currentFlow = this.props.store.get('vertical');
        switch (currentFlow) {
            case 'credit_cards':
                return '/offer_feed';                
            case 'personal_loans':
                return '/email_optin';                
            default:
                return '/offer_feed';
        }
    }

    render() {
        return (
        <div className='optin-container'>
            <div className='question-header'>
                <h2 className='optin-header'>
                    Banks are paying $100s to new checking customers.
                    <br />
                    Would you like to see free checking account options?
                </h2>
            </div>
            <div className='answer-container'>                
                <ButtonLink 
                    href={this.setHref()}
                    updateOnClick={true}
                    storeValue='checking'
                    text='Yes'
                />            
                <ButtonLink
                    href={this.setHref()}
                    updateOnClick={true}
                    storeValue='checking'
                    text='No'
                />
            </div>
        </div>
        )
    }
};

export default withStore(CheckingOptin);