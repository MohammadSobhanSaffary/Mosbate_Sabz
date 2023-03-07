import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";

const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
export default store;
