import React from "react";
//form components
import ReferenceForm from "./ReferenceForm/ReferenceForm";
import PlateForm from "./PlateForm/PlateForm";
//icons
import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import HelpIcon from "@material-ui/icons/HelpOutline";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchType,
  setSearchType,
} from "redux/features/QuotationForm/quotationDataSlice";
//core components
import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

/*searchType hace referencia al método de búsqueda empleado. Cargado por defecto como "plate" para búsquedas por placa
  a través de setSearchType se modifica el estado a "plate" o "reference" para búsquedas por referencia, de manera
  que los componentes PlateForm o ReferenceForm se carguen de manera dinámica*/

const Step1 = (props) => {
  /*selección del estado (redux) a través del hook 'useSelector' (Ver detalle en redux/features/...) */
  const searchType = useSelector(selectSearchType);
  const dispatch = useDispatch();
  /*controla el modo de búsqueda empleado placa/referencia */
  const handleSearchType = (type) => {
    dispatch(setSearchType(type));
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12}>
        {searchType === "plate" && (
          <PlateForm
            handleNext={props.handleNext}
            handleBack={props.handleBack}
          />
        )}
        {searchType === "reference" && (
          <ReferenceForm
            handleNext={props.handleNext}
            handleBack={props.handleBack}
          />
        )}
      </GridItem>
      <GridItem container justify="center" xs={12}>
        {searchType === "plate" && (
          <CustomButton
            simple
            onClick={() => handleSearchType("reference")}
            color="warning"
          >
            No conozco el número de placa <HelpIcon />
          </CustomButton>
        )}
        {searchType === "reference" && (
          <CustomButton
            simple
            onClick={() => handleSearchType("plate")}
            color="primary"
          >
            Conozco el número de placa <CheckIcon />
          </CustomButton>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default Step1;
