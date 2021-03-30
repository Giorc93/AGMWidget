import React from "react";

import { Route, Switch } from "react-router-dom";

import QuotationPage from "./views/QuotationPage/QuotationPage";
import ResultsPage from "./views/EcommercePage/EcommercePage";
import ProductPage from './views/ProductPage/ProductPage';
import ComparePage from './views/ComparePage/ComparePage'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={QuotationPage} />
      <Route exact path="/home" component={QuotationPage} />
      <Route exact path="/results" component={ResultsPage} />
      <Route exact path="/productDetail" component={ProductPage} />
      <Route exact path="/compareTable" component={ComparePage} />
    </Switch>
  );
};

export default Routing;
