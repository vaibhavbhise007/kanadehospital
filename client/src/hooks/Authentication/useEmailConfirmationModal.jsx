import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmEmailAsync } from "../../stores/actions/authActions";

export default function useEmailConfirmationModal() {
    const dispatch = useDispatch();

    const [isRequestLoading, setIsRequestLoading] = useState(false); // Loading state for email confirmation
    const [isSuccessfullySend, setIsSuccessfullySend] = useState(false); // To track if the email was successfully sent

    // Function to send the confirmation email
    const sendConfirmationEmail = () => {
        dispatch(confirmEmailAsync({
            setIsRequestLoading,
            setIsSuccessfullySend,
            Navigate,
        }));
    };

    return { isRequestLoading, isSuccessfullySend, sendConfirmationEmail };
}
