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

    return await fetch(
      "http://api.app.agentemotor.com/insurances/process/create",
      requestOptions
    ).then((response) => response.json());
  }
);

const initialState = {
  data: [],
  status: "",
};

const quotationResultSlice = createSlice({
  name: "quotationResult",
  initialState,
  reducers: {
    resetQuotationResultState: (state) => initialState,
  },
  extraReducers: {
    [getQuotation.pending]: (state) => {
      state.status = "loading";
    },
    [getQuotation.fulfilled]: (state, action) => {
      console.log(action);
      console.log(action.payload);
      state.data = action.payload;
      state.status = "success";
    },
    [getQuotation.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { resetQuotationResultState } = quotationResultSlice.actions;

export const selectQuotationResultData = (state) => state.quotationResult;

export default quotationResultSlice.reducer;
