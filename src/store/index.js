import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducers/AppReducer";

const rootReducer = {
  app: AppReducer,
};

export const store = configureStore({
  reducer: rootReducer
});