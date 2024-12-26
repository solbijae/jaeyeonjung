import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  bnwTheme: boolean;
  profileMode: boolean;
  isAnimating: boolean;
}

const initialState: ThemeState = {
  bnwTheme: true,
  profileMode: true,
  isAnimating: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.bnwTheme = !state.bnwTheme;
    },
    toggleTabs: (state) => {
      state.profileMode = !state.profileMode;
    },
    setAnimating: (state, action) => {
      state.isAnimating = action.payload;
    },
  },
});

export const { toggleTheme, toggleTabs, setAnimating } = themeSlice.actions;
export default themeSlice.reducer;
