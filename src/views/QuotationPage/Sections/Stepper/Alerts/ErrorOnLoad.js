import React from "react";

// @material-ui/icons
import Error from "@material-ui/icons/Error";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";

export default function ErrorOnLoad() {
  return (
    <InfoArea
      title="¡Oops!"
      description="Parece que ha ocurrido un error. Puedes informar a soporte técnico"
      icon={Error}
      iconColor="danger"
    />
  );
}
