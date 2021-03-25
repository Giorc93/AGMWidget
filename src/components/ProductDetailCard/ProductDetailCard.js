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
        <img src={product[1].thumb} height="100" alt=".." />
      </CardHeader>
      <CardBody plain>
        <h4 className={classes.cardTitle}>{product[1].name}</h4>
        <GridContainer
          justify="center"
          spacing={2}
          className={classes.gridContainer}
        >
          <GridItem container xs={12}>
            <GridItem xs={12}>
              <p color="info">
                <b>Responsabilidad Civil: </b>
                {product[1].attribute["21"] === "" || product[1].attribute["21"] === "No_Cubre" ? "No Cubre" : product[1].attribute["21"]} 
              </p>
              <p color="info">
                <b>Perdida total daños: </b>
                {product[1].attribute["28"] === "" || product[1].attribute["28"] === "No_Cubre" ? "No Cubre" : product[1].attribute["28"]} 
              </p>
              <p color="info">
                <b>Perdida parcial daños: </b>
                {product[1].attribute["29"] === "" || product[1].attribute["29"] === "No_Cubre" ? "No Cubre" : product[1].attribute["29"]} 
              </p>
              <p color="info">
                <b>Grua: </b>
                {product[1].attribute["57"] === "" || product[1].attribute["57"] === "No_Cubre" ? "No Cubre" : "Si"} 
              </p>
              <p color="info">
                <b>Vehiculo de reemplazo: </b>
                {product[1].attribute["38"] === "" || product[1].attribute["38"] === "No_Cubre" ? "No Cubre" : product[1].attribute["38"]} 
              </p>
              <p color="info">
                <b>Conductor elegido: </b>
                {product[1].attribute["56"] === "" || product[1].attribute["56"] === "No_Cubre" ? "No Cubre" : product[1].attribute["56"]} 
              </p>
            </GridItem>
            <GridItem container justify="center">
              <h5>{product[1].price}</h5>
            </GridItem>
            <Button color="info" fullWidth>
              Ver más
            </Button>
          </GridItem>
        </GridContainer>
      </CardBody>
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
