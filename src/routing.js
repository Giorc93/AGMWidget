import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTokenData, selectTokenData} from "redux/features/TokenData/tokenDataSlice";

import { Route, Switch } from "react-router-dom";

import Footer from "components/Footer/Footer.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import QuotationPage from "views/QuotationPage/QuotationPage";
import ResultsPage from "views/EcommercePage/EcommercePage";
import ProductPage from "views/ProductPage/ProductPage";
import ComparePage from "views/ComparePage/ComparePage";
import ErrorPage from "views/ErrorPage/ErrorPage";

import quotationStyle from "assets/jss/material-kit-pro-react/views/quotationStyle.js";

const useStyles = makeStyles(quotationStyle);

const Routing = ({token, ...rest}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const tokenData = useSelector(selectTokenData);

  useEffect(() => {
    dispatch(getTokenData(token));
  }, []);
  return (
    <React.Fragment>
      <Header
        color="transparent"
        brand={tokenData.data.cf_nombre}
        links={<HeaderLinks dropdownHoverColor="info" info={tokenData.data} />}
        logo={tokenData.data.cf_logo}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "info",
        }}
        {...rest}
      />
      <Switch>
        <Route exact path="/" component={QuotationPage} />
        <Route exact path="/home" component={QuotationPage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/productDetail" component={ProductPage} />
        <Route exact path="/compareTable" component={ComparePage} />
        <Route path="*" component={ErrorPage}/>
      </Switch>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block}>
                    Términos de uso
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block}>
                    Politicas de privacidad
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} by AgenteMotor
            </div>
          </div>
        }
      />
    </React.Fragment>
  );
};

export default Routing;
