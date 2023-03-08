import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./authStore"

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
});

export default store;
