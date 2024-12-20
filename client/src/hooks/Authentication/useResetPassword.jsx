import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAsync } from "../../stores/actions/authActions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function useResetPassword(token) {
    const [successMessage, setSuccessMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, serverError } = useSelector((state) => state.auth);

    const { register, handleSubmit, setError, formState: { errors }, } = useForm();

    const validatePasswords = (data) => {
        if (data.newPassword !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match",
            });
            return false;
        }
        return true;
    };
    const onSubmit = async (data) => {
        if (!validatePasswords(data)) return;
        try {
            const payload = { token, newPassword: data.newPassword, confirmPassword: data.confirmPassword };
            await dispatch(resetPasswordAsync(payload)).unwrap();
            setSuccessMessage("Password reset successfully!");
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            console.error("Reset Password Error:", error);
        }
    };

    return { register, handleSubmit, onSubmit, errors, isLoading, successMessage, serverError, };
}
