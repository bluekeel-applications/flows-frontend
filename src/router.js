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
import AutoLoansContainer from "./components/verticals/auto_loans/AutoLoansContainer";
// Credit Card Components
import CreditCardsContainer from "./components/verticals/credit_cards/CCContainer";
// Home Loan Components
import HomeLoansContainer from "./components/verticals/home_loans/HomeLoansContainer";
import Heloc from './components/verticals/home_loans/home_loan_type/Heloc';
import Lease from './components/verticals/home_loans/home_loan_type/Lease';
import Purchase from './components/verticals/home_loans/home_loan_type/Purchase';
import Refinance from './components/verticals/home_loans/home_loan_type/Refinance';
// Perstonal Loan Components
import PersonalLoans from "./components/verticals/personal_loans/PersonalLoansContainer";

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
    "/home_loans/heloc": () => <Heloc />,
    "/home_loans/lease": () => <Lease />,
    "/home_loans/purchase": () => <Purchase />,
    "/home_loans/refinance": () => <Refinance />,
// Personal Loan Flow Routes
    "/personal_loans": () => <PersonalLoans />
};

export default routes;