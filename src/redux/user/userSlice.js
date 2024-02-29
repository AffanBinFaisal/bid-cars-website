import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const user = JSON.parse(localStorage.getItem("userInfo"));

let initialState = {
  isAuthenticated: false,
  message: "",
  loading: false,
  error: "",
  userInfo: user ? user : null,
};

// Login
export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      return await userService.login(userData);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Register
export const register = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      return await userService.register(userData);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Verify
export const verify = createAsyncThunk(
  "user/verify",
  async (params, { rejectWithValue }) => {
    try {
      return await userService.verify(params);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Process Deposit
export const processDeposit = createAsyncThunk(
  "user/deposit",
  async (params, { rejectWithValue }) => {
    try {
      return await userService.deposit(params);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Withdraw
export const withdraw = createAsyncThunk(
  "user/withdraw",
  async (params, { rejectWithValue }) => {
    try {
      return await userService.withdraw(params);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
      state.loading = false;
      state.error = "";
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.userInfo = null;
      state.isAuthenticated = false;
      state.error = action.payload?.message || action.error.message;
    });

    // register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      state.error = "";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.isAuthenticated = false;
      state.error = action.payload?.message || action.error.message;
    });

    // verify
    builder.addCase(verify.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(verify.fulfilled, (state) => {
      state.loading = false;
      state.userInfo.verified = true;
      state.isAuthenticated = true;
      state.error = "";
      // Update localStorage on the client-side
      const userInfo = { ...state.userInfo, verified: true };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    });
    builder.addCase(verify.rejected, (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.isAuthenticated = false;
      state.error = action.payload?.message || action.error.message;
    });

    // Deposit
    builder.addCase(processDeposit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(processDeposit.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo.balance += action.payload.amount;
      state.error = "";
      // Update localStorage on the client-side
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      userInfo.balance += action.payload.amount;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    });
    builder.addCase(processDeposit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || action.error.message;
    });

    // Withdraw
    builder.addCase(withdraw.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(withdraw.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo.balance -= action.payload.amount;
      state.error = "";
      // Update localStorage on the client-side
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      userInfo.balance -= action.payload.amount;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    });
    builder.addCase(withdraw.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || action.error.message;
    });
  },
});

export const { reset, logout } = userSlice.actions;
export default userSlice.reducer;
