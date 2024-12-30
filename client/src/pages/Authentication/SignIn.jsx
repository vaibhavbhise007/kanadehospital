import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../../components/auth/SignInForm';
import { Stethoscope } from 'lucide-react';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Error during sign-in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Stethoscope className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Admin Panel
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isLoading ? (
            <div className="flex justify-center">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" />
            </div>
          ) : (
            <SignInForm onSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}
