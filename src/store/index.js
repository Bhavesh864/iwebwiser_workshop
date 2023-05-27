import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducers/AppReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = {
  app: AppReducer,
  user: UserReducer,
};

export const store = configureStore({
  reducer: rootReducer
});