import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
    isDarkTheme: string;
}

const initialState: ThemeState = {
    isDarkTheme: 'light', // Default theme is light
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.isDarkTheme = action.payload.isDarkTheme; // Toggle the theme
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;