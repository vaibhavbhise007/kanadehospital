import { createSlice } from "@reduxjs/toolkit";
import {
    signUpAsync,
    loginAsync,
    getSessionAsync,
    resetPasswordAsync,
    sendConfirmationEmailAsync,
    validateEmailTokenAsync,
    logoutAsync,
    sendResetPasswordEmailAsync,
} from "../actions/authActions";

// Utils
import { clearToken, setToken, clearAuthData } from "../../utils/authUtils";

// Initial State
const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: null, // No user data in local storage
    token: "",
    roles: [],
    serverError: null,
    redirectUrl: "",
    isAdmin: false,
    isModerator: false,
    isUser: false,
    isCustomer: false,
    session: null,
    isVerificationSuccessful: false,
    confirmationEmailSent: false,
    resetPasswordEmailSent: false,
    successMessage: null,
    passwordResetSuccess: false,
};


// Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthState: () => {
            clearAuthData(); // Clear localStorage and cookies
            return initialState; // Reset state to initial values
        },
    },
    extraReducers: (builder) => {
        builder
            // **Sign Up**
            .addCase(signUpAsync.pending, (state) => {
                state.isLoading = true;
                state.serverError = null;
            })
            .addCase(signUpAsync.fulfilled, (state) => {
                state.isLoading = false;
                state.isLoggedIn = true;
            })
            .addCase(signUpAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.serverError = action.payload || "Sign-up failed.";
            })

            // **Login**
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
                state.serverError = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { token, user, roles } = action.payload;
                state.isLoading = false;
                state.isLoggedIn = true;
                state.token = token;
                state.user = user;
                state.roles = roles;
                setToken(token); // Only save token locally
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.serverError = action.payload || "Login failed.";
            })

            // **Session**
            .addCase(getSessionAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSessionAsync.fulfilled, (state, action) => {
                const { token, user } = action.payload;
                state.isLoading = false;
                state.isLoggedIn = true;
                state.token = token;
                state.user = user;
                state.roles = user.roles.map((role) => role.name);
                state.isAdmin = state.roles.includes("doctor");
                state.isModerator = state.roles.includes("admin");
        
            })
            .addCase(getSessionAsync.rejected, (state) => {
                state.isLoading = false;
                clearAuthData();
            })

            // **Email Verification**
            .addCase(validateEmailTokenAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(validateEmailTokenAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isVerificationSuccessful = true;
                state.redirectUrl = action.payload.redirect;
            })
            .addCase(validateEmailTokenAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isVerificationSuccessful = false;
                state.serverError = action.payload || "Verification failed.";
            })

            // **Reset Password**
            .addCase(resetPasswordAsync.pending, (state) => {
                state.isLoading = true;
                state.serverError = null;
                state.successMessage = null;
            })
            .addCase(resetPasswordAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
                state.passwordResetSuccess = true;
            })
            .addCase(resetPasswordAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.serverError = action.payload || "Reset password failed.";
            })

            // **Send Confirmation Email**
            .addCase(sendConfirmationEmailAsync.pending, (state) => {
                state.isLoading = true;
                state.confirmationEmailSent = false;
            })
            .addCase(sendConfirmationEmailAsync.fulfilled, (state) => {
                state.isLoading = false;
                state.confirmationEmailSent = true;
            })
            .addCase(sendConfirmationEmailAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.confirmationEmailSent = false;
                state.serverError = action.payload || "Failed to send confirmation email.";
            })

            // **Send Reset Password Email**
            .addCase(sendResetPasswordEmailAsync.pending, (state) => {
                state.isLoading = true;
                state.resetPasswordEmailSent = false;
            })
            .addCase(sendResetPasswordEmailAsync.fulfilled, (state) => {
                state.isLoading = false;
                state.resetPasswordEmailSent = true;
            })
            .addCase(sendResetPasswordEmailAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.resetPasswordEmailSent = false;
                state.serverError = action.payload || "Failed to send reset password email.";
            })

            // **Logout**
            .addCase(logoutAsync.pending, (state) => {
                state.isLoading = true; // Show loading indicator
                state.serverError = null; // Clear previous errors
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                state.isLoading = false; // Hide loading indicator
                clearToken();
                clearAuthData();
                Object.assign(state, initialState); // Reset state
            })
            .addCase(logoutAsync.rejected, (state, action) => {
                state.isLoading = false; // Hide loading indicator
                state.serverError = action.payload || "Logout failed."; // Set error message
            });
    },
});

// Export actions
export const { resetAuthState } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
