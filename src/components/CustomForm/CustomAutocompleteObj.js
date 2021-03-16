import React, { forwardRef } from "react";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const CustomAutoComplete = forwardRef((props, ref) => {
  const options = props.options;

  return (
    <Autocomplete
      loading={props.loading}
      loadingText={props.loadingtext}
      noOptionsText={props.nooptionstext}
      onChange={(e, v, r) => (props.onChange ? props.onChange(e, v, r) : null)}
      options={options}
      getOptionLabel={(option) => `${option.city_name} (${option.state_name})`}
      renderInput={(params) => (
        <TextField inputRef={ref} {...params} {...props} margin="normal" />
      )}
    />
  );
});

CustomAutoComplete.displayName = "CustomAutocomplete";

export default CustomAutoComplete;
