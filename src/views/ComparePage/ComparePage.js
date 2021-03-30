/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Parallax from "components/Parallax/CustomParallax.js";
//redux
import { useSelector } from "react-redux";
import {
  selectProductDetail,
  selectAttributeGroups,
  selectTotalProducts,
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
  const attGroups = useSelector(selectAttributeGroups);
  const totalProducts = useSelector(selectTotalProducts);
  const classes = useStyles();

  return (
    <div className={classes.productPage}>
      <Parallax
        height="50vh"
        gradient="linear-gradient(90deg, rgba(73,9,211,1) 20%, rgba(84,243,255,1) 100%)"
      ></Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container} style={{maxWidth: "100%"}}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <h2 className={classes.title}>Comparativa De Productos</h2>
            <h3 className={classes.mainPrice}>
              Comparativa general de los productos encontrados
            </h3>
            <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>CARACTERISTICAS</StyledTableCell>
                    {totalProducts.map((prod) => (
                      <StyledTableCell key={prod[0]} align="center">
                        <h6>{prod[1].name}</h6>
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attGroups.map((group) => (
                    <React.Fragment>
                      <StyledTableRow key={group[0]}>
                        <StyledTableCell
                          align="left"
                          colSpan={totalProducts.length + 1}
                        >
                          <h6 style={{fontSize: "1rem"}}>{group[1].name}</h6>
                        </StyledTableCell>
                      </StyledTableRow>
                      {Object.keys(group[1].attribute).map((el, i) => (
                        <TableRow key={i}>
                          <TableCell align="left">
                            <b>{group[1].attribute[el].name}</b>
                          </TableCell>
                          {totalProducts.map((prod, i) => (
                            <TableCell>
                              {el === "67" ? (
                                prod[1].attribute[el]
                                  .split(/<\/li><\/ul>|<\/li> <\/ul>/)
                                  .filter((str) => str.trim().length > 0)
                                  .map((str, i) => (
                                    <p key={i} className={classes.description}>
                                      - {str}
                                    </p>
                                  ))
                              ) : (
                                <span className={classes.description}>
                                  {prod[1].attribute[el] === "" ||
                                  prod[1].attribute[el] === undefined
                                    ? "N/A."
                                    : prod[1].attribute[el] + "."}
                                </span>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography color="textSecondary" style={{ marginTop: "1rem" }}>
              Cada cotización es provisional y no implica aceptación del riesgo,
              todas las condiciones incluyendo precios, tasas de financiación y
              coberturas están sujetas a cambios, revisión, verificación y
              aceptación acorde las políticas y parámetros de las aseguradoras e
              intermediario, pudiendo variar el momento de emitir la póliza.
              Tiempo de vigencia de las cotizaciones es de 5 días calendario.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
