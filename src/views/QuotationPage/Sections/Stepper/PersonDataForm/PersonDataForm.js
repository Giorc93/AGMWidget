import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import {
  idType,
  idNumber,
  name,
  surname,
  phoneNumber,
  email,
  birthdate,
  contactName,
} from "utils/validators";
import {
  setPersonData,
  selectDocumentData,
} from "redux/features/QuotationForm/quotationDataSlice";
import {
  idTypeArr,
  genderArr,
  occupationArr,
  actualSituation,
  reqDate,
} from "utils/inputArrays";

import CustomDatePicker from "components/CustomForm/CustomDatePicker";
import CustomRadioBtn from "components/CustomForm/CustomRadioBtn";
import CustomSelect from "components/CustomForm/CustomSelect";
import CustomInput from "components/CustomForm/CustomInput";
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomForm from "components/CustomForm/CustomForm";

const PersonDataForm = (props) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, watch, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        idType,
        idNumber,
        name,
        surname,
        phoneNumber,
        email,
        birthdate,
        contactName,
      })
    ),
  });

  const documentData = useSelector(selectDocumentData);
  const watchContact = watch("contactInfo");

  const onSubmit = (data) => {
    dispatch(setPersonData(data));
    props.handleNext();
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <GridContainer spacing={2}>
        <GridItem xs={12}>
          <h3 style={{ textAlign: "center" }}>Información Persona Natural</h3>
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="name"
            fullWidth
            ref={register}
            label="Nombre(s)"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="surname"
            fullWidth
            ref={register}
            label="Apellido(s)"
            error={!!errors.surname}
            helperText={errors?.surname?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomRadioBtn
            label="Género"
            defaultValue="M"
            control={control}
            name="gender"
            options={genderArr}
          />
        </GridItem>
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={idTypeArr.filter((el) => el.value !== "NIT")}
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
            label="Número de Documento"
            error={!!errors.idNumber}
            helperText={errors?.idNumber?.message}
            defaultValue={documentData.idNumber}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomDatePicker
            name="birthdate"
            label="Fecha de Nacimiento"
            control={control}
          />
        </GridItem>
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={occupationArr}
            name="occupation"
            control={control}
            ref={register}
            defaultValue={"Independiente"}
            label="Ocupación"
            error={!!errors.occupation}
            helperText={errors?.occupation?.message}
          />
        </GridItem>
        <GridItem xs={12}>
          <h5>Información de Contacto</h5>
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="phoneNumber"
            fullWidth
            ref={register}
            label="Número Telefónico"
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="email"
            fullWidth
            ref={register}
            label="Email"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomRadioBtn
            label="¿Es la información de contacto del titular?"
            defaultValue="true"
            control={control}
            name="contactInfo"
            options={[
              { value: "true", label: "Sí" },
              { value: "false", label: "No" },
            ]}
          />
        </GridItem>
        {watchContact === "false" && (
          <GridItem container xs={12} sm={4} justify="center">
            <CustomInput
              name="contactName"
              fullWidth
              ref={register}
              label="Nombre del Contacto"
              error={!!errors.contactName}
              helperText={errors?.contactName?.message}
            />
          </GridItem>
        )}
        <GridItem xs={12}>
          <h5>Prioridad</h5>
        </GridItem>
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={actualSituation}
            name="actualSituation"
            control={control}
            ref={register}
            defaultValue={"new"}
            label="¿Situación Actual?"
            error={!!errors.actualSituation}
            helperText={errors?.actualSituation?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={reqDate}
            name="reqDate"
            control={control}
            ref={register}
            defaultValue={"today"}
            label="¿Cuándo necesitas la póliza?"
            error={!!errors.reqDate}
            helperText={errors?.reqDate?.message}
          />
        </GridItem>
        <GridItem container justify="center" direction="row-reverse" xs={12}>
          <GridItem container justify="center" xs={6} md={3}>
            <CustomButton type="submit" fullWidth color="info">
              Siguiente
            </CustomButton>
          </GridItem>
          <GridItem container justify="center" xs={6} md={3}>
            <CustomButton onClick={() => props.handleStep(2)} fullWidth>
              Atrás
            </CustomButton>
          </GridItem>
        </GridItem>
      </GridContainer>
    </CustomForm>
  );
};

export default PersonDataForm;
