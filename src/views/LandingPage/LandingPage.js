/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
//dependencies files
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/CustomParallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionWork from "./Sections/SectionWork.js";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Header
        color="transparent"
        brand="agentemotor"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />
      <Parallax gradient="linear-gradient(90deg, rgba(73,9,211,1) 20%, rgba(84,243,255,1) 100%)">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <img
                src="http://www.agentemotor.com/wp-content/uploads/IMAGEN-COMPU-AUTOMATIZADO-01-01.png"
                width="100%"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <GridContainer justify="flex-end">
                <GridItem xs={12}>
                  <h1 className={classes.title} style={{ textAlign: "right" }}>
                    Cotiza Con Nosotros
                  </h1>
                </GridItem>
                <GridItem xs={12}>
                  <p
                    style={{
                      textAlign: "right",
                      marginBottom: 25,
                      fontSize: "1.5rem",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis tortor semper, ullamcorper erat quis, accumsan
                    turpis. Integer maximus faucibus lorem, venenatis gravida
                    enim pretium quis.
                  </p>
                </GridItem>
                <GridItem container justify="flex-end" xs={12}>
                  <Button
                    color="rose"
                    size="lg"
                    onClick={() => history.push("/quotation")}
                    round
                  >
                    <i
                      className="fas fa-clipboard"
                      style={{ marginRight: 10 }}
                    ></i>
                    Realiza Tu Cotización
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionWork />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block}>
                    Términos de Uso
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block}>
                    Politicas de Privacidad
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
    </div>
  );
}
