import React from "react";
import { useParams } from "react-router-dom";
import { useEmailVerification } from "../../hooks/Authentication/useEmailVerification";

const EmailVerification = () => {
  const { token } = useParams(); // Token from the URL
  const { isLoading, isVerificationSuccessful, serverError } = useEmailVerification(token);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {isLoading ? (
        <p className="text-lg font-medium text-gray-700 animate-pulse">
          Verifying your email, please wait...
        </p>
      ) : (
        <div
          className={`text-lg font-semibold p-4 rounded-lg shadow-md ${
            isVerificationSuccessful
              ? "bg-green-100 text-green-700 border border-green-400"
              : "bg-red-100 text-red-700 border border-red-400"
          }`}
        >
          {isVerificationSuccessful
            ? "Your email has been verified successfully! 🎉"
            : serverError || "Email verification failed. Please try again."}
        </div>
      )}
    </div>
  );
};

export default EmailVerification;
