import React from "react";

import { useSelector } from "react-redux";
//core components
import LoadingData from "views/QuotationPage/Sections/Stepper/Alerts/LoadingData";
import ErrorOnLoad from "views/QuotationPage/Sections/Stepper/Alerts/ErrorOnLoad";
import VehicleDetailCard from "components/VehicleDetailCard/VehicleDetailCard";
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
//redux
import { selectVehicleByReferenceData } from "redux/features/QuotationForm/vehicleByReferenceSlice";
import { selectVehicleByPlateData } from "redux/features/QuotationForm/vehicleByPlateSlice";
import { selectSearchType } from "redux/features/QuotationForm/quotationDataSlice";


const Step3 = (props) => {
  /*carga información sobre tipo de búsqueda */
  const searchType = useSelector(selectSearchType);
  /*carga información recuperada a través de la API (Busqueda por placa)*/
  const vehicleByPlateSelector = useSelector(selectVehicleByPlateData);
  /*carga información recuperada a través de la API (Busqueda por referencia)*/
  const vehicleByReferenceSelector = useSelector(selectVehicleByReferenceData);
  var vehicleData;
  var reqStatus;

  /*asigna los datos de la petición dependiendo del tipo de consulta*/
  searchType === "plate"
    ? (vehicleData = vehicleByPlateSelector.data)
    : (vehicleData = vehicleByReferenceSelector.data);
  /*asigna el estado de la petición dependiento del tipo de consulta */
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
        {/*esperando respuesta de la API*/}
        {reqStatus === "loading" && <LoadingData />}
        {/*respuesta obtenida */}
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
          {/*error en la respuesta de la API */}
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
