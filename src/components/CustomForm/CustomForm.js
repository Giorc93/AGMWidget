import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

// eslint-disable-next-line react/prop-types
const CustomForm = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <form noValidate {...props} autoComplete="off" className={styles.root}>
      {children}
    </form>
  );
};

export default CustomForm;
