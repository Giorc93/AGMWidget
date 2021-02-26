import React, { forwardRef } from "react";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const CustomAutoComplete = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const options = props.options;

  return (
    <Autocomplete
      // eslint-disable-next-line react/prop-types
      loading={props.loading}
      loadingText={props.loadingText}
      noOptionsText={props.noOptionsText}
      onChange={(e, v, r) => (props.onChange ? props.onChange(e, v, r) : null)}
      options={options}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField inputRef={ref} {...params} {...props} margin="normal" />
      )}
    />
  );
});

CustomAutoComplete.displayName = "CustomAutocomplete";

export default CustomAutoComplete;
