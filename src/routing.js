import React from "react";

import { Route, Switch } from "react-router-dom";

import QuotationPage from "./views/QuotationPage/QuotationPage";
import ResultsPage from "./views/EcommercePage/EcommercePage";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={QuotationPage} />
      <Route exact path="/home" component={QuotationPage} />
      <Route exact path="/results" component={ResultsPage} />
    </Switch>
  );
};

export default Routing;
