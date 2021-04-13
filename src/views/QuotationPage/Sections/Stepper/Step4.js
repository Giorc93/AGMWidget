import React from "react";

//core components
import CompanyDataForm from "views/QuotationPage/Sections/Stepper/CompanyDataForm/CompanyDataForm";
import PersonDataForm from "views/QuotationPage/Sections/Stepper/PersonDataForm/PersonDataForm";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
//redux
import { selectDocumentData } from "redux/features/QuotationForm/quotationDataSlice";
import { useSelector } from "react-redux";

const Step4 = (props) => {
  const documentData = useSelector(selectDocumentData);
  return (
    <GridContainer justify="center">
      <GridItem xs={12}>
        {/*carga de formulario para persona o empresa de acuerdo al tipo de ID */}
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
