import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

const Input = forwardRef((props, ref) => {
  return <TextField margin="normal" inputRef={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;
