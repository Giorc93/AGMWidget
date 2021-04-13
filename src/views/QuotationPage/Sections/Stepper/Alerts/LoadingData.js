import React from "react";

// @material-ui/icons
import Loop from "@material-ui/icons/Loop";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";
//componente de alerta para indicar el estado de espera de la respuesta de la API
export default function LoadingData() {
  return (
    <InfoArea
      title="Cargando"
      description="Estamos cargando la información de tu vehículo"
      icon={Loop}
      iconColor="warning"
    />
  );
}
