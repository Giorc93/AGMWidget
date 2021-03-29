import React from "react";

import { useSelector } from "react-redux";

import { selectSearchType } from "redux/features/QuotationForm/quotationDataSlice";
import { selectVehicleByPlateData } from "redux/features/QuotationForm/vehicleByPlateSlice";
import { selectVehicleByReferenceData } from "redux/features/QuotationForm/vehicleByReferenceSlice";

import LoadingData from "views/QuotationPage/Sections/Stepper/Alerts/LoadingData";
import ErrorOnLoad from "views/QuotationPage/Sections/Stepper/Alerts/ErrorOnLoad";
import VehicleDetailCard from "components/VehicleDetailCard/VehicleDetailCard";
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const Step3 = (props) => {
  const searchType = useSelector(selectSearchType);
  const vehicleByPlateSelector = useSelector(selectVehicleByPlateData);
  const vehicleByReferenceSelector = useSelector(selectVehicleByReferenceData);
  var vehicleData;
  var reqStatus;

  searchType === "plate"
    ? (vehicleData = vehicleByPlateSelector.data)
    : (vehicleData = vehicleByReferenceSelector.data);

  searchType === "plate"
    ? (reqStatus = vehicleByPlateSelector.status)
    : (reqStatus = vehicleByReferenceSelector.status);

  return (
    <GridContainer justify="center" spacing={2}>
      <GridItem xs={12}>
        <h2
          style={{ textAlign: "center" }}
          onClick={() => console.log(searchType)}
        >
          Confirma tu vehículo
        </h2>
      </GridItem>
      <GridItem container justify="center" xs={12} spacing={1}>
        {reqStatus === "loading" && <LoadingData />}
        {reqStatus === "success" &&
          vehicleData.map((el, i) => (
            <GridItem container justify="center" xs={12} md={6} xl={4} key={i}>
              <VehicleDetailCard
                dataLength={vehicleData.length}
                data={el.vehicle}
                handleStep={props.handleStep}
              />
            </GridItem>
          ))}
        {reqStatus === "failed" && <ErrorOnLoad />}
      </GridItem>
      <GridItem container justify="center" xs={12} sm={4}>
        <CustomButton
          onClick={() => props.handleBack()}
          fullWidth
          simple
          color="info"
        >
          Atrás
        </CustomButton>
      </GridItem>
    </GridContainer>
  );
};

export default Step3;
