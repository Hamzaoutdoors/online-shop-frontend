import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Ip_port } from "../../constants";
import { ProductResponse, ProductState } from "@/lib/types/products";

const PRODUCTS_URL = `${Ip_port.Adresse}/api/products`;

const initialState: ProductState = {
  products: [],
  currentProduct: null,
  loading: false,
  error: {},
};

export const getHomeProducts = createAsyncThunk(
  "redux/products/getHomeProducts",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${PRODUCTS_URL}?join=images&join=category`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/* export const getProductDetail = createAsyncThunk(
  "redux/products/getProductDetail",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${PRODUCTS_URL}/${id}?join=category&join=images`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
); */

const productsSlicer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: {
    [getHomeProducts.pending.type]: (state) => ({ ...state, loading: true }),
    [getHomeProducts.fulfilled.type]: (state, action) => ({
      ...state,
      products: action.payload.slice(0, 8).map((product: ProductResponse) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        quantity: product.quantity,
        discount: product.discount,
        status: product.status,
        image: product.images[0],
        images: product.images,
        category: product.category,
        createdAt: product.createdAt,
      })),
      loading: false,
    }),
    [getHomeProducts.rejected.type]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
});

export default productsSlicer.reducer;
export const { setProduct } = productsSlicer.actions;
