import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './LandingPage';
import Footer from './Footer';
import User from './User';
import '../scss/index.scss';

const Page = () => (
    <BrowserRouter>
        <main>
            <Route exact path="/" component={Landing} />
            <Route path="/piskel" component={Footer} />
        </main>
    </BrowserRouter>
);

export default Page;
