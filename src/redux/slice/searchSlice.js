// searchSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk to fetch models
export const fetchModels = createAsyncThunk(
  "search/fetchModels",
  async (makeId, { getState }) => {
    try {
      const response = await fetch(
        `http://localhost:8001/cars/get-model-by-make/${makeId}`
      );
      const data = await response.json();
      return data.result.slice(0, 10).map((model) => model.model);
    } catch (error) {
      console.error("Error fetching models:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
);

const initialState = {
  auctionName: "",
  yearFrom: "",
  yearTo: "",
  make: "",
  model: "",
  models: [], // Add models to the initial state
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchChanged: (state, action) => {
      return { ...state, ...action.payload };
    },
    emptySearch: (state) => {
      state.auctionName = "";
      state.yearFrom = "";
      state.yearTo = "";
      state.make = "";
      state.model = "";
      state.models = [];
    },
  },
  extraReducers: (builder) => {
    // Add an extra reducer to handle fetching models
    builder.addCase(fetchModels.fulfilled, (state, action) => {
      state.models = action.payload;
    });
  },
});

export const { searchChanged, emptySearch } = searchSlice.actions;

export default searchSlice.reducer;
