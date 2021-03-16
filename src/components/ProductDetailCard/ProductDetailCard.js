import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
//
import ProductDetailModal from "components/ProductDetailModal/ProducDetailModal";
//icons
import Add from "@material-ui/icons/Add";
import Gavel from "@material-ui/icons/Gavel";
import Car from "@material-ui/icons/DriveEta";
import Person from "@material-ui/icons/Person";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const style = {
  ...styles,
  fontSize: 20,
  gridContainer: {
    marginTop: "1rem",
  },
};

const useStyles = makeStyles(style);

export default function ProductDetailCard(props) {
  const classes = useStyles();
  const product = props.data;
  //Modals
  const [detailModal, setDetailModal] = useState(false);
  return (
    <Card product>
      <CardHeader image>
        <img src={product[1].thumb} height="150px" alt=".." />
      </CardHeader>
      <CardBody plain>
        <h4 className={classes.cardTitle}>{product[1].name}</h4>
        <GridContainer
          justify="center"
          spacing={2}
          className={classes.gridContainer}
        >
          {product[1].attribute["26"] !== "" && (
            <GridItem xs={2}>
              <Tooltip
                title="Asistencia Jurídica"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button justIcon simple color="success">
                  <Gavel />
                </Button>
              </Tooltip>
            </GridItem>
          )}
          {product[1].attribute["38"] !== "" && (
            <GridItem xs={2}>
              <Tooltip
                id="tooltip-top"
                title="Vehiculo de Reemplazo"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button justIcon simple color="success">
                  <Car />
                </Button>
              </Tooltip>
            </GridItem>
          )}
          {product[1].attribute["58"] !== "" && (
            <GridItem xs={2}>
              <Tooltip
                id="tooltip-top"
                title="Conductor Elegido"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button justIcon simple color="success">
                  <Person />
                </Button>
              </Tooltip>
            </GridItem>
          )}
          <GridItem container xs={12}>
            <GridItem xs={12}>
              <p color="info">
                <b>Precio: </b>
                {product[1].price} COP
              </p>
            </GridItem>
            {product[1].cuotaInicialFinanciacion === "Si" && (
              <GridItem xs={12}>
                <p>
                  <b>Financiación: </b>
                  <b>{product[1].numeroCuotaFinanciacion}</b> cuotas de{" "}
                  <b>{product[1].valorCuotaFinanciacion} COP </b>
                </p>
              </GridItem>
            )}
            <GridItem xs={12}>
              <p>
                <b>Vigencia: </b>
                Hasta el {product[1].vigencia_cotizacion}
              </p>
            </GridItem>
          </GridItem>
        </GridContainer>
      </CardBody>
      <CardFooter plain className={classes.justifyContentBetween}>
        <Tooltip
          id="tooltip-top"
          title="Ver Detalles"
          placement="bottom"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            justIcon
            simple
            color="info"
            className={classes.pullRight}
            onClick={() => setDetailModal(true)}
          >
            <Add />
          </Button>
        </Tooltip>
      </CardFooter>
      <ProductDetailModal
        showModal={detailModal}
        handleModal={setDetailModal}
        data={product}
        groups={props.groups}
        comp={props.comp}
      />
    </Card>
  );
}
