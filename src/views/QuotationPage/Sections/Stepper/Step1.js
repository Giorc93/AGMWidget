import React from "react";

import PlateForm from "./PlateForm/PlateForm";
import ReferenceForm from "./ReferenceForm/ReferenceForm";

import HelpIcon from "@material-ui/icons/HelpOutline";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";

import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchType,
  setSearchType,
} from "redux/features/QuotationForm/quotationDataSlice";

import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const Step1 = (props) => {
  const searchType = useSelector(selectSearchType);
  const dispatch = useDispatch();
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
            color="success"
          >
            Conozco el número de placa <CheckIcon />
          </CustomButton>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default Step1;
