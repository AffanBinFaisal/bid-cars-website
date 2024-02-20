import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  isAuthenticated: false,
  message: "",
  loading: false,
  error: "",
  user: {},
};
if (typeof window !== "undefined") {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    initialState = JSON.parse(userInfo);
  }
}
export const verifyUser = createAsyncThunk(
  "user/verify",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8001/auth/verify", {
        params: params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verificationSlice = createSlice({
  name: "userVerify",
  initialState,
  reducers: {
    registerLogout: (state) => {
      state.isAuthenticated = false;
      state.message = "";
      state.loading = false;
      state.error = "";
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.user = action.payload.data;
      state.isAuthenticated = true;
      state.error = "";
      // Update localStorage on the client-side
      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(state));
      }
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.isAuthenticated = false;
      state.error = action.payload?.message || action.error.message;
    });
  },
});

export default verificationSlice.reducer;
