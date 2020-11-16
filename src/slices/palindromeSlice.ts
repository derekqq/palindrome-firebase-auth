import { createSlice } from '@reduxjs/toolkit';
import initialList from 'mocked-data/initalList.json';

const palindromeSlice = createSlice({
  name: 'palindrom',
  initialState: {
    list: initialList.items,
  },
  reducers: {
    addItem(state, action) {
      const { sentence, isPalindrome } = action.payload;
      state.list.push({ sentence, isPalindrome });
    },
  },
});

export const { addItem } = palindromeSlice.actions;
export default palindromeSlice.reducer;
