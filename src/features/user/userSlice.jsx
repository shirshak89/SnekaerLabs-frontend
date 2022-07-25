import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: "",
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (creds, thunkAPI) => {
    try {
      const resp = await customFetch.post("/api/v1/auth/login", creds);
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
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.user = user;
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(user));
      toast.success(`Welcome Back ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { consoleLog } = userSlice.actions;
export default userSlice.reducer;
