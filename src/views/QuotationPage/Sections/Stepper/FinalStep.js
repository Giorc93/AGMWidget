import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import InfoArea from "components/InfoArea/InfoArea.js";
import { Search } from "@material-ui/icons";
// redux
import { selectQuotationResultJSON } from "redux/features/QuotationForm/quotationResultSlice";
import { selectQuotationResultURL } from "redux/features/QuotationForm/quotationResultSlice";
import { selectQuotationData } from "redux/features/QuotationForm/quotationDataSlice";
import { getQuotation } from "redux/features/QuotationForm/quotationResultSlice";
import { getJSON } from "redux/features/QuotationForm/quotationResultSlice";
import { CastPersonData } from "utils/functions";

const FinalStep = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //recupera la información de la cotización recolectada en los formularios
  const quotationData = useSelector(selectQuotationData);
  //
  const quotationResultURL = useSelector(selectQuotationResultURL);
  const quotationResultJSON = useSelector(selectQuotationResultJSON);

  React.useEffect(() => {
    dispatch(getQuotation(CastPersonData(quotationData)));
  }, []);

  React.useEffect(() => {
    quotationResultURL.data.resultado === "exitoso" &&
      dispatch(getJSON(quotationResultURL.data.json_comparativo));
  }, [quotationResultURL]);

  React.useEffect(() => {
    quotationResultJSON.status === "success" && history.push("/results");
  }, [quotationResultJSON]);
//pantalla de espera de respuesta de la API una vez se ha ejecutado la consulta de la cotización
  return (
    <React.Fragment>
      <InfoArea
        title="Consultando"
        description="Estamos encontrando las mejores opciones para tus necesidades, en segundos serás redirigido..."
        icon={Search}
        iconColor="success"
      />
    </React.Fragment>
  );
};

export default FinalStep;
