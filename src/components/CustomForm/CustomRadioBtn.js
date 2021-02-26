import React from "react";

import { Controller } from "react-hook-form";

import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";

const RadioButton = (props) => {
  return (
    <div style={{ marginTop: 8, marginBottom: 8 }}>
      <label>{props.label}</label>
      <Controller
        control={props.control}
        defaultValue={props.defaultValue}
        as={
          <RadioGroup row name={props.name}>
            {props.options.map((option, i) => (
              <FormControlLabel
                key={i}
                value={option.value}
                control={<Radio color={props.color} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        }
        name={props.name}
      />
    </div>
  );
};

export default RadioButton;
