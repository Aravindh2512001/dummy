// Store.js

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
