import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { AccessTime, People, ShowChart } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>AgenteMotor</h2>
          <h5 className={classes.description}>
            AgenteMotor es servicio para intermediarios de seguros, que permite
            crear en menos de 5 minutos un comparativo de seguro de vehículo con
            todas las aseguradoras con las que el intermediario posee convenios.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Comparativo"
              description="Crea un comparativo de seguros de vehículos en menos de 5 minutos"
              icon={AccessTime}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Asesora y Vende"
              description="Deja que tu asesores concreten las ventas, sin perder tiempo realizando cotizaciones"
              icon={People}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Mejora Tus Ventas"
              description="Mejora tu servicio y ventas con clientes satisfechos"
              icon={ShowChart}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
