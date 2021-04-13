/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Parallax from "components/Parallax/CustomParallax.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import SectionProducts from "views/EcommercePage/Sections/SectionProducts.js";
import SectionData from "views/EcommercePage/Sections/SectionData.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// redux
import { selectTotalProducts } from "redux/features/QuotationForm/quotationResultSlice";
import { useSelector } from "react-redux";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function EcommercePage({ ...rest }) {
  const products = useSelector(selectTotalProducts);

  const [manufacturers, setManufacturers] = React.useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  React.useEffect(() => {
    setManufacturers([
      ...new Set(
        products.map(function (prod) {
          return prod[1].manufacturer;
        })
      ),
    ]);
  }, [products]);

  const classes = useStyles();
  return (
    <div>
      <Parallax
        height="50vh"
        gradient="linear-gradient(90deg, rgba(73,9,211,1) 20%, rgba(84,243,255,1) 100%)"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>¡Los Tenemos!</h1>
                <h4>
                  Hemos encontrado {products.length} seguros con{" "}
                  {manufacturers.length} aseguradoras
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionData />
        <SectionProducts />
      </div>
    </div>
  );
}
