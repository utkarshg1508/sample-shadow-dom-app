import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
    isDarkTheme: boolean;
}

const initialState: ThemeState = {
    isDarkTheme: false, // Default theme is light
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme; // Toggle the theme
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;