import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";

import Step1 from "./Stepper/Step1";
import Step2 from "./Stepper/Step2";
import Step3 from "./Stepper/Step3";
import Step4 from "./Stepper/Step4";
import FinalStep from "./Stepper/FinalStep";

//estilos
import formStyle from "assets/jss/material-kit-pro-react/views/quotationSections/formStyles";

const useStyles = makeStyles(formStyle);

function getSteps() {
  return [
    "Datos del vehículo",
    "Número de documento",
    "Confirma tu vehículo",
    "Información del propietario",
  ];
}

const SectionForm = () => {
  const classes = useStyles();
  //estado para el índice del stepper
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

  /*getStepContent carga el componente correspondiente a cada paso del stepper. 
  Las funciones handleNext y handleBack son cargadas como props para controlar el paso anterior o siguiente
  en el formulario.*/
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
        {/*si el índice del paso actual es igual al número de pasos, cargará el componente final FinalStep 
          De lo contrario ejecutará la función getStepContent para cargar el componente correspondiente*/}
        {activeStep === getSteps().length ? (
          <GridContainer justify="center" className={classes.container}>
            <GridItem>
              <FinalStep />
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
