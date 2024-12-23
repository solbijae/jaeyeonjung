import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  profileMode: boolean;
  isAnimating: boolean;
}

const initialState: ThemeState = {
  profileMode: true,
  isAnimating: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.profileMode = !state.profileMode;
    },
    setAnimating: (state, action) => {
      state.isAnimating = action.payload;
    },
  },
});

export const { toggleTheme, setAnimating } = themeSlice.actions;
export default themeSlice.reducer;
