import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateEmailTokenAsync } from "../../stores/actions/authActions";
import { useNavigate } from "react-router-dom";

export const useEmailVerification = (token) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const hasFetched = useRef(false); // To prevent multiple dispatches.

    // Redux states for loading, success, and error
    const { isLoading, isVerificationSuccessful, serverError } = useSelector(
        (state) => state.auth
    );

    // Effect to dispatch the email verification action
    useEffect(() => {
        if (token && !hasFetched.current) {
            hasFetched.current = true; // Set the flag to prevent multiple calls
            dispatch(validateEmailTokenAsync(token));
        } else if (!token) {
            navigate("/signup", { state: { message: "Invalid or missing token" } });
        }
    }, [token, dispatch, navigate]);

    // Effect to handle navigation based on verification result
    useEffect(() => {
        if (isVerificationSuccessful) {
            // Redirect to login or welcome page after successful verification
            // navigate("/login");
            // setTimeout(() => navigate("/login"), 3000);
        } else if (serverError) {
            // Handle error case by redirecting or showing a message
            // setTimeout(() =>  navigate("/signup", { state: { message: serverError || "Verification failed" } }), 3000);
        }
    }, [isVerificationSuccessful, serverError, navigate]);

    return {
        isLoading,
        isVerificationSuccessful,
        serverError,
    };
};
