import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// fn
import { validField } from "utils/functions";
//redux
import {
  setProductDetail,
  setAttributeGroups,
} from "redux/features/QuotationForm/quotationResultSlice";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const style = {
  ...styles,
  fontSize: 20,
  gridContainer: {
    marginTop: "1rem",
  },
  insThumb: {
    display: "block",
    margin: "0 auto",
    width: "120px",
    height: "80px",
    borderRadius: "0.5rem",
    boxShadow:
      "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
  },
};

const useStyles = makeStyles(style);

export default function ProductDetailCard(props) {
  const classes = useStyles();
  const product = props.data;
  const productsArr = props.comp;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDetails = (data) => {
    dispatch(setAttributeGroups(props.groups));
    dispatch(setProductDetail(data));
    history.push("/productDetail");
  };

  return (
    <Card product style={{ width: "100%" }}>
      <CardBody>
        <img className={classes.insThumb} src={product[1].thumb} alt=".." />
        <h5 className={classes.cardTitle}>{product[1].name}</h5>
        <GridContainer className={classes.gridContainer}>
          <GridItem className={classes.detailItem}>
            {validField(product[1].attribute["21"]) ? (
              <span>
                <i
                  className="far fa-check-circle"
                  style={{ color: "green", marginRight: "5px" }}
                ></i>
                Responsabilidad Civil:{" "}
                <p className={classes.attDesc}>
                  <i>{product[1].attribute["21"]}</i>
                </p>
              </span>
            ) : (
              <span>
                <i
                  className="far fa-times-circle"
                  style={{ color: "red", marginRight: "5px" }}
                ></i>
                Responsabilidad Civil:{" "}
                <p className={classes.attDesc}>
                  <i>No cubre</i>
                </p>
              </span>
            )}
          </GridItem>
          <GridItem className={classes.detailItem}>
            {validField(product[1].attribute["28"]) ? (
              <span>
                <i
                  className="far fa-check-circle"
                  style={{ color: "green", marginRight: "5px" }}
                ></i>
                Perdida total daños:{" "}
                <p className={classes.attDesc}>
                  <i>{product[1].attribute["28"]}</i>
                </p>
              </span>
            ) : (
              <span>
                <i
                  className="far fa-times-circle"
                  style={{ color: "red", marginRight: "5px" }}
                ></i>
                Perdida total daños:{" "}
                <p className={classes.attDesc}>
                  <i>No cubre</i>
                </p>
              </span>
            )}
          </GridItem>
          <GridItem className={classes.detailItem}>
            {validField(product[1].attribute["29"]) ? (
              <span>
                <i
                  className="far fa-check-circle"
                  style={{ color: "green", marginRight: "5px" }}
                ></i>
                Perdida parcial daños:{" "}
                <p className={classes.attDesc}>
                  <i>{product[1].attribute["29"]}</i>
                </p>
              </span>
            ) : (
              <span>
                <i
                  className="far fa-times-circle"
                  style={{ color: "red", marginRight: "5px" }}
                ></i>
                Perdida parcial daños:{" "}
                <p className={classes.attDesc}>
                  <i>No cubre</i>
                </p>
              </span>
            )}
          </GridItem>
          <GridItem className={classes.detailItem}>
            {validField(product[1].attribute["57"]) ? (
              <p>
                <i
                  className="far fa-check-circle"
                  style={{ color: "green", marginRight: "5px" }}
                ></i>
                Grúa: <i>Sí</i>
              </p>
            ) : (
              <p>
                <i
                  className="far fa-times-circle"
                  style={{ color: "red", marginRight: "5px" }}
                ></i>
                Grúa: <i>No cubre</i>
              </p>
            )}
          </GridItem>
          <GridItem className={classes.detailItem}>
            {validField(product[1].attribute["38"]) ? (
              <p>
                <i
                  className="far fa-check-circle"
                  style={{ color: "green", marginRight: "5px" }}
                ></i>
                Vehiculo de reemplazo: <i>Sí</i>
              </p>
            ) : (
              <p>
                <i
                  className="far fa-times-circle"
                  style={{ color: "red", marginRight: "5px" }}
                ></i>
                Vehiculo de reemplazo: <i>No cubre</i>
              </p>
            )}
          </GridItem>
          <GridItem className={classes.detailItem}>
            {validField(product[1].attribute["56"]) ? (
              <p>
                <i
                  className="far fa-check-circle"
                  style={{ color: "green", marginRight: "5px" }}
                ></i>
                Conductor elegido: <i>Sí</i>
              </p>
            ) : (
              <p>
                <i
                  className="far fa-times-circle"
                  style={{ color: "red", marginRight: "5px" }}
                ></i>
                Conductor elegido: <i>No cubre</i>
              </p>
            )}
          </GridItem>
          <GridItem container justify="center">
            <h5 className={classes.price}>{product[1].price}</h5>
            {product[1].cuotaInicialFinanciacion === "Si" && (
              <i>
                O {product[1].numeroCuotaFinanciacion} cuotas de{" "}
                {product[1].valorCuotaFinanciacion}
              </i>
            )}
          </GridItem>
          <GridItem>
            <Button
              color="info"
              onClick={() => handleDetails(product)}
              fullWidth
            >
              Ver más
            </Button>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
