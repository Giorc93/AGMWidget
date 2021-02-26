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
    <Card plain product>
      <CardHeader image>
        <img src={product[1].thumb} height="150px" alt=".." />
      </CardHeader>
      <CardBody plain>
        <a href="#">
          <h4 className={classes.cardTitle}>{product[1].name}</h4>
        </a>
        <GridContainer
          justify="center"
          spacing={2}
          className={classes.gridContainer}
        >
          {product[1].attribute["26"] !== "" && (
            <Tooltip
              title="Asistencia Jurídica"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button justIcon simple color="success">
                <Gavel />
              </Button>
            </Tooltip>
          )}
          {product[1].attribute["38"] !== "" && (
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
          )}
          {product[1].attribute["58"] !== "" && (
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
          )}
        </GridContainer>
      </CardBody>
      <CardFooter plain className={classes.justifyContentBetween}>
        <div className={classes.priceContainer}>
          <span className={classes.price}>
            <h5>Precio</h5>
            <p>
              <b>{product[1].price} </b>COP
            </p>
          </span>
        </div>
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
        data={product[1]}
        groups={props.groups}
      />
    </Card>
  );
}
