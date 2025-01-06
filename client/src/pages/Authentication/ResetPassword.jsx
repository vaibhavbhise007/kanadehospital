import React from 'react';
import useResetPassword from '../../hooks/Authentication/useResetPassword';
import { useParams } from "react-router-dom";

function ResetPassword() {
    const { token } = useParams(); // Token from the URL
    console.log(token);
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    successMessage,
    serverError,
  } = useResetPassword(token);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-group">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              {...register("newPassword", { required: "New password is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.newPassword && <span className="text-red-600 text-sm">{errors.newPassword.message}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", { required: "Confirm password is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>

          {serverError && <div className="text-red-600 text-sm mt-4">{serverError}</div>}
          {successMessage && <div className="text-green-600 text-sm mt-4">{successMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
