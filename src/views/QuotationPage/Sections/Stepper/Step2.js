import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
//core components
import CustomSelect from "components/CustomForm/CustomSelect";
import CustomInput from "components/CustomForm/CustomInput";
import CustomButton from "components/CustomButtons/Button";
import CustomForm from "components/CustomForm/CustomForm";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
//utils
//schemas de validadores para emplear con yup cargados desde archivo validators.
import { idType, idNumber } from "utils/validators";
//arrays de opciones de seleccción cargado desde archivo inputArray
import { idTypeArr } from "utils/inputArrays";
//redux
import {
  setDocumentData,
  selectDocumentData,
} from "redux/features/QuotationForm/quotationDataSlice";

const Step2 = (props) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        idType,
        idNumber,
      })
    ),
  });

  const documentData = useSelector(selectDocumentData);

  const onSubmit = (data) => {
    dispatch(setDocumentData(data));
    props.handleNext();
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <GridContainer justify="center" spacing={2}>
        <GridItem xs={12}>
          <h3 style={{ textAlign: "center" }}>Número de documento del propietario del vehículo</h3>
        </GridItem>
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={idTypeArr}
            name="idType"
            control={control}
            ref={register}
            defaultValue={documentData.idType}
            label="Tipo de Documento"
            error={!!errors.idType}
            helperText={errors?.idType?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="idNumber"
            fullWidth
            ref={register}
            label="Número de documento"
            error={!!errors.idNumber}
            helperText={errors?.idNumber?.message}
            defaultValue={documentData.idNumber}
          />
        </GridItem>
        <GridItem container justify="center" direction="row-reverse" xs={12}>
          <GridItem container justify="center" xs={6} md={3}>
            <CustomButton type="submit" fullWidth color="info">
              Siguiente
            </CustomButton>
          </GridItem>
          <GridItem container justify="center" xs={6} md={3}>
            <CustomButton onClick={() => props.handleBack()} fullWidth>
              Atrás
            </CustomButton>
          </GridItem>
        </GridItem>
      </GridContainer>
    </CustomForm>
  );
};

export default Step2;
