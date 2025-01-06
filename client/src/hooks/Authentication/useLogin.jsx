import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../stores/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Errors, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    
    const { isLoading, serverError } = useSelector((state) => state.auth);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });

    const preparePayload = (data) => ({
        email: data.userEmail.trim(),
        password: data.userPassword,
    });

    const onSubmit = async (data) => {
        setError("");
        setSuccessMessage("");
        const payload = preparePayload(data);

        try {
            const response = await dispatch(loginAsync(payload)).unwrap();
            setSuccessMessage("Login successful!");
            reset();

            // Navigate based on roles
            setTimeout(() => {
                if (response.roles.some((role) => role.name === "doctor")) {
                    navigate("/dashboard");
                } else {
                    navigate("/login");
                }
            }, 1000);
        } catch (error) {
            setError(error.message || "An error occurred during login.");
        }
    };

    return { register, isLoading, handleSubmit, errors, Errors, onSubmit, serverError, successMessage };
}
