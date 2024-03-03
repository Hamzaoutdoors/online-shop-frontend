import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Ip_port } from "../../constants";

import type { BrandState, BrandsResponse } from "../../lib/types/brands";

const BRANDS_URL = `${Ip_port.Adresse}/api/brands`;

const initialState: BrandState = {
  brands: [],
  loading: false,
  error: {},
};

export const getBrands = createAsyncThunk(
  "redux/brands/getBrands",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BRANDS_URL}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const brandsSlicer = createSlice({
  name: "brands",
  initialState,
  reducers: {
    // ...
  },
  extraReducers: {
    [getBrands.pending.type]: (state) => ({ ...state, loading: true }),
    [getBrands.fulfilled.type]: (state, action) => ({
      ...state,
      brands:
        action.payload?.map((item: BrandsResponse) => {
          return {
            id: item.id,
            name: item.name,
            logo: item.logo.path,
          };
        }) || [],
      loading: false,
    }),
    [getBrands.rejected.type]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
});

export default brandsSlicer.reducer;
