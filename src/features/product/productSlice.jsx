import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialFilterState = {
  search: "",
  company: "",
  category: "",
  sort: "",
  page: 1,
};

const initialState = {
  isLoading: false,
  products: [],
  singleProduct: [],
  totalPages: 1,
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
    const { search, company, category, sort, page } =
      thunkAPI.getState().product;
    try {
      const resp = await customFetch.get(
        `/api/v1/products?name=${search}&company=${company}&category=${category}&sort=${sort}&page=${page}`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (id, thunkAPI) => {
    try {
      const resp = await customFetch.get(`/api/v1/products/${id}`);
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
      console.log(name, value);
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, search: "", company: "", category: "" };
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
      const { products, totalPages } = payload;
      state.totalPages = totalPages;
      state.products = products;
      state.isLoading = false;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getSingleProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.singleProduct = product;
      state.isLoading = false;
    },
    [getSingleProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleFilters, clearFilters } = productSlice.actions;
export default productSlice.reducer;
