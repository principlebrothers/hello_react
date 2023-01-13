import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./greetingSlice";

export const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
})