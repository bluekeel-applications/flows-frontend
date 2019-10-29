import React from 'react';
// Container Components
import Home from './components/containers/Home';
import StartFlow from './components/containers/GetStarted';
import OfferFeed from "./components/containers/OfferFeed";
// Optin Components
import CheckingOptin from './components/optins/Checking';
import EmailOptin from './components/optins/Email';
import DebtOptin from './components/optins/Debt';
// Auto Loan Components
import AutoLoansContainer from './components/verticals/auto_loans/AutoLoansContainer';
// Credit Card Components
import CreditCardsContainer from './components/verticals/credit_cards/CCContainer';
// Home Loan Components
import HomeLoansContainer from './components/verticals/home_loans/HomeLoansContainer';
// Perstonal Loan Components
import PersonalLoans from './components/verticals/personal_loans/PersonalLoansContainer';
import DebtTypeController from './components/verticals/personal_loans/DebtTypeController';
import DebtAmountController from './components/verticals/personal_loans/DebtAmountController';

const routes = {
    "/": () => <Home />,
    "/get_started": () => <StartFlow />,
    "/offer_feed": () => <OfferFeed />,
// Optin Routes
    "/email_optin": () => <EmailOptin />,
    "/checking_optin": () => <CheckingOptin />,
    "/debt_optin": () => <DebtOptin />,
// Auto Loan Flow Routes
    "/auto_loans": () => <AutoLoansContainer />,
// Credit Card Flow Routes
    "/credit_cards": () => <CreditCardsContainer />,
// Home Loan Flow Routes
    "/home_loans": () => <HomeLoansContainer />,
// Personal Loan Flow Routes
    "/personal_loans": () => <PersonalLoans />,
    "/debt_consolidation": () => <DebtTypeController />,
    "/debt_amount": () => <DebtAmountController />
};

export default routes;