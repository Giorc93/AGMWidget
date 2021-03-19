import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//
import { useDispatch, useSelector } from "react-redux";

import {
  setVehicleData,
  selectSearchType,
  setReferenceData,
} from "redux/features/QuotationForm/quotationDataSlice";
import SearchResultModal from "components/SearchResultModal/SearchResultModal";
import VehicleRiskModal from "components/VehicleRiskModal/VehicleRiskModal";
// utils
import { defaultData } from "utils/inputArrays";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridContainer";
import { cardTitle } from "assets/jss/material-kit-pro-react.js";

const style = {
  cardTitle,
  gridContainer: {
    margin: 0,
  },
  gridItem: {
    margin: 0,
  },
  vehicleSpec: {
    margin: 0,
    textTransform: "capitalize",
  },
};

const useStyles = makeStyles(style);

export default function CardDetailCard(props) {
  const searchType = useSelector(selectSearchType);
  const dispatch = useDispatch();
  const classes = useStyles();
  const vehicleData = props.data;
  const vehicleReference =
    vehicleData.codification.line1 +
    " " +
    vehicleData.codification.line2 +
    " " +
    vehicleData.codification.line3;
  const vehicleRisk = vehicleData.vehicle_risk;
  const refPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(vehicleRisk.reference_price);
  //Modals
  const [searchModal, setSearchModal] = React.useState(false);
  const [vehicleRiskModal, setVehicleRiskModal] = React.useState(false);

  const handleSelectVehicle = () => {
    dispatch(setVehicleData(vehicleData));
    setVehicleRiskModal(true);
  };

  useEffect(() => {
    return () => {searchType === "reference" && dispatch(setReferenceData(defaultData))}
  }, []);

  return (
    <Card style={{ width: 400 }}>
      <CardHeader
        color="info"
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {props.dataLength > 1 ? vehicleData.brand : vehicleData.plate}
      </CardHeader>
      <img
        src="https://via.placeholder.com/320x150"
        alt="placeholderImage"
        style={{ margin: "1em 0.5em 0em 0.5em " }}
      />
      <CardBody>
        <h3 className={classes.cardTitle}>{vehicleData.brand}</h3>
        <h4 className={classes.cardTitle} style={{ textAlign: "justify" }}>
          {vehicleReference}
        </h4>
        <GridContainer className={classes.gridContainer} spacing={2}>
          <GridItem
            className={classes.gridItem}
            xs={12}
            sm={6}
            container
            direction="column"
          >
            <h5 className={classes.vehicleSpec}>
              <strong>Cod.Fasecolda</strong>
              <i className="fas fa-barcode" style={{ marginLeft: 5 }}></i>
            </h5>
            <h5 className={classes.vehicleSpec}>{vehicleData.code}</h5>
          </GridItem>
          <GridItem
            className={classes.gridItem}
            xs={12}
            sm={6}
            container
            direction="column"
          >
            <h5 className={classes.vehicleSpec}>
              <strong>Modelo</strong>
              <i
                className="fas fa-hourglass-half"
                style={{ marginLeft: 5 }}
              ></i>
            </h5>
            <h5 className={classes.vehicleSpec}>{vehicleData.model}</h5>
          </GridItem>
          <GridItem
            className={classes.gridItem}
            xs={12}
            sm={6}
            container
            direction="column"
          >
            <h5 className={classes.vehicleSpec}>
              <strong>Tipo</strong>
              <i className="fas fa-car" style={{ marginLeft: 5 }}></i>
            </h5>
            <h5 className={classes.vehicleSpec}>
              {vehicleData.type.toLowerCase()}
            </h5>
          </GridItem>
          <GridItem
            className={classes.gridItem}
            xs={12}
            sm={6}
            container
            direction="column"
          >
            <h5 className={classes.vehicleSpec}>
              <strong>Cilindraje</strong>
              <i className="fas fa-cogs" style={{ marginLeft: 5 }}></i>
            </h5>
            <h5 className={classes.vehicleSpec}>
              {vehicleData.cylinder === "0"
                ? "N/A - Eléctrico"
                : `${vehicleData.cylinder} CC`}
            </h5>
          </GridItem>
          <GridItem
            className={classes.gridItem}
            xs={12}
            container
            direction="column"
          >
            <h5 className={classes.vehicleSpec}>
              <strong>Precio de Referencia</strong>
              <i className="fas fa-dollar-sign" style={{ marginLeft: 5 }}></i>
            </h5>
            <h5 className={classes.vehicleSpec}>
              {refPrice}
              {" COP"}
            </h5>
          </GridItem>
          {props.dataLength === 1 && (
            <React.Fragment>
              <GridItem
                container
                justify="center"
                xs={12}
                sm={6}
                className={classes.gridItem}
              >
                <Button
                  size="sm"
                  color="warning"
                  onClick={() => setSearchModal(true)}
                >
                  No es mi vehiculo
                </Button>
              </GridItem>
              <GridItem
                container
                justify="center"
                xs={12}
                sm={6}
                className={classes.gridItem}
              >
                <Button color="info" onClick={() => handleSelectVehicle()}>
                  ¡Es mi vehiculo!
                </Button>
              </GridItem>
            </React.Fragment>
          )}
          {props.dataLength > 1 && (
            <React.Fragment>
              <GridItem
                container
                justify="center"
                xs={12}
                className={classes.gridItem}
              >
                <Button color="info" onClick={() => handleSelectVehicle()}>
                  ¡Es mi vehiculo!
                </Button>
              </GridItem>
            </React.Fragment>
          )}
        </GridContainer>
      </CardBody>
      <SearchResultModal
        showModal={searchModal}
        handleModal={setSearchModal}
        handleStep={props.handleStep}
      />
      <VehicleRiskModal
        showModal={vehicleRiskModal}
        handleModal={setVehicleRiskModal}
        handleStep={props.handleStep}
        vehicleData={vehicleData}
      />
    </Card>
  );
}
