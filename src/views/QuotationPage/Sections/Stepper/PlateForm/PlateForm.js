import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
//core components
import CustomInput from "components/CustomForm/CustomInput";
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import CustomForm from "components/CustomForm/CustomForm";
import GridItem from "components/Grid/GridItem";
//redux
import { getVehicleByPlate } from "redux/features/QuotationForm/vehicleByPlateSlice";
import {
  setSearchType,
  setPlateNumber,
  selectPlateNumber,
} from "redux/features/QuotationForm/quotationDataSlice";
//utils
import { plateNumber } from "utils/validators";

const inputProps = {
  style: {
    textTransform: "uppercase",
  },
};

const PlateForm = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        plateNumber,
      })
    ),
  });

  const plateNumberData = useSelector(selectPlateNumber);

  const onSubmit = (data) => {
    //getVehicleByPlate obtiene la información del vehiculo de acuerdo a la placa ingresada
    dispatch(getVehicleByPlate(data.plateNumber));
    //setPlateNumber guarda en el estado (redux) el número de placa
    dispatch(setPlateNumber(data.plateNumber));
    props.handleNext();
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <GridContainer justify="center" spacing={2}>
        <GridItem xs={12}>
          <h3 style={{ textAlign: "center" }}>Búsqueda por placa</h3>
        </GridItem>
        <GridItem xs={12} md={4}>
          <CustomInput
            type="text"
            name="plateNumber"
            fullWidth
            label="Placa"
            ref={register}
            error={!!errors.plateNumber}
            helperText={errors?.plateNumber?.message}
            defaultValue={plateNumberData}
            inputProps={inputProps}
          />
        </GridItem>
        <GridItem container justify="center" direction="row-reverse" xs={12}>
          <GridItem xs={6} md={3}>
            <CustomButton type="submit" fullWidth color="info">
              Siguiente
            </CustomButton>
          </GridItem>
          <GridItem xs={6} md={3}>
            <CustomButton disabled fullWidth>
              Atrás
            </CustomButton>
          </GridItem>
        </GridItem>
      </GridContainer>
    </CustomForm>
  );
};

export default PlateForm;
