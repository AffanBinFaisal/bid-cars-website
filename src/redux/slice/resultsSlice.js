import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResults = createAsyncThunk(
  "results/fetchResults",
  async (params) => {
    const response = await axios.get("http://localhost:8001/cars", {
      params: params,
    });
    const data = response.data;
    return data.result;
  }
);

const initialState = {
  loading: false,
  data: null,
  error: "",
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    resultsChanged: (state, action) => {
      state.data = action.payload;
      // return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    // Add an extra reducer to handle fetching models
    builder.addCase(fetchResults.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = "";
    });
    builder.addCase(fetchResults.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchResults.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const { resultsChanged, odometerChanged } = resultsSlice.actions;

export default resultsSlice.reducer;
