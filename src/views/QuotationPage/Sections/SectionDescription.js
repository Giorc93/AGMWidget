import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/quotationSections/descriptionStyles";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel efficitur diam, pretium pharetra ante. Cras ac facilisis dolor.
            Vestibulum vulputate, magna vel laoreet placerat, tellus tortor
            pellentesque quam, in fermentum mauris dui in dolor. Nulla imperdiet
            viverra lorem, ac facilisis mauris maximus sed.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
