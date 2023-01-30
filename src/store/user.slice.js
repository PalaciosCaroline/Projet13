import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userFirstName: '',
  userLastName: '',
  isAuthentificated: false,
  errorLogin: '',
  errorUpdateIdentity: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.userFirstName = action.payload;
    },
    setUserLastName: (state, action) => {
      state.userLastName = action.payload;
    },
    setIsAuthentificated: (state, action) => {
      state.isAuthentificated = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.userFirstName = '';
      state.userLastName = '';
      state.isAuthentificated = false;
    },
    setErrorUpdateIdentity: (state, action) => {
      state.errorUpdateIdentity = action.payload;
    },
    setErrorLogin: (state, action) => {
      state.errorLogin = action.payload;
    },
    setIsLoadingLogin: (state, action) => {
      state.isloadingLogin = action.payload;
    },
  },
});

export const { setToken, setUserFirstName, setUserLastName, setIsAuthentificated, logout, setErrorLogin, setErrorUpdateIdentity, setIsLoadingLogin } = userSlice.actions;

export default userSlice.reducer;



