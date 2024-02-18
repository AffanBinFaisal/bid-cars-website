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
export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "content-type": "application/json" },
      };
      console.log(userData);
      const response = await axios.post(
        "http://localhost:8001/auth/login",
        userData,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    loginLogout: (state) => {
      state.isAuthenticated = false;
      state.message = "";
      state.loading = false;
      state.error = "";
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = "";
      // Update localStorage on the client-side
      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(state));
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.isAuthenticated = false;
      state.error = action.payload?.message || action.error.message;
    });
  },
});

export const { loginLogout } = loginSlice.actions;

export default loginSlice.reducer;
