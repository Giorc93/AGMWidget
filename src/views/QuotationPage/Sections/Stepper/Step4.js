import React from "react";

import { useSelector } from "react-redux";

import { selectDocumentData } from "redux/features/QuotationForm/quotationDataSlice";

import PersonDataForm from "views/QuotationPage/Sections/Stepper/PersonDataForm/PersonDataForm";
import CompanyDataForm from "views/QuotationPage/Sections/Stepper/CompanyDataForm/CompanyDataForm";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const Step4 = (props) => {
  const documentData = useSelector(selectDocumentData);
  return (
    <GridContainer justify="center">
      <GridItem xs={12}>
        {documentData.idType === "NIT" && (
          <CompanyDataForm handleStep={props.handleStep} handleNext={props.handleNext}/>
        )}
        {documentData.idType !== "NIT" && (
          <PersonDataForm handleStep={props.handleStep} handleNext={props.handleNext}/>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default Step4;
