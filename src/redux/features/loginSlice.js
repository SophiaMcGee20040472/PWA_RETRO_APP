// Import createSlice function from the Redux Toolkit library
import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the store for handling login state
const loginSlice = createSlice({
  name: 'login', // A name for the slice
  initialState: {
    username: '', // The username of the logged in user
    password: '', // The password of the logged in user
    isLoggedIn: false, // A boolean value indicating whether the user is logged in or not
    loginError: null, // An error message to display if there was an error during login
  },
  reducers: {
    // A reducer to set the username of the logged in user
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    // A reducer to set the password of the logged in user
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    // A reducer to set the login status of the user
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    // A reducer to set the error message if there was an error during login
    setError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

// Export the actions created by the slice
export const { setUsername, setPassword, setIsLoggedIn, setError } = loginSlice.actions;

// Export the reducer created by the slice
export default loginSlice.reducer;
