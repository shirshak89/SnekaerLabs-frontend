import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  products: [],
};

export const getFeaturedProducts = createAsyncThunk(
  "product/getFeaturedProducts",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/api/v1/products?featured=true");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getFeaturedProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getFeaturedProducts.fulfilled]: (state, { payload }) => {
      const { products } = payload;
      state.products = products;
      state.isLoading = false;
    },
    [getFeaturedProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default productSlice.reducer;
