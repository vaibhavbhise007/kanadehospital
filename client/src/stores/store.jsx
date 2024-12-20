import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice'; // Ensure this points to the correct theme slice file
import appReducer from './slices/appSlice'; // Ensure this path is correct
import authReducer from './slices/authSlice'

// Create a Redux store containing our reducers.
export const store = configureStore({
    reducer: {
        app: appReducer,
        theme: themeReducer,
        auth: authReducer,
    },
});

// Define RootState and AppDispatch for usage in your components
export const RootState = () => store.getState();
export const AppDispatch = () => store.dispatch();
