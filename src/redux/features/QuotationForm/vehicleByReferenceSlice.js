//consulta de vehiculos por referencia (Marca, modelo y referencia)

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVehicleByReference = createAsyncThunk(
  "vehicle/getVehicleByReferenceStatus",
  async (refData) => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Cookie",
      //toquen 'quemado' para testeo
      "XSRF-TOKEN=eyJpdiI6IndXaVZ2aFlIbk5KREJvek1iUHl0R2c9PSIsInZhbHVlIjoidnJwSEpXZGRQdEMzRkZwNG4xZ1wvQ0k5VEtCeWE5UnozakRTR3FEZXp4dmZtYVNcLzZPOHN4ZEN0MGsrYUt5dXNQIiwibWFjIjoiMjUwNDBkZTBjMGZhMmNkZWRhNjRiNzMwNzUwYmNiZTRlMjBiMTdlM2E1MWQ1N2Q1ZTEyNmU2YmRhMzYwOTcyYyJ9; agentemotor_session=eyJpdiI6ImU2QjJuTzNkOGJlN2FjMFdGakxzOHc9PSIsInZhbHVlIjoiK3VMS3V6SWhHMWZudDRoUW1COWNVMXR2eFBVY0pvY1Z5Y1UzdW03XC9oRmJRT2d0UFBDM1JzSWlVUVc2dkxYOW8iLCJtYWMiOiIyZTI5YjM1Y2I1YmI3NTA1MjM5OGY5NjM5NjY0YjdjODgyYjMwMGRiYjkzZjE4ODkyZDliMjk3MmFiMmYwYzhhIn0%3D"
    );

    var raw = JSON.stringify({
      name: "event-insurable-object-by-ref",
      data: {
        vehicle: {
          line: refData.line,
          brand: refData.brand,
          model: parseInt(refData.model),
        },
      },
      timestamp: "30072020",
      origin: "api.consume",
    });

    var requestOptions = {
      method: "POST",
      headers,
      body: raw,
      redirect: "follow",
    };
    return await fetch(
      "https://pacific-dusk-24048.herokuapp.com/insurances/insuranceobject/actions/get",
      requestOptions
    ).then((response) => response.json());
  }
);

const initialState = {
  data: [],
  status: "",
};

const vehicleByReferenceSlice = createSlice({
  name: "vehicleByReference",
  initialState,
  reducers: {
    resetVehicleByReferenceState: (state) => initialState,
  },

  extraReducers: {
    [getVehicleByReference.pending]: (state) => {
      state.status = "loading";
    },
    [getVehicleByReference.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getVehicleByReference.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { resetVehicleByReferenceState } = vehicleByReferenceSlice.actions;

//API response data state val
export const selectVehicleByReferenceData = (state) => state.vehicleByReference;

export default vehicleByReferenceSlice.reducer;
