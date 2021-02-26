import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchType: "plate",
  documentData: {
    idType: "CC",
    idNumber: "",
  },
  plateNumber: "",
  personData: "",
  companyData: "",
  vehicleData: "",
  placeData: "",
  riskData: "",
};

const quotationDataSlice = createSlice({
  name: "quotationData",
  initialState,
  reducers: {
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    setPlateNumber: (state, action) => {
      state.plateNumber = action.payload.toUpperCase();
    },
    setDocumentData: (state, action) => {
      state.documentData.idType = action.payload.idType;
      state.documentData.idNumber = action.payload.idNumber;
    },
    setVehicleData: (state, action) => {
      state.vehicleData = action.payload;
    },
    setPlaceData: (state, action) => {
      state.placeData = action.payload;
    },
    setRiskData: (state, action) => {
      state.riskData = action.payload;
    },
    setPersonData: (state, action) => {
      state.personData = action.payload;
    },
    setCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
  },
});

export const {
  setDocumentData,
  setSearchType,
  setPlateNumber,
  setVehicleData,
  setPlaceData,
  setRiskData,
  setPersonData,
  setCompanyData,
} = quotationDataSlice.actions;

export const selectQuotationData = (state) => state.quotationData;

export const selectDocumentData = (state) => state.quotationData.documentData;
export const selectPlateNumber = (state) => state.quotationData.plateNumber;
export const selectCompanyData = (state) => state.quotationData.companyData;
export const selectContactData = (state) => state.quotationData.contactData;
export const selectVehicleData = (state) => state.quotationData.vehicleData;
export const selectPersonData = (state) => state.quotationData.personData;
export const selectSearchType = (state) => state.quotationData.searchType;
export const selectPlaceData = (state) => state.quotationData.placeData;
export const selectRiskData = (state) => state.quotationData.riskData;

export default quotationDataSlice.reducer;
