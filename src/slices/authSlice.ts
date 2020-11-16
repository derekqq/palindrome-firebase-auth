import { createSlice } from '@reduxjs/toolkit';
import { IAuthSliceState, IState } from 'types';

const initialState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectCurrentUser = (state: IState<IAuthSliceState>) => state.auth.user;

export const selectIsAuth = (state: IState<IAuthSliceState>) => state.auth.isAuth;

export default authSlice.reducer;
