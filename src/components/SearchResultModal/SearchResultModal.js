import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import List from "@material-ui/icons/List";
import CallToAction from "@material-ui/icons/CallToAction";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";

import style from "assets/jss/material-kit-pro-react/modalStyle.js";

import { useDispatch } from "react-redux";
import { setSearchType } from "redux/features/QuotationForm/quotationDataSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function SearchResultModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSearchType = (type) => {
    dispatch(setSearchType(type));
    props.handleStep(0);
  };
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
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => props.handleModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle} style={{ textAlign: "center" }}>
            ¡No te preocupes, te ayudaremos a encontrar tu vehiculo!
          </h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <p style={{ fontSize: "1rem" }}>
            Puedes encontrar tu vehiculo, cambiando el número de placa o
            realizando una búsqueda por referencia
          </p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <GridContainer justify="center">
            <GridItem xs={12} md={6}>
              <Button
                onClick={() => handleSearchType("plate")}
                color="info"
                simple
              >
                Cambiar el número de placa{" "}
                <CallToAction style={{ marginLeft: 10 }} />
              </Button>
            </GridItem>
            <GridItem xs={12} md={6}>
              <Button
                onClick={() => handleSearchType("reference")}
                color="rose"
                simple
              >
                Buscar por referencia <List style={{ marginLeft: 10 }} />
              </Button>
            </GridItem>
          </GridContainer>
        </DialogActions>
      </Dialog>
    </div>
  );
}
