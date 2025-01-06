import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUpAsync } from "../../stores/actions/authActions";

export default function useSignupForm() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [Errors, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    // const [isFormLoading, setIsFormLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });

    const { isLoading, serverError } = useSelector((state) => state.auth);

    const preparePayload = (data) => ({
        firstName: data.userFirstName?.trim(),
        lastName: data.userLastName?.trim(),
        mobile: data.userMobile?.trim(),
        email: data.userEmail?.trim(),
        password: data.userPassword,
    });

    const onSubmit = async (data, e) => {
        e.preventDefault();
        // setIsFormLoading(true);
        // setError("");
        // console.log(data);
        setSuccessMessage("");
        const payload = preparePayload(data);
        try {
            await dispatch(signUpAsync(payload)).unwrap();
            setSuccessMessage("User created successfully. Please check your email to confirm.");
            reset();
        } catch (error) {
            setError(error || "An error occurred during sign-up.");
        }
        finally {
            // setIsFormLoading(false);
        }
    };

    return { register, isLoading, handleSubmit, errors, Errors, onSubmit, serverError, successMessage };
}
