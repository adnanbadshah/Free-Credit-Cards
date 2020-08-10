import React from 'react';
import Navbar from "./Navbar";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GetCreditCard from './GetCreditCard';
import TestCreditCard from './TestCreditCard';

export default function App() {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/" component={GetCreditCard} />
                <Route path="/test" component={TestCreditCard} />
            </Switch>
        </Router>
    );
}
