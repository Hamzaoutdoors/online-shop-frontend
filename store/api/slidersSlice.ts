import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Ip_port } from "../../constants";
import { SliderResponse, SliderState } from "@/lib/types/sliders/sliders";

const SLIDERS_URL = `${Ip_port.Adresse}/api/slider`;

const initialState: SliderState = {
  sliders: [],
  loading: false,
  error: {},
};

export const getSliders = createAsyncThunk(
  "redux/sliders/getSliders",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SLIDERS_URL}`, {
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

const slidersSlicer = createSlice({
  name: "sliders",
  initialState,
  reducers: {
    // ...
  },
  extraReducers: {
    [getSliders.pending.type]: (state) => ({ ...state, loading: true }),
    [getSliders.fulfilled.type]: (state, action) => ({
      ...state,
      sliders: action.payload.map((item: SliderResponse) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          imageUrl: item.image.path,
        };
      }),
      loading: false,
    }),
    [getSliders.rejected.type]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
});

export default slidersSlicer.reducer;
