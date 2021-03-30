/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/CustomParallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";
//
import SectionData from "views/EcommercePage/Sections/SectionData.js";
//redux
import { useSelector } from "react-redux";
import {
  selectProductDetail,
  selectAttributeGroups,
} from "redux/features/QuotationForm/quotationResultSlice";
//utils
import { capitalizeStr } from "utils/functions";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import { useHistory } from "react-router";

const useStyles = makeStyles(productStyle);

export default function ProductPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const history = useHistory();
  const productData = useSelector(selectProductDetail);
  const attGroups = useSelector(selectAttributeGroups);
  const classes = useStyles();

  return (
    <div className={classes.productPage}>
      <Parallax
        height="50vh"
        gradient="linear-gradient(90deg, rgba(73,9,211,1) 20%, rgba(84,243,255,1) 100%)"
      ></Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer direction="row">
              <GridItem xs={12}>
                <GridContainer>
                  <GridItem
                    container
                    justify="center"
                    alignItems="center"
                    md={2}
                  >
                    <img src={productData[1].thumb} height="75%" />
                  </GridItem>
                  <GridItem xs={12} md={10}>
                    <h2 className={classes.title}>{productData[1].name}</h2>
                    <h3 className={classes.mainPrice}>
                      {productData[1].price}
                    </h3>
                    <p>
                      <i>
                        O {productData[1].numeroCuotaFinanciacion} cuotas de{" "}
                        {productData[1].valorCuotaFinanciacion}.
                      </i>
                    </p>
                    <Button
                      color="info"
                      size="sm"
                      onClick={() => history.push("/compareTable")}
                    >
                      Comparar
                    </Button>
                  </GridItem>
                </GridContainer>
                {attGroups.map((group) => (
                  <React.Fragment key={group[0]}>
                    <GridItem xs={12}>
                      <Divider className={classes.divider} />
                    </GridItem>
                    <h5 className={classes.subTitle}>{group[1].name}</h5>
                    {Object.keys(group[1].attribute).map((el, i) => (
                      <GridItem xs={12}>
                        <h6 className={classes.attrTitle}>
                          <b>{capitalizeStr(group[1].attribute[el].name)}: </b>
                          {el === "67" ? (
                            productData[1].attribute[el]
                              .split(/<\/li><\/ul>|<\/li> <\/ul>/)
                              .filter((str) => str.trim().length > 0)
                              .map((str, i) => (
                                <p key={i} className={classes.description}>
                                  - {str}
                                </p>
                              ))
                          ) : (
                            <span className={classes.description}>
                              {productData[1].attribute[el] === "" ||
                              productData[1].attribute[el] === undefined
                                ? "N/A."
                                : capitalizeStr(productData[1].attribute[el]) +
                                  "."}
                            </span>
                          )}
                        </h6>
                      </GridItem>
                    ))}
                  </React.Fragment>
                ))}
              </GridItem>
            </GridContainer>
            <Typography color="textSecondary" style={{ marginTop: "1rem" }}>
              Cada cotización es provisional y no implica aceptación del riesgo,
              todas las condiciones incluyendo precios, tasas de financiación y
              coberturas están sujetas a cambios, revisión, verificación y
              aceptación acorde las políticas y parámetros de las aseguradoras e
              intermediario, pudiendo variar el momento de emitir la póliza.
              Tiempo de vigencia de las cotizaciones es de 5 días calendario.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
