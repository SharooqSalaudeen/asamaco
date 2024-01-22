import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { useState, useEffect } from "react";

import Home from './pages/Home'
import Header from './components/Header'
import Contacts from './pages/Contacts'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Error from './pages/Error'
import Services from './pages/Services'
import ServiceItems from './pages/ServiceItems'
import ScrollToTop from './components/utils/ScrollToTop'
import TermsAndConditions from './pages/TermsAndConditions'
import Privacy from './pages/Privacy'

export default function App() {
    // const [loading, setloading] = useState(true);

    // useEffect(() => {
    // setTimeout(function () {
    // setloading(false);
    // }, 2000);
    // }, []);

    return (
        <>
            {/* <div id="royal_preloader" /> */}
            {/* {loading ? null : ( */}
            <div id="page" className="site">
                <Router>
                    <Header />
                    <div className="container-top-margin">
                        <ScrollToTop />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/services">
                                <Services />
                            </Route>
                            <Route path="/serviceitem/:id">
                                <ServiceItems />
                            </Route>
                            <Route path="/contacts">
                                <Contacts />
                            </Route>
                            <Route path="/aboutus">
                                <AboutUs />
                            </Route>
                            <Route path="/terms">
                                <TermsAndConditions />
                            </Route>
                            <Route path="/privacy">
                                <Privacy />
                            </Route>
                            <Route>
                                <Error />
                            </Route>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
            {/* )} */}
        </>
    )
}
