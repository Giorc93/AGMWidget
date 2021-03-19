import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCitiesList = createAsyncThunk(
  "vehicle/getCitiesListStatus",
  async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IjNPaWRDSUZVeDdpSzJIVzdhVDR1N2c9PSIsInZhbHVlIjoiSmNyUHNKWUJvZWEyN1hsRWhUQWZYTTcxbmtSVVVMbXdyYXg1Ulp1bG9NaW8rS2xkMkpOTHhHVmRVVnBxaVdrWiIsIm1hYyI6IjZjMDU5YmM4ZWM3ODgwYjg0MTZmZmY2NTExNjhhY2IwMTg0M2I1OTEyMDU2Nzg4NTliNDAyZGEwZWZlMDgxZGEifQ%3D%3D; agentemotor_session=eyJpdiI6ImZcL0MwVkxDK3kxOUtxTWZxdU1iWENnPT0iLCJ2YWx1ZSI6IlBJWGpwYVdzUXYrTER0RG1PbkN3VEk1XC9cLzJ1SFJnUWQrS2t0T3pcL0FhZjBzNTd3NUh0RDJlZ3lLa0o1K284VGkiLCJtYWMiOiJkOWNlMjQzY2UzYWFlOGM0ZTkyZjAzYjk2MjgwOTZkMjIzZWVhZjI5NmU0YThiM2M4NTdlZjU2ZjRjYTQ2MzhhIn0%3D"
    );

    var raw = JSON.stringify({
      name: "event-ubication-get-list-place",
      timestamp: "18022021",
      origin: "api.consume",
      data: { city_name: "alls" },
    });

    var requestOptions = {
      method: "POST",
      headers,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      "https://pacific-dusk-24048.herokuapp.com/insurances/ubication/actions/get",
      requestOptions
    ).then((response) => response.json());
  }
);

const initialState = {
  data: [],
  status: "",
};

const citiesListSlice = createSlice({
  name: "citiesList",
  initialState,
  reducers: {
    resetCitiesListState: (state) => initialState,
  },
  extraReducers: {
    [getCitiesList.pending]: (state) => {
      state.status = "loading";
    },
    [getCitiesList.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getCitiesList.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { resetCitiesListState } = citiesListSlice.actions;

export const selectCitiesListData = (state) => state.citiesList;

export default citiesListSlice.reducer;
