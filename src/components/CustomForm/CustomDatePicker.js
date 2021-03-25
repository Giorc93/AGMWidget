import React, { Fragment } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Controller } from "react-hook-form";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/es";

function CustomDatePicker(props) {
  return (
    <Fragment>
      <MuiPickersUtilsProvider
        locale="es"
        libInstance={moment}
        utils={MomentUtils}
      >
        <Controller
          name={props.name}
          control={props.control}
          defaultValue={null}
          render={({ ref, ...rest }) => (
            <KeyboardDatePicker
              margin="normal"
              fullWidth
              cancelLabel="Cancelar"
              okLabel="Confirmar"
              minDate={moment().subtract(85, "years")}
              minDateMessage="Edad mínima 85 años"
              maxDate={moment().subtract(18, "years")}
              maxDateMessage="Edad mínima 18 años"
              invalidDateMessage="Formato de fecha inválido"
              id="date-picker-dialog"
              label={props.label}
              format="MM/DD/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              {...rest}
            />
          )}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default CustomDatePicker;
