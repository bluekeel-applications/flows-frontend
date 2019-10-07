import React from "react";
import Home from "./components/Home";

import AutoLoans from "./components/AutoLoans";
import Car from './components/auto_loans/Car';
import Other from './components/auto_loans/Other';
import Suv from './components/auto_loans/Suv';
import Truck from './components/auto_loans/Truck';
import Van from './components/auto_loans/Van';

import CreditCards from "./components/CreditCards";

import HomeLoans from "./components/HomeLoans";
import Heloc from './components/home_loans/Heloc';
import Lease from './components/home_loans/Lease';
import Purchase from './components/home_loans/Purchase';
import Refinance from './components/home_loans/Refinance';

import PersonalLoans from "./components/PersonalLoans";


const routes = {
    "/": () => <Home />,
// Auto Loan Flow Routes
    "/auto_loans": () => <AutoLoans />,
    "/auto_loans/car": () => <Car />,
    "/auto_loans/other": () => <Other />,
    "/auto_loans/suv": () => <Suv />,
    "/auto_loans/truck": () => <Truck />,
    "/auto_loans/van": () => <Van />,

// Credit Card Flow Routes
    "/credit_cards": () => <CreditCards />,

// Home Loan Flow Routes
    "/home_loans": () => <HomeLoans />,
    "/home_loans/heloc": () => <Heloc />,
    "/home_loans/lease": () => <Lease />,
    "/home_loans/purchase": () => <Purchase />,
    "/home_loans/refinance": () => <Refinance />,

// Personal Loan Flow Routes
    "/personal_loans": () => <PersonalLoans />

};

export default routes;