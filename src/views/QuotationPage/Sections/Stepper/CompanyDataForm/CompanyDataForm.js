import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
  legRepIdNumber,
} from "utils/validators";
import {
  setCompanyData,
  selectDocumentData,
} from "redux/features/QuotationForm/quotationDataSlice";
import {
  idTypeArr,
  genderArr,
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

const CompanyDataForm = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  },[]);
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        idType,
        idNumber,
        legRepName: name,
        legRepSurname: surname,
        legRepIdType: idType,
        legRepIdNumber,
        legRepPhoneNumber: phoneNumber,
        legRepEmail: email,
        legRepBirthdate: birthdate,
        contactName,
      })
    ),
  });

  const documentData = useSelector(selectDocumentData);
  const watchContact = watch("contactInfo");

  const onSubmit = (data) => {
    dispatch(setCompanyData(data));
    props.handleNext();
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <GridContainer spacing={2}>
        <GridItem xs={12}>
          <h3 style={{ textAlign: "center" }}>Información del propietario</h3>
        </GridItem>
        <GridItem xs={12}>
          <h5>Información persona jurídica</h5>
        </GridItem>
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={idTypeArr.filter((el) => el.value === "NIT")}
            name="idType"
            control={control}
            ref={register}
            defaultValue={documentData.idType}
            label="Tipo de documento"
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
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="companyName"
            fullWidth
            ref={register}
            label="Nombre de la empresa"
            error={!!errors.companyName}
            helperText={errors?.companyName?.message}
          />
        </GridItem>
        <GridItem xs={12}>
          <h5>Información del representante legal</h5>
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="legRepName"
            fullWidth
            ref={register}
            label="Nombre(s)"
            error={!!errors.legRepName}
            helperText={errors?.legRepName?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="legRepSurname"
            fullWidth
            ref={register}
            label="Apellido(s)"
            error={!!errors.legRepSurname}
            helperText={errors?.legRepSurname?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomRadioBtn
            label="Género"
            color="primary"
            defaultValue="M"
            control={control}
            name="legRepGender"
            options={genderArr}
          />
        </GridItem>
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={idTypeArr.filter((el) => el.value !== "NIT")}
            name="legRepIdType"
            control={control}
            ref={register}
            defaultValue={"CC"}
            label="Tipo de documento"
            error={!!errors.legRepIdType}
            helperText={errors?.legRepIdType?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="legRepIdNumber"
            fullWidth
            ref={register}
            label="Número de documento"
            error={!!errors.legRepIdNumber}
            helperText={errors?.legRepIdNumber?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomDatePicker
            name="legRepBirthdate"
            label="Fecha de nacimiento"
            control={control}
          />
        </GridItem>
        <GridItem xs={12}>
          <h5>Información de Contacto</h5>
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="legRepPhoneNumber"
            fullWidth
            ref={register}
            label="Número telefónico"
            error={!!errors.legRepPhoneNumber}
            helperText={errors?.legRepPhoneNumber?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomInput
            name="legRepEmail"
            fullWidth
            ref={register}
            label="Email"
            error={!!errors.legRepEmail}
            helperText={errors?.legRepEmail?.message}
          />
        </GridItem>
        <GridItem container xs={12} sm={4} justify="center">
          <CustomRadioBtn
            label="¿Estos datos de contacto son del propietario del vehículo?"
            color="primary"
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
              label="Nombre del contacto"
              error={!!errors.contactName}
              helperText={errors?.contactName?.message}
            />
          </GridItem>
        )}
        <GridItem container xs={12} sm={4}>
          <CustomSelect
            options={actualSituation}
            name="actualSituation"
            control={control}
            ref={register}
            label="¿Situación actual?"
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

export default CompanyDataForm;
