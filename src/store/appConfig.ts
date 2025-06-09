import { createSlice } from '@reduxjs/toolkit';

interface AppConfigState {
    workspaceId: string;
    workspaceName: string;
    baseUrl: string;
}

const initialState: AppConfigState = {
    workspaceId: '',
    workspaceName: '',
    baseUrl: ''
};

const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState,
    reducers: {
        setAppConfig: (state, action) => {
            state.workspaceId = action.payload.workspaceId;
            state.workspaceName = action.payload.workspaceName;
            state.baseUrl = action.payload.baseUrl;
        },
    },
});

export const { setAppConfig } = appConfigSlice.actions;
export default appConfigSlice.reducer;