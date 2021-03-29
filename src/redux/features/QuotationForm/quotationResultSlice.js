import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getQuotation = createAsyncThunk(
  "vehicle/getQuotationStatus",
  async (quoteData) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "token",
      "6haubsz6iSyw2UsuvjRUVKYLDjarr_mgJnB5D2raug--Mos-XX6P3znAGItzz6CRFS7rDT2P-GmeidgS5pse1xszqcpCWRBmRRnNP_wLuhsFiin0EMVR8QIGlVHbMVmzvDxgFE4H9ug14FNRpYFfnjSDepBsp7z5lkgf5qYk1ZQtbfZ0auDbMo8N6ISni5wI7JWMg-AGD3_zarHh4um6Le1DFWPl39ZihEZTfogPL2av4nCf_Jat9VWzh4bQqVSouMZc_D9hNzHoMnrDR3w5R0lQ7PkQlQWyBzICLMiIvbEPzfg8oaI7If3tvgYe2ynhlPM-Go96HiO4scuey8jzuw.."
    );

    var raw = JSON.stringify(quoteData);

    var requestOptions = {
      method: "POST",
      headers,
      body: raw,
      redirect: "follow",
    };

    console.log(quoteData);

    return await fetch(
      "https://pacific-dusk-24048.herokuapp.com/insurances/process/create",
      requestOptions
    ).then((response) => response.json());
  }
);

export const getJSON = createAsyncThunk(
  "vehicle/getJSONStatus",
  async (jsonUrl) => {
    const headers = new Headers();

    var requestOptions = {
      method: "GET",
      headers,
      redirect: "follow",
    };

    return await fetch(jsonUrl, requestOptions).then((response) =>
      response.json()
    );
  }
);

const initialState = {
  urlData: {
    data: "",
    status: "",
  },
  quotationJSON: {
    data: "",
    status: "",
  },
  productDetail: {},
  attributeGroups: [],
  totalProducts: [],
};

const quotationResultSlice = createSlice({
  name: "quotationResult",
  initialState,
  reducers: {
    resetQuotationResultState: (state) => initialState,
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    setAttributeGroups: (state, action) => {
      state.attributeGroups = action.payload;
    },
    setTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
    }
  },
  extraReducers: {
    [getQuotation.pending]: (state) => {
      state.urlData.status = "loading";
    },
    [getQuotation.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.urlData.data = action.payload;
      state.urlData.status = "success";
    },
    [getQuotation.rejected]: (state) => {
      state.urlData.status = "failed";
    },
    [getJSON.pending]: (state) => {
      state.quotationJSON.status = "loading";
    },
    [getJSON.fulfilled]: (state, action) => {
      state.quotationJSON.data = action.payload;
      state.quotationJSON.status = "success";
    },
    [getJSON.rejected]: (state) => {
      state.quotationJSON.status = "failed";
    },
  },
});

export const { resetQuotationResultState, setProductDetail, setAttributeGroups, setTotalProducts} = quotationResultSlice.actions;

export const selectQuotationResultURL = (state) =>
  state.quotationResult.urlData;
export const selectQuotationResultJSON = (state) =>
  state.quotationResult.quotationJSON;
export const selectProductDetail = (state) =>
  state.quotationResult.productDetail;
export const selectAttributeGroups = (state) =>
  state.quotationResult.attributeGroups;
export const selectTotalProducts = (state) =>
  state.quotationResult.totalProducts;

export default quotationResultSlice.reducer;
