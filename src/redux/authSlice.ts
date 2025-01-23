import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for the slice state
interface AuthState {
  isLoggedIn: boolean;
  user: { username: string } | null; // Or any other properties related to the user
  error: string | null;
}

// Define the initial state for authentication
const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth", // Slice name
  initialState, // Initial state
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ username: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

// Export actions from the slice
export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
