import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice"; // Ensure this points to the correct theme slice file
import appReducer from "./slices/appSlice"; // Ensure this path is correct
import authReducer from "./slices/authSlice";
import blogReducer from "./slices/blogSlice";
import appointmentsReducer from "./slices/appointmentsSlice";
import contactReducer from "./slices/contactSlice";
import treatmentReducer from "./slices/treatmentSlice";

// Create a Redux store containing our reducers.
export const store = configureStore({
  reducer: {
    app: appReducer,
    blog: blogReducer, // Add your blog slice here, if needed.
    appointments: appointmentsReducer,
    theme: themeReducer,
    auth: authReducer,
    contact: contactReducer,
    treatment: treatmentReducer,
  },
});

// Define RootState and AppDispatch for usage in your components
export const RootState = () => store.getState();
export const AppDispatch = () => store.dispatch();
