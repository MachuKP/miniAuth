import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";

const user = JSON.parse(localStorage.getItem("user"));

//register
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await AuthService.register(user);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  reducers: {
    reset: (state) => {
      (state.isError = false),
      (state.isSuccess = false),
      (state.isLoading = false),
      (state.message = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false,
        state.isError = true,
        state.message = action.payload,
        state.user = null
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
