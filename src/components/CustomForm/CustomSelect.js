import React, { forwardRef } from "react";

import { Controller } from "react-hook-form";

import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
}));

const CustomSelect = forwardRef((props, ref) => {
  const styles = useStyles();
  return (
    <FormControl fullWidth className={styles.root}>
      <InputLabel>{props.label}</InputLabel>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        as={
          <Select label={props.label}>
            {props.options.map((option, i) => (
              <MenuItem value={option.value} key={i}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        }
      />
    </FormControl>
  );
});

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
