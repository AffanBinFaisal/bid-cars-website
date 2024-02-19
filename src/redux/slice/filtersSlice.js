import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {},
  error: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersChanged: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { filtersChanged, odometerChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
