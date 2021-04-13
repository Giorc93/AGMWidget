import React, { useState } from "react";
import { useHistory } from "react-router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectTotalProducts,
  selectCompareProducts,
  rmCompareProducts,
} from "redux/features/QuotationForm/quotationResultSlice";

import style from "assets/jss/material-kit-pro-react/CustomModalStyle.js";
import { Delete } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function CompareModal(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const totalProducts = useSelector(selectTotalProducts);
  const compareProducts = useSelector(selectCompareProducts);

  const productList = totalProducts.filter((prod) =>
    compareProducts.includes(prod[0])
  );

  const handleDelete = (value) => {
    dispatch(rmCompareProducts(value));
  }

  return (
    <div>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={props.showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.handleModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <CustomButton
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => props.handleModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </CustomButton>
          <h4 className={classes.modalTitle} style={{ textAlign: "center" }}>
            PRODUCTOS A COMPARAR
          </h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer spacing={1}>
            {productList.length > 0 ? (
              productList.map((prod) => (
                <GridItem
                  container
                  justify="space-between"
                  key={prod[0]}
                  xs={12}
                >
                  <GridItem xs={10}>
                    <h5>{prod[1].name}</h5>
                  </GridItem>
                  <GridItem xs={2}>
                    <CustomButton justIcon simple onClick={() => handleDelete(prod[0])}><Delete style={{color: "gray"}}/></CustomButton>
                  </GridItem>
                </GridItem>
              ))
            ) : (
              <GridItem container justify="center">
                <h5>Selecciona uno o más productos para ir al comparativo</h5>
              </GridItem>
            )}
            <GridItem container justify="center" xs={12}>
              <CustomButton
                type="button"
                disabled={productList.length < 1 ? true : false}
                color="info"
                onClick={() => history.push("/compareTable")}
              >
                Ir a Comparativa
              </CustomButton>
            </GridItem>
          </GridContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
}
