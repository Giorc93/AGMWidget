import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Cached from "@material-ui/icons/Cached";
import Check from "@material-ui/icons/Check";
// core components
import ProductDetailCard from "components/ProductDetailCard/ProductDetailCard";
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
// redux
import {
  selectQuotationResultJSON,
  selectQuotationResultURL,
} from "redux/features/QuotationForm/quotationResultSlice";
// socket
import { socket } from "utils/global";
import { useSelector } from "react-redux";
// JSON
import { responseJSON } from "utils/responseJSON";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const jsonData = useSelector(selectQuotationResultJSON);
  const urlData = useSelector(selectQuotationResultURL);
  const id = urlData.data.event_id;

  const {
    products: productos,
    attribute_groups,
    aseguradoInfo: insuredInfo,
    vehiculoInfo: vehicleInfo,
    asesor_Info: advisorInfo,
    agenciaInfo: agencyInfo,
  } = responseJSON; //jsonData.data;

  const [products, setProducts] = React.useState(
    Object.entries(productos).filter(
      (product) => product[1].quotestage === "Created"
    )
  );
  const [manufacturers, setManufacturers] = React.useState([
    ...new Set(
      products.map(function (prod) {
        return prod[1].manufacturer;
      })
    ),
  ]);
  const attributeGroups = Object.entries(attribute_groups);
  const attGroupArr = [];
  attributeGroups.map((el) => attGroupArr.push(el[1]));

  const loadProducts = () => {
    socket.on("update-quotes-io", (data) => {
      console.log(data);
      typeof data.products === "object" &&
        setProducts([...products, Object.entries(data.products)[0]]);
    });
  };

  React.useEffect(() => {
    socket.emit("create-room", "room-" + id);
    return function cleanup() {};
  }, []);

  React.useEffect(() => {
    loadProducts();
  }, [products]);

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>
          {products.length} Seguros encontrados con {manufacturers.length}{" "}
          aseguradoras
        </h2>
        <GridContainer>
          <GridItem xs={12}>
            <GridContainer>
              {products.map((product) => (
                <GridItem xs={8} sm={6} lg={3} key={product[0]}>
                  <ProductDetailCard
                    data={product}
                    groups={attributeGroups}
                    comp={products}
                  />
                </GridItem>
              ))}
            </GridContainer>
          </GridItem>
          <GridItem xs={12}>
            <span>
              *Cada cotización es provisional y no implica aceptación del riesgo,
              todas las condiciones incluyendo precios, tasas de financiación y
              coberturas están sujetas a cambios, revisión, verificación y
              aceptación acorde las políticas y parámetros de las aseguradoras e
              intermediario, pudiendo variar el momento de emitir la póliza.
              Tiempo de vigencia de las cotizaciones es de 5 días calendario.
            </span>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
