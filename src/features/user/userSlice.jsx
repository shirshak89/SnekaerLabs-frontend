import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: "",
};

export const testAPICall = createAsyncThunk(
  "user/testAPI",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/test");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("There was an error");
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.post("/api/v1/auth/login", {
        email: "anna@gmail.com",
        password: "secret1",
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Login Error");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    consoleLog: (state) => {
      state.user = "shirshak";
      console.log("Logged");
    },
  },
  extraReducers: {
    [testAPICall.pending]: (state) => {
      state.isLoading = true;
    },
    [testAPICall.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
    },
    [testAPICall.rejected]: (state) => {
      state.isLoading = false;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [loginUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { consoleLog } = userSlice.actions;
export default userSlice.reducer;
