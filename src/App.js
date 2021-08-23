import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import Services from "./pages/Services";
import ServiceItems from "./pages/ServiceItems";

function App() {
  return (
    <>
      {/* <div id="royal_preloader" /> */}
      <div id="page" className="site">
        <Router>
          <Header />
          <div className="container-top-margin">
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
              <Route>
                <Error />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
