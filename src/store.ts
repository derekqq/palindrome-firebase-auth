import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'slices/authSlice';
import palindromeReducer from 'slices/palindromeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    palindrome: palindromeReducer,
  },
});

export default store;
