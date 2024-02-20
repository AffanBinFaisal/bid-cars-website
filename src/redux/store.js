import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import resultsReducer from "./slice/resultsSlice";
import loginReducer from "./slice/loginSlice";
import registerReducer from "./slice/registerSlice";
import logoutReducer from "./slice/logoutSlice";
import filtersReducer from "./slice/filtersSlice";
import verifyReducer from "./slice/verificationSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    results: resultsReducer,
    login: loginReducer,
    register: registerReducer,
    logout: logoutReducer,
    filters: filtersReducer,
    verify: verifyReducer,
  },
});

export default store;
