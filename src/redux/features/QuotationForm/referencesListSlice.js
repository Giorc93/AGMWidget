import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//API Req. using test token
export const getReferencesList = createAsyncThunk(
  "vehicle/getReferencesListStatus",
  async (vehicleData) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6Ims4aVU1SjhMZXFvRU9XYVU1bFkxbEE9PSIsInZhbHVlIjoiUTZkaWJwck5rVW9ydFBIZjVVQzRzekVZZjRWSGxRc0xwUU1XZFdmS0Z1NDRHNHRpM0MwSUxZMlwvbzBOcGo0QTciLCJtYWMiOiIzZmVjMmMwMzQ4ZTQwYjEyZDgxMGM4MjA0MjhmMjhlMWEwMDlhMjdlOWU5NDNkOWIzZmEwM2MwMjg3ODkwMWQwIn0%3D; agentemotor_session=eyJpdiI6IkZiUVdIMWVZbm9IVWo2ZW9zU1BWc3c9PSIsInZhbHVlIjoiOE1xU29OU3B4cGIrYkhWSEhqUnE0T01RRnByMVVyRG5pTE4ySmRMaHNSWjlTXC93OXRCYngrRHA3MEtCM2MxVDciLCJtYWMiOiI3YjExNGVhODU0MWYyZGE0ZGM1ODg4ZTkzMjAxZmNhYzEzZGMzYWE1MTRkMTUzNmJmNDVjZjE4OGQ4MDEwYTgzIn0%3D"
    );

    var raw = JSON.stringify({
      name: "event-insurable-object-by-ref",
      data: {
        vehicle: {
          return: "part-first-line",
          brand: vehicleData.brand,
          model: parseInt(vehicleData.model),
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

const referencesListSlice = createSlice({
  name: "getReferencesList",
  initialState,
  reducers: {
    resetReferencesListState: (state) => initialState,
  },
  extraReducers: {
    [getReferencesList.pending]: (state) => {
      state.status = "loading";
    },
    [getReferencesList.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getReferencesList.rejected]: (state) => {
      state.referencesResponseData.status = "failed";
    },
  },
});

export const { resetReferencesListState } = referencesListSlice.actions;

//Exp. state value (useSelector)
export const selectReferencesListData = (state) => state.referencesList;

export default referencesListSlice.reducer;
