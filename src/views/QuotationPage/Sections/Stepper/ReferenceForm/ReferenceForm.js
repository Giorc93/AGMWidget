import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { brand, model, line } from "utils/validators";
import {
  selectBrandsListData,
  getBrandsList,
} from "redux/features/QuotationForm/brandsListSlice";
import {
  selectReferencesListData,
  getReferencesList,
} from "redux/features/QuotationForm/referencesListSlice";
import { getVehicleByReference } from "redux/features/QuotationForm/vehicleByReferenceSlice";
import { setSearchType } from "redux/features/QuotationForm/quotationDataSlice";

import CustomForm from "components/CustomForm/CustomForm";
import CustomButton from "components/CustomButtons/Button";
import CustomAutocomplete from "components/CustomForm/CustomAutocomplete";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const date = new Date();

const ReferenceForm = (props) => {
  const [vehicleData, setVehicleData] = useState({
    brand: undefined,
    model: undefined,
  });
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        brand,
        model,
        line,
      })
    ),
  });
  const dispatch = useDispatch();
  const brandsList = useSelector(selectBrandsListData);
  const modelArray = [...Array(25).keys()].map((index) =>
    (date.getFullYear() - index).toString()
  );
  const referencesList = useSelector(selectReferencesListData);

  const handleDispatch = () => {
    vehicleData.brand !== undefined &&
      vehicleData.model !== undefined &&
      dispatch(getReferencesList(vehicleData));
  };

  const handleBrandChange = (e, v, r) => {
    r === "select-option" && setVehicleData({ ...vehicleData, brand: v });
    r === "clear" && setVehicleData({ ...vehicleData, brand: undefined });
  };

  const handleModelChange = (e, v, r) => {
    r === "select-option" && setVehicleData({ ...vehicleData, model: v });
    r === "clear" && setVehicleData({ ...vehicleData, model: undefined });
  };

  const onSubmit = (data) => {
    dispatch(getVehicleByReference(data));
    props.handleNext();
  };

  useEffect(() => {
    dispatch(getBrandsList());
  }, [])

  useEffect(() => {
    handleDispatch();
  }, [vehicleData]);

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <GridContainer justify="center" spacing={2}>
        <GridItem xs={12}>
          <h3 style={{ textAlign: "center" }}>Búsqueda por referencia</h3>
        </GridItem>
        <GridItem xs={12} md={4}>
          <CustomAutocomplete
            ref={register}
            name="brand"
            label="Marca"
            loading={brandsList.status === "loading" ? true : false}
            loadingtext="Cargando listado de marcas"
            onChange={handleBrandChange}
            nooptionstext={
              brandsList.status === "failed"
                ? "Error al cargar el listado de marcas"
                : "Marca no encontrada"
            }
            options={brandsList.data}
            error={!!errors.brand}
            helperText={errors?.brand?.message}
          />
        </GridItem>
        <GridItem xs={12} md={4}>
          <CustomAutocomplete
            ref={register}
            name="model"
            label="Modelo"
            onChange={handleModelChange}
            nooptionstext="Modelo fuera de rango (Máx. 25 años de uso)"
            options={modelArray}
            error={!!errors.model}
            helperText={errors?.model?.message}
          />
        </GridItem>
        <GridItem xs={12} md={4}>
          <CustomAutocomplete
            ref={register}
            name="line"
            label="Referencia"
            loading={referencesList.status === "loading" ? true : false}
            loadingtext="Cargando listado de referencias"
            nooptionstext="No se han encontrados referencias"
            options={referencesList.data}
            error={!!errors.line}
            helperText={errors?.line?.message}
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

export default ReferenceForm;
