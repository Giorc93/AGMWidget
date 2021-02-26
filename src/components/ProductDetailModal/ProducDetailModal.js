import React from "react";
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
import Button from "components/CustomButtons/Button.js";

import style from "assets/jss/material-kit-pro-react/modalStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function ProductDetailModal(props) {
  const classes = useStyles();
  const productData = props.data;
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
          <GridContainer>
            <GridItem xs={4}>
              <img src={productData.thumb} width="100%" />
            </GridItem>
            <GridItem container alignItems="center" xs={8}>
              <h3
                className={classes.modalTitle}
                style={{ textAlign: "center" }}
              >
                {productData.name}
              </h3>
            </GridItem>
          </GridContainer>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer justify="center" spacing={2}>
            {props.groups.map((el, i) => (
              <GridItem xs={12} key={i}>
                <h5>{el[1].name}</h5>
                {Object.entries(el[1].attribute).map((ent, i) => (
                  <h6 key={i}>{ent}</h6>
                ))}
              </GridItem>
            ))}
            <GridItem xs={12}>
              <CustomButton type="button" color="info">
                Solicitar
              </CustomButton>
            </GridItem>
          </GridContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
}
