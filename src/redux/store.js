import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/searchSlice";
import resultsReducer from "./slice/resultsSlice";
import filtersReducer from "./slice/filtersSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    results: resultsReducer,
    // login: loginReducer,
    // register: registerReducer,
    // logout: logoutReducer,
    filters: filtersReducer,
    // verify: verifyReducer,
    user: userReducer,
  },
});

export default store;
