import { infoColor } from "assets/jss/material-kit-pro-react";
import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto,
  grayColor,
  blackColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";

const styles = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyle,
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset !important",
    },
  },
  coloredShadow,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    marginBottom: "0px !important",
  },
  cardDescription: {
    color: grayColor[0],
    textAlign: "center",
  },
  container: {
    ...container,
  },
  description: {
    color: grayColor[0],
  },
  section: {
    ...section,
    padding: "20px 0px",
  },
  priceContainer: {
    display: "inline-flex",
  },
  price: {
    fontSize: "18px",
    color: grayColor[22],
  },
  pullRight: {
    float: "right",
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none",
    },
    "& a": {
      display: "block",
    },
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify!important",
    justifyContent: "space-between !important",
  },
  customExpandPanel: {
    maxHeight: "273px",
    overflowY: "scroll",
    "&  label": {
      display: "block",
    },
  },
  priceSlider: {
    fontWeight: "500",
  },
  refineButton: {
    margin: "-3px 0",
  },
  cardBodyRefine: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  textLeft: {
    textAlign: "left",
  },
  detailItem: {
    padding: 0,
  },
  attDesc: {
    marginLeft: "18px",
  },
  price: {
    color: infoColor[1],
    margin: 0,
  },
  compareButton: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    backgroundColor: "#00acc1",
  },
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor:
        "rgba(" + hexToRgb(infoColor[0]) + ", 0.14) !important",
    },
  },
  checked: {
    color: infoColor[0] + "!important",
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", 0.84)",
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px",
  },
  legalNote: {
    fontSize: "0.8rem",
    margin: "0.5rem",
  },
};

export default styles;
