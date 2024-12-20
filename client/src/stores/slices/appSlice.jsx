import { createSlice } from '@reduxjs/toolkit';

// Initial state interface
const initialState = {
    isLoading: true,
};

// Create app slice
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload; // Update loading state
        },
    },
});

// Export actions and reducer
export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
