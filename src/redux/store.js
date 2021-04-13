import { configureStore } from "@reduxjs/toolkit";

import TokenDataReducer from './features/TokenData/tokenDataSlice';
import CitiesListReducer from "./features/QuotationForm/citiesListSlice";
import BrandsListReducer from "./features/QuotationForm/brandsListSlice";
import ReferencesListReducer from "./features/QuotationForm/referencesListSlice";
import VehicleByPlateReducer from "./features/QuotationForm/vehicleByPlateSlice";
import VehicleByReferenceReducer from "./features/QuotationForm/vehicleByReferenceSlice";
import QuotationDataReducer from "./features/QuotationForm/quotationDataSlice";
import QuotationResultReducer from "./features/QuotationForm/quotationResultSlice";

export default configureStore({
  reducer: {
    brandsList: BrandsListReducer,
    referencesList: ReferencesListReducer,
    vehicleByPlate: VehicleByPlateReducer,
    vehicleByReference: VehicleByReferenceReducer,
    quotationData: QuotationDataReducer,
    citiesList: CitiesListReducer,
    quotationResult: QuotationResultReducer,
    tokenData: TokenDataReducer,
  },
});
