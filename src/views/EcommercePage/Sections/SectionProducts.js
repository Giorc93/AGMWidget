import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui icons
// core components
import ProductDetailCard from "components/ProductDetailCard/ProductDetailCard";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// redux
import {
  selectQuotationResultJSON,
  selectQuotationResultURL,
} from "redux/features/QuotationForm/quotationResultSlice";
// socket
import { socket } from "utils/global";
import { useSelector, useDispatch } from "react-redux";
import { setTotalProducts } from 'redux/features/QuotationForm/quotationResultSlice';
// JSON
import { responseJSON } from "utils/responseJSON";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const dispatch = useDispatch();
  const jsonData = useSelector(selectQuotationResultJSON);
  const urlData = useSelector(selectQuotationResultURL);
  const id = urlData.data.event_id;

  const { products: productos, attribute_groups } = jsonData.data;

  const [products, setProducts] = React.useState(
    Object.entries(productos).filter(
      (product) => product[1].quotestage === "Created"
    )
  );

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
    dispatch(setTotalProducts(products));
  }, [products]);

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12}>
            <GridContainer>
              {products.map((product) => (
                <GridItem xs={8} sm={6} md={4} lg={3} key={product[0]}>
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
              *Cada cotización es provisional y no implica aceptación del
              riesgo, todas las condiciones incluyendo precios, tasas de
              financiación y coberturas están sujetas a cambios, revisión,
              verificación y aceptación acorde las políticas y parámetros de las
              aseguradoras e intermediario, pudiendo variar el momento de emitir
              la póliza. Tiempo de vigencia de las cotizaciones es de 5 días
              calendario.
            </span>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
