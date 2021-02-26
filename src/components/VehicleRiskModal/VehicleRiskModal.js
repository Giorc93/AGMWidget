import React, { useEffect, useState } from "react";
import moment from "moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Alert } from "@material-ui/lab";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import CustomAutocompleteObj from "components/CustomForm/CustomAutocompleteObj";
import CustomSelect from "components/CustomForm/CustomSelect";
import CustomForm from "components/CustomForm/CustomForm";
import CustomRadioBtn from "components/CustomForm/CustomRadioBtn";
import CustomInput from "components/CustomForm/CustomInput";
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";

import style from "assets/jss/material-kit-pro-react/modalStyle.js";

import {
  getCitiesList,
  selectCitiesListData,
} from "redux/features/QuotationForm/citiesListSlice";
import {
  setPlaceData,
  setRiskData,
} from "redux/features/QuotationForm/quotationDataSlice";
import { plateTypeArr, vehicleUseTypeArr } from "utils/inputArrays";
import {
  vehiclePrice,
  accesoriesPrice,
  inAgency,
  placeData,
} from "utils/validators";

import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function VehicleRiskModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const vehicleData = props.vehicleData;
  const vehicleRisk = vehicleData.vehicle_risk;
  const citiesList = useSelector(selectCitiesListData);
  const [placeDataState, setPlaceDataState] = useState(undefined);
  const { register, handleSubmit, control, watch, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({ vehiclePrice, accesoriesPrice, inAgency, placeData })
    ),
    defaultValues: { vehiclePrice: vehicleRisk.reference_price },
  });
  const watchInAgency = watch("inAgency", "false");
  const watchVehiclePrice = watch("vehiclePrice");
  const onSubmit = (data) => {
    dispatch(setRiskData(data));
    props.handleStep(3);
  };
  const handleDispatch = () => {
    citiesList.status === "" && dispatch(getCitiesList());
    placeDataState !== undefined && dispatch(setPlaceData(placeDataState));
  };
  const handlePlaceDataChange = (e, v, r) => {
    r === "select-option" && setPlaceDataState(v);
    r === "clear" && setPlaceDataState(undefined);
  };
  useEffect(() => {
    handleDispatch();
  }, [placeDataState]);
  return (
    <div>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={props.showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.handleModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => props.handleModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle} style={{ textAlign: "center" }}>
            Información Adicional
          </h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <p style={{ fontSize: "1rem" }}>
            Necesitamos algo más de información
          </p>

          <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <GridContainer justify="center" spacing={2}>
              {(!vehicleData.plate || vehicleData.model >= moment().year()) && (
                <GridItem xs={12}>
                  <CustomRadioBtn
                    label="¿Vehiculo 0km en concesionario?"
                    defaultValue="false"
                    control={control}
                    name="inAgency"
                    options={[
                      { value: "true", label: "Sí" },
                      { value: "false", label: "No" },
                    ]}
                  />
                </GridItem>
              )}
              {watchInAgency === "true" && (
                <GridItem xs={12}>
                  <CustomInput
                    type="text"
                    name="vehiclePrice"
                    label="Precio del Vehiculo"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <strong>COP</strong>
                        </InputAdornment>
                      ),
                    }}
                    ref={register}
                    error={!!errors.vehiclePrice}
                    helperText={errors?.vehiclePrice?.message}
                  />
                  {watchVehiclePrice >
                    vehicleRisk.reference_price +
                      vehicleRisk.reference_price * 0.15 && (
                    <Alert fullWidth severity="warning">
                      El valor ingresado supera por más del 15% al precio de
                      referencia fasecolda
                    </Alert>
                  )}
                </GridItem>
              )}
              {watchInAgency === "false" && (
                <GridItem xs={12}>
                  <CustomInput
                    type="text"
                    name="vehiclePrice"
                    label="Precio del Vehiculo"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <strong>COP</strong>
                        </InputAdornment>
                      ),
                    }}
                    ref={register}
                    error={!!errors.vehiclePrice}
                    helperText={errors?.vehiclePrice?.message}
                    value={vehicleRisk.reference_price}
                  />
                </GridItem>
              )}
              <GridItem container xs={12} md={6}>
                <CustomSelect
                  options={plateTypeArr}
                  name="plateType"
                  control={control}
                  ref={register}
                  defaultValue={vehicleRisk.plate_type}
                  label="Tipo de Placa"
                />
              </GridItem>
              <GridItem container xs={12} md={6}>
                <CustomSelect
                  options={vehicleUseTypeArr}
                  name="useType"
                  control={control}
                  ref={register}
                  defaultValue={vehicleUseTypeArr[0].value}
                  label="Tipo de Uso"
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CustomInput
                  type="text"
                  name="accesoriesPrice"
                  fullWidth
                  label="Valor Adicional en Accesorios"
                  ref={register}
                  error={!!errors.accesoriesPrice}
                  helperText={
                    errors?.accesoriesPrice?.message ||
                    "Ingresa 0 si el vehiculo no tiene accesorios"
                  }
                  defaultValue={"0"}
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CustomAutocompleteObj
                  ref={register}
                  name="placeData"
                  label="Ciudad de Circulación"
                  loading={citiesList.status === "loading" ? true : false}
                  loadingText="Cargando listado de ciudades"
                  onChange={handlePlaceDataChange}
                  noOptionsText={
                    citiesList.status === "failed"
                      ? "Error al cargar el listado de ciudades"
                      : "Ciudad no encontrada"
                  }
                  options={citiesList.data}
                  error={!!errors.placeData}
                  helperText={errors?.placeData?.message}
                />
              </GridItem>
              <GridItem
                container
                justify="center"
                direction="row-reverse"
                xs={12}
              >
                <GridItem xs={6}>
                  <CustomButton type="submit" fullWidth color="info">
                    Siguiente
                  </CustomButton>
                </GridItem>
                <GridItem xs={6}>
                  <CustomButton onClick={() => props.handleModal(false)}>
                    Cancelar
                  </CustomButton>
                </GridItem>
              </GridItem>
            </GridContainer>
          </CustomForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
