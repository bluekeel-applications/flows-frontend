import React, { Component } from 'react';
import { A } from 'hookrouter';
import { withStore } from '../../store';

class ButtonLink extends Component {

    setTypeOnClick = (e) => {
        if(this.props.updateOnClick) {
            const auto_type_raw = e.target.innerHTML.toLowerCase();
            const cleanValue = auto_type_raw.split(' ').join('_');
            this.props.store.set(this.props.storeValue, cleanValue);
        }
    }

    render() {
        return (
            <div className='button-link-container'>                
                <A href={this.props.href} onClick={this.setTypeOnClick}>
                    <button className='link-button'>{this.props.text}</button>
                </A>
            </div>
        )
    }
};

export default withStore(ButtonLink);