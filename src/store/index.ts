import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import appConfigReducer from './appConfig';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        appConfig: appConfigReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;