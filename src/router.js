import React from 'react';
import Home from './components/Home';
import StartFlow from './components/GetStarted';
// Auto Loan Components
import AutoLoansContainer from "./components/verticals/auto_loans/AutoLoansContainer";
import Car from './components/verticals/auto_loans/auto_type/Car';
import Other from './components/verticals/auto_loans/auto_type/Other';
import Suv from './components/verticals/auto_loans/auto_type/Suv';
import Truck from './components/verticals/auto_loans/auto_type/Truck';
import Van from './components/verticals/auto_loans/auto_type/Van';
// Credit Card Components
import CreditCardsContainer from "./components/verticals/credit_cards/CreditCardsContainer";
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
// Auto Loan Flow Routes
    "/auto_loans": () => <AutoLoansContainer />,
    "/auto_loans/car": () => <Car />,
    "/auto_loans/other": () => <Other />,
    "/auto_loans/suv": () => <Suv />,
    "/auto_loans/truck": () => <Truck />,
    "/auto_loans/van": () => <Van />,

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