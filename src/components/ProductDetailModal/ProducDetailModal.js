import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import style from "assets/jss/material-kit-pro-react/CustomModalStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function ProductDetailModal(props) {
  const classes = useStyles();
  const products = props.comp;
  const productData = props.data[1];
  const attGroups = props.groups;

  const comparativeArr = products.filter((prod) => prod[0] !== props.data[0]);
  const [comparative, setComparative] = useState([]);

  const handleChange = (event) => {
    setComparative(event.target.value);
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
          <GridContainer>
            <GridItem container justify="center" xs={12}>
              <img height="120px" src={productData.thumb} alt="insThumb" />
            </GridItem>
          </GridContainer>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer spacing={1}>
            <GridItem container justify="center" xs={12}>
              <FormControl style={{ maxWidth: "95%", minWidth: "200px" }}>
                <InputLabel>Comparar con...</InputLabel>
                <Select
                  multiple
                  value={comparative}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => (
                    <div>
                      {selected.map((value, i) => (
                        <Chip key={i} label={value.name} color="primary" />
                      ))}
                    </div>
                  )}
                >
                  {comparativeArr.map((prod) => (
                    <MenuItem key={prod[0]} value={prod[1]}>
                      <Checkbox
                        checked={
                          comparative.indexOf(prod[1]) > -1 ? true : false
                        }
                        color="primary"
                      />
                      <ListItemText
                        primary={prod[1].name}
                        secondary={prod[1].price}
                      />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </GridItem>
            {attGroups.map((group) => (
              <React.Fragment key={group[0]}>
                <GridItem xs={12}>
                  <Divider style={{ marginTop: 20 }} />
                </GridItem>
                <h5 className={classes.groupTitle} style={{ fontSize: "1rem" }}>
                  {group[1].name}
                </h5>
                {Object.keys(group[1].attribute).map((el, i) => (
                  <GridItem
                    container
                    justify="center"
                    key={i}
                    style={{ width: "100%" }}
                  >
                    <GridItem container xs={12}>
                      <GridItem xs={12}>
                        <h6 className={classes.attrTitle}>
                          <b>{group[1].attribute[el].name}</b>
                        </h6>
                      </GridItem>
                    </GridItem>
                    <GridItem container justify="center" xs={12}>
                      <Paper elevation={3} className={classes.paper}>
                        {el === "67" ? (
                          productData.attribute[el]
                            .split("&lt;ul&gt;&lt;li&gt;")
                            .map((str, i) => (
                              <GridContainer
                                justify="center"
                                direction="row"
                                alignItems="center"
                                key={i}
                              >
                                <GridItem xs={8}>
                                  <p className={classes.description}>{str}</p>
                                </GridItem>
                              </GridContainer>
                            ))
                        ) : (
                          <GridItem xs={12}>
                            <p className={classes.descriptionMain}>
                              {productData.attribute[el] === ""
                                ? "N/A"
                                : productData.attribute[el]}
                            </p>
                          </GridItem>
                        )}
                      </Paper>
                    </GridItem>
                    {comparative.length > 0 && (
                      <GridItem container justify="center" xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                          <GridContainer justify="center" direction="row" spacing={3}>
                            {comparative.map((prod, i) => (
                              <React.Fragment key={i}>
                                {el === "67" ? (
                                  prod.attribute[el]
                                    .split("&lt;/ul&gt;&lt;li&gt;")
                                    .map((str, i) => (
                                      <span key={i}>
                                        <p className={classes.description}>
                                          {str}
                                        </p>
                                      </span>
                                    ))
                                ) : (
                                  <GridItem xs={12} lg={2}>
                                    <p className={classes.description} style={{width: "auto"}}>
                                      {prod.attribute[el] === ""
                                        ? "N/A"
                                        : prod.attribute[el]}
                                    </p>
                                  </GridItem>
                                )}
                              </React.Fragment>
                            ))}
                          </GridContainer>
                        </Paper>
                      </GridItem>
                    )}
                  </GridItem>
                ))}
              </React.Fragment>
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
