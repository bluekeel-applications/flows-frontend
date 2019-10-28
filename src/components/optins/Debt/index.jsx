import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

class DebtOptin extends Component {

    render() {
        return (
            <div className='optin-container'>
                <div className='question-header'>
                    <h3 className='optin-header'>
                        Would you like a loan to consolidate debt?
                    </h3>
                    <h3 className='optin-subheader'>
                        or for any other purpose?
                    </h3>
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