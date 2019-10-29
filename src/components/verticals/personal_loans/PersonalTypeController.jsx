import React, { Component } from 'react';
import ButtonLink from '../../shared/ButtonLink';
import { withStore } from '../../../store';

class PersonalTypeController extends Component {

    componentDidMount = () => {
        this.props.store.set('vertical', 'personal_loans');
    }

    render() {
        return (
            <div className="home-loan-type">
                <h2>Select Loan Type:</h2>
                <div className='answer-container'>                    
                    <ButtonLink 
                        href='personal/debt_consolidation'
                        updateOnClick={true}
                        storeValue='loan_type'
                        text='Debt Consolidation'
                    />                                            
                    <ButtonLink
                        href='email_optin'
                        updateOnClick={true}
                        storeValue='loan_type'
                        text='Pay Taxes'
                    />                                             
                    <ButtonLink
                        href='/debt_optin'
                        updateOnClick={true}
                        storeValue='loan_type'
                        text='Other Purpose'
                    />                                             
                </div>
            </div>
        );
    }
}

export default withStore(PersonalTypeController);