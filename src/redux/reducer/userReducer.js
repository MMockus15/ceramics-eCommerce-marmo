import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: null,
  email: null,
  role: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
      state.email = null;
      state.role = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
