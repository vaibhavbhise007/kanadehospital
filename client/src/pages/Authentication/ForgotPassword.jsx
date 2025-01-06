import React from 'react';
import useForgotPassword from '../../hooks/Authentication/useForgotPassword'; // Adjust the path as needed

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    serverError,
    successMessage,
    isLoading,
  } = useForgotPassword();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.email && (
              <span className="text-red-600 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isLoading ? "Sending..." : "Send Reset Email"}
          </button>

          {serverError && (
            <div className="text-red-600 text-sm mt-4">{serverError}</div>
          )}
          {successMessage && (
            <div className="text-green-600 text-sm mt-4">{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
