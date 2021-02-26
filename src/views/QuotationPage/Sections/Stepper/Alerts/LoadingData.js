import React from "react";

// @material-ui/icons
import Loop from "@material-ui/icons/Loop";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";

export default function LoadingData() {
  return (
    <InfoArea
      title="Cargando"
      description="Estamos cargando la información de tu vehiculo"
      icon={Loop}
      iconColor="warning"
    />
  );
}
