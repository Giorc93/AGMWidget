import React from "react";
import { useSelector } from "react-redux";
//
import {
  selectPersonData,
  selectRiskData,
  selectVehicleData,
} from "redux/features/QuotationForm/quotationDataSlice";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";

const useStyles = makeStyles(styles);

export default function SectionData() {
  const { name, surname, phoneNumber, email, idType, idNumber } = useSelector(
    selectPersonData
  );
  const { code, plate, type, brand, model, line } = useSelector(
    selectVehicleData
  );
  const { vehiclePrice, accesoriesPrice, placeData } = useSelector(
    selectRiskData
  );
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Accordion
          active={0}
          activeColor="info"
          collapses={[
            {
              title: "Información del Asegurado",
              content: (
                <GridContainer>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Nombre(s): </b>
                      {name}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Apellido(s): </b>
                      {surname}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Documento: </b>
                      {idType} - {idNumber}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Email: </b>
                      {email}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Teléfono: </b>
                      {phoneNumber}
                    </span>
                  </GridItem>
                </GridContainer>
              ),
            },
            {
              title: "Información del Vehiculo",
              content: (
                <GridContainer>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Marca: </b>
                      {brand}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Referencia: </b>
                      {line}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Modelo: </b>
                      {model}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Tipo: </b>
                      {type}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Placa: </b>
                      {plate}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Ciudad de Circulación: </b>
                      {placeData}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Código: </b>
                      {code}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Valor Asegurable: </b> {vehiclePrice}
                    </span>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <span>
                      <b>Valor Accesorios: </b> {accesoriesPrice}
                    </span>
                  </GridItem>
                </GridContainer>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
