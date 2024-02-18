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
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "content-type": "application/json" },
      };
      console.log(userData);
      const response = await axios.post(
        "http://localhost:8001/auth/register",
        userData,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerSlice = createSlice({
  name: "userRegister",
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
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
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
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.isAuthenticated = false;
      state.error = action.payload?.message || action.error.message;
    });
  },
});

export const { registerLogout } = registerSlice.actions;
export default registerSlice.reducer;
