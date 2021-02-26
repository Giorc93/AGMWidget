import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// core components
import CustomButton from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { Search } from "@material-ui/icons";

import formStyle from "assets/jss/material-kit-pro-react/views/quotationSections/formStyles";

import { CastPersonData } from "utils/functions";
import { getQuotation } from "redux/features/QuotationForm/quotationResultSlice";
import { selectQuotationData } from "redux/features/QuotationForm/quotationDataSlice";

import Step1 from "./Stepper/Step1";
import Step2 from "./Stepper/Step2";
import Step3 from "./Stepper/Step3";
import Step4 from "./Stepper/Step4";

const useStyles = makeStyles(formStyle);

function getSteps() {
  return [
    "Datos del Vehiculo",
    "Número de Documento",
    "Confirma Tu Vehiculo",
    "Generar Cotización",
  ];
}

const SectionForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const quotationData = useSelector(selectQuotationData);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  /*const handleReset = () => {
    setActiveStep(0);
  };a
  */
  const handleGetQuote = () => {
    dispatch(getQuotation(CastPersonData(quotationData)));
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Step1 handleNext={handleNext} stepIndex={stepIndex} />;
      case 1:
        return (
          <Step2
            handleNext={handleNext}
            handleBack={handleBack}
            stepIndex={stepIndex}
          />
        );
      case 2:
        return (
          <Step3
            handleNext={handleNext}
            handleBack={handleBack}
            handleStep={handleStep}
            stepIndex={stepIndex}
          />
        );
      case 3:
        return (
          <Step4
            handleNext={handleNext}
            handleBack={handleBack}
            handleStep={handleStep}
            stepIndex={stepIndex}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <span>{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === activeStep.length ? (
          <GridContainer justify="center" className={classes.container}>
            <GridItem>
              <InfoArea
                title="Consultando"
                description="Estamos encontrando las mejores opciones para tus necesidades, en segundos serás redirigido..."
                icon={Search}
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={4}>
              <CustomButton fullWidth onClick={() => history.push("/results")}>
                Redir
              </CustomButton>
            </GridItem>
          </GridContainer>
        ) : (
          <GridContainer justify="center" className={classes.container}>
            <GridItem xs={12}>{getStepContent(activeStep)}</GridItem>
          </GridContainer>
        )}
      </div>
    </div>
  );
};

export default SectionForm;
