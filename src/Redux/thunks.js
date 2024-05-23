// ApiThunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});
