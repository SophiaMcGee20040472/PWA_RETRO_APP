import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    password: '',
    isLoggedIn: false,
    loginError: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { setUsername, setPassword, setIsLoggedIn, setError } = loginSlice.actions;

export default loginSlice.reducer;
