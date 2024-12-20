import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST, GET } from "../../utils/http";
import { handleError } from "../../utils/error";

// Async Thunks
export const signUpAsync = createAsyncThunk(
    "auth/signUp",
    async (userData, { rejectWithValue }) => {
        try {
            const { response, json } = await POST("auth/signup", userData);
            if (response.status === 201) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

// Thunk for email token validation
export const validateEmailTokenAsync = createAsyncThunk(
    "auth/validateEmailToken",
    async (token, { rejectWithValue }) => {
        try {
            const { response, json } = await GET(`auth/verification/${token}`);
            if (response.status === 201) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const loginAsync = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const { response, json } = await POST('auth/login', credentials);
            console.log()
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
)

export const getSessionAsync = createAsyncThunk(
    "auth/getSession",
    async (_, { rejectWithValue }) => {
        try {
            const { response, json } = await GET("auth/session");
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const sendResetPasswordEmailAsync = createAsyncThunk(
    "auth/sendResetPasswordEmail",
    async (email, { rejectWithValue }) => {
        try {
            const { response, json } = await POST("auth/forgotPassword", { email });
            console.log(response);
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const resetPasswordAsync = createAsyncThunk(
    "auth/resetPassword",
    async ({ token, newPassword, confirmPassword }, { rejectWithValue }) => {
        try {
            console.log(newPassword, confirmPassword)
            const { response, json } = await POST(`auth/resetPassword/${token}`, { newPassword, confirmPassword });
            if (response.status === 200) {
                return json;
            }
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);

export const sendConfirmationEmailAsync = createAsyncThunk(
    "auth/sendConfirmationEmail",
    async (email, { rejectWithValue }) => {
        try {
            const { response, json } = await POST("auth/confirmation", { email });
            console.log(response);
            if (response.statusText === "OK") return json;
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);


export const logoutAsync = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const { response, json } = await GET("auth/logout");
            if (response.statusText === "OK") return json;
            return rejectWithValue(handleError(json));
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
);