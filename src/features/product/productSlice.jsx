import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialFilterState = {
  search: "",
  company: "",
  category: "",
};

const initialState = {
  isLoading: false,
  products: [],
  ...initialFilterState,
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

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, thunkAPI) => {
    const { search, company, category } = thunkAPI.getState().product;
    try {
      const resp = await customFetch.get(
        `/api/v1/products?name=${search}&company=${company}&category=${category}`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleFilters: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilterState };
    },
  },
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
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      const { products } = payload;
      state.products = products;
      state.isLoading = false;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleFilters, clearFilters } = productSlice.actions;
export default productSlice.reducer;
