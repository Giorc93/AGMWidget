/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/CustomParallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "./Sections/SectionDescription";
import SectionForm from "./Sections/SectionForm";

import quotationStyle from "assets/jss/material-kit-pro-react/views/quotationStyle.js";

const useStyles = makeStyles(quotationStyle);

export default function AboutUsPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Nombre Agencia"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "info",
        }}
        {...rest}
      />
      <Parallax
        height="50vh"
        gradient="linear-gradient(90deg, rgba(73,9,211,1) 20%, rgba(84,243,255,1) 100%)"
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Solicita tu cotización</h1>

            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionForm />
        </div>
      </div>
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
    </div>
  );
}
