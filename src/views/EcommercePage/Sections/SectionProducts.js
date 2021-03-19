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
import { responseJSON } from 'utils/responseJSON';

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
  } = jsonData.data;

  const [products, setProducts] = React.useState(
    Object.entries(productos).filter(
      (product) => product[1].quotestage === "Created"
    )
  );
  const attributeGroups = Object.entries(attribute_groups);
  const attGroupArr = [];
  attributeGroups.map((el) => attGroupArr.push(el[1]));
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const [priceRange, setPriceRange] = React.useState([500000, 1200000]);

  const loadProducts = () => {
    socket.on("update-quotes-io", (data) => {
      console.log(data);
      typeof data.products === "object" && 
        setProducts([...products, Object.entries(data.products)[0]]);
    });
  };

  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: priceRange,
        connect: true,
        range: { min: 0, max: 5000000 },
        step: 100000,
      }).on("update", function (values) {
        setPriceRange([Math.round(values[0]), Math.round(values[1])]);
      });
    }
    socket.emit("create-room", "room-" + id);
    return function cleanup() {};
  }, []);

  React.useEffect(() => {
    loadProducts();
  }, [products])

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>{products.length} Seguros Encontrados</h2>
        <GridContainer>
          <GridItem sm={12} md={3}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                <h4 className={classes.cardTitle + " " + classes.textLeft}>
                  Filtrar
                  <Tooltip
                    id="tooltip-top"
                    title="Limpiar Filtros"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      link
                      justIcon
                      size="sm"
                      className={classes.pullRight + " " + classes.refineButton}
                    >
                      <Cached />
                    </Button>
                  </Tooltip>
                  <Clearfix />
                </h4>
                <Accordion
                  active={[0, 1]}
                  activeColor="info"
                  collapses={[
                    {
                      title: "Precio",
                      content: (
                        <CardBody className={classes.cardBodyRefine}>
                          <span
                            className={classNames(
                              classes.pullLeft,
                              classes.priceSlider
                            )}
                          >
                            ${priceRange[0]}
                          </span>
                          <span
                            className={classNames(
                              classes.pullRight,
                              classes.priceSlider
                            )}
                          >
                            ${priceRange[1]}
                          </span>
                          <br />
                          <br />
                          <div id="sliderRegular" className="slider-success" />
                        </CardBody>
                      ),
                    },
                    {
                      title: "Compañía",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            {products.map((product) => (
                              <FormControlLabel
                                key={product[0]}
                                control={
                                  <Checkbox
                                    disableRipple
                                    tabIndex={-1}
                                    onClick={() => handleToggle(2)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                    }
                                    icon={
                                      <Check
                                        className={classes.uncheckedIcon}
                                      />
                                    }
                                    classes={{
                                      checked: classes.checked,
                                      root: classes.checkRoot,
                                    }}
                                  />
                                }
                                classes={{ label: classes.label }}
                                label={product[1].manufacturer}
                              />
                            ))}
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={9} xs={12}>
            <GridContainer>
              {products.map((product) => (
                <GridItem xs={8} sm={6} lg={4} key={product[0]}>
                  <ProductDetailCard data={product} groups={attributeGroups} comp={products}/>
                </GridItem>
              ))}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
