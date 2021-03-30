/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// pick a date util library
import React from "react";
import store from "redux/store";
import Routing from "./routing";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

var hist = createBrowserHistory();
var root = document.getElementById("AGMroot");
var idToken = root.getAttribute("token");

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Routing token={idToken}/>
    </Router>
  </Provider>,
  document.getElementById("AGMroot")
);