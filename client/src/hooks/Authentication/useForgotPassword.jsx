import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { sendResetPasswordEmailAsync } from "../../stores/actions/authActions";

export default function useForgotPassword() {
    const dispatch = useDispatch();
    const [serverError, setServerError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });

    const { isLoading, resetPasswordEmailSent } = useSelector((state) => state.auth);

    const onSubmit = async (data, e) => {
        e.preventDefault();
        setServerError(null);
        setSuccessMessage(null);

        try {
            await dispatch(sendResetPasswordEmailAsync(data.email)).unwrap();
            setSuccessMessage("Password reset email sent successfully. Check your inbox!");
            reset();
        } catch (error) {
            setServerError(error.message || "Failed to send password reset email.");
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        serverError,
        successMessage,
        isLoading,
        resetPasswordEmailSent,
    };
}
