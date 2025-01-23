import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// Create and configure the store
export const store = configureStore({
  reducer: {
    counter: authReducer, // Add the counter reducer to the store
  },
});

// Define types for RootState and AppDispatch for usage in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
