import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomButton from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//ResponseJSON

import descriptionStyle from "assets/jss/material-kit-pro-react/views/quotationSections/descriptionStyles";

const useStyles = makeStyles(descriptionStyle);

export default function SectionResults(props) {
  const classes = useStyles();
  const {
    products: productos,
    attribute_groups,
    aseguradoInfo: insuredInfo,
    vehiculoInfo: vehicleInfo,
    asesor_Info: advisorInfo,
    agenciaInfo: agencyInfo,
  } = props.data;
  const products = Object.entries(productos);
  const attributeGroups = Object.entries(attribute_groups);
  console.log(products);
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem xs={12}>
          <h2>Resultados</h2>
        </GridItem>
        {products.map((product) => (
          <Card style={{ width: "100%" }} key={product[0]}>
            <CardHeader color="info">{product[1].name}</CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={3}>
                  <img src={product[1].thumb} width={"80%"} />
                </GridItem>
                <GridItem xs={9}>
                  <GridItem>
                    <h5>Precio</h5>
                    <p>{product[1].price}</p>
                  </GridItem>
                  <GridItem>
                    <h5>Aseguradora</h5>
                    <p>{product[1].manufacturer}</p>
                  </GridItem>
                  <GridItem>
                    <h5>Vigencia</h5>
                    <p>{product[1].vigencia_cotizacion}</p>
                  </GridItem>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        ))}
      </GridContainer>
    </div>
  );
}
