import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
// @material-ui/icons
import CompareIcon from "@material-ui/icons/Compare";
// core components
import CompareModal from "components/CompareModal/CompareModal";
import TableContainer from "@material-ui/core/TableContainer";
import GridContainer from "components/Grid/GridContainer.js";
import Parallax from "components/Parallax/CustomParallax.js";
import Button from "components/CustomButtons/Button";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import GridItem from "components/Grid/GridItem.js";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductDetail,
  selectAttributeGroups,
  setCompareProducts,
  rmCompareProducts,
  selectCompareProducts,
} from "redux/features/QuotationForm/quotationResultSlice";
//utils
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: productStyle.infoColor,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles(productStyle);

export default function ProductPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const dispatch = useDispatch();
  const compareProducts = useSelector(selectCompareProducts);
  const productData = useSelector(selectProductDetail);
  const attGroups = useSelector(selectAttributeGroups);
  const classes = useStyles();

  const [compareModal, setCompareModal] = React.useState(false);
  const [compareState, setCompareState] = React.useState(
    compareProducts.includes(productData[0]) ? false : true
  );

  const handleCompareChange = (value) => {
    if (compareProducts.includes(value)) {
      dispatch(rmCompareProducts(value));
      setCompareState(true);
    } else {
      dispatch(setCompareProducts([...compareProducts, value]));
      setCompareState(false);
    }
  };

  return (
    <div className={classes.productPage}>
      <Parallax
        height="50vh"
        gradient="linear-gradient(90deg, rgba(73,9,211,1) 20%, rgba(84,243,255,1) 100%)"
      ></Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer direction="row">
              <GridItem xs={12}>
                <GridContainer>
                  <GridItem
                    container
                    justify="center"
                    alignItems="center"
                    md={2}
                  >
                    <img src={productData[1].thumb} height="100px" />
                  </GridItem>
                  <GridItem xs={12} md={10}>
                    <h2 className={classes.title}>{productData[1].name}</h2>
                    <h3 className={classes.mainPrice}>
                      {productData[1].price}
                    </h3>
                    {productData[1].valorCuotaFinanciacion !== "" && (
                      <p>
                        <i>
                          O {productData[1].numeroCuotaFinanciacion} cuotas de{" "}
                          {productData[1].valorCuotaFinanciacion}.
                        </i>
                      </p>
                    )}
                    <Button
                      color="info"
                      size="sm"
                      onClick={() => handleCompareChange(productData[0])}
                    >
                      {compareState
                        ? "Añadir a comparativa"
                        : "Remover de la comparativa"}
                    </Button>
                  </GridItem>
                </GridContainer>
                <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
                  <Table
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          colSpan={2}
                          align="center"
                          style={{ fontSize: "1rem" }}
                        >
                          CARACTERISTICAS DEL PRODUCTO
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {attGroups.map((group) => (
                        <React.Fragment key={group[0]}>
                          <StyledTableRow >
                            <StyledTableCell align="left" colSpan={2}>
                              <h6 style={{ fontSize: "0.8rem" }}>
                                {group[1].name}
                              </h6>
                            </StyledTableCell>
                          </StyledTableRow>
                          {Object.keys(group[1].attribute).map((el, i) => (
                            <TableRow key={i}>
                              <TableCell>
                                <b>{group[1].attribute[el].name}</b>
                              </TableCell>
                              <TableCell
                                align={el === "67" ? "left" : "center"}
                              >
                                {el === "67" ? (
                                  productData[1].attribute[el]
                                    .split(/<\/li><\/ul>|<\/li> <\/ul>/)
                                    .filter((str) => str.trim().length > 0)
                                    .map((str, i) => (
                                      <p
                                        key={i}
                                        className={classes.description}
                                      >
                                        - {str}
                                      </p>
                                    ))
                                ) : (
                                  <span className={classes.description}>
                                    {productData[1].attribute[el] === "" ||
                                    productData[1].attribute[el] === undefined
                                      ? "N/A."
                                      : productData[1].attribute[el] + "."}
                                  </span>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </GridItem>
            </GridContainer>
            <Typography
              color="textSecondary"
              align="justify"
              className={classes.legalNote}
            >
              Cada cotización es provisional y no implica aceptación del riesgo,
              todas las condiciones incluyendo precios, tasas de financiación y
              coberturas están sujetas a cambios, revisión, verificación y
              aceptación acorde las políticas y parámetros de las aseguradoras e
              intermediario, pudiendo variar el momento de emitir la póliza.
              Tiempo de vigencia de las cotizaciones es de 5 días calendario.
            </Typography>
          </div>
          <Button
            round
            className={classes.compareButton}
            onClick={() => setCompareModal(true)}
          >
            <CompareIcon style={{ color: "#FFFFFF" }} />
            Comparar
          </Button>
        </div>
      </div>
      <CompareModal showModal={compareModal} handleModal={setCompareModal} />
    </div>
  );
}
