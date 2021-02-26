import React from "react";

import { Route, Switch } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import QuotationPage from "./views/QuotationPage/QuotationPage";
import ResultsPage from "./views/EcommercePage/EcommercePage";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={LandingPage} />
      <Route exact path="/quotation" component={QuotationPage} />
      <Route exact path="/results" component={ResultsPage} />
    </Switch>
  );
};

export default Routing;
