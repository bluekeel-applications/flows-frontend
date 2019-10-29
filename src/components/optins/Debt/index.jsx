import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

class DebtOptin extends Component {

    render() {
        return (
            <div className='optin-container'>
                <div className='question-header'>
                    <h2 className='optin-header'>
                        Would you like a loan to consolidate debt,
                        <br />
                        or any other purpose?
                    </h2>
                </div>
                <div className='answer-container'>                    
                    <ButtonLink 
                        href="/email_optin"
                        updateOnClick={true}
                        storeValue='debt'
                        text='Yes'
                    />                                            
                    <ButtonLink
                        href="/checking_optin"
                        updateOnClick={true}
                        storeValue='debt'
                        text='No'
                    />                                                 
                </div>
            </div>
        )
    }
};

export default withStore(DebtOptin);