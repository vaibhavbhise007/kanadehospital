import React, { useState } from "react";

export default function AppointmentForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section className="bg-[#e6dfdf] py-12 px-4 pt-32 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Form Section */}
        <div className="bg-white shadow-md rounded-lg p-8">
          {formSubmitted ? (
            <div className="text-[rgb(107,71,55)] text-xl font-bold">
              Form submitted successfully!
            </div>
          ) : (
            <form className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm  font-medium text-gray-600 r"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  // value={formSubmitted.name}
                  // onChange={handleSubmit}
                  placeholder="Enter your name"
                  className="w-full border border-black rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[rgb(107,71,55)]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-600"
                >
                  Mobile No*
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  required
                  pattern="^\d{10}$"
                  maxlength="10"
                  className="w-full border border-[rgb(107,71,55)] rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[rgb(107,71,55)]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-[rgb(107,71,55)] rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[rgb(107,71,55)]"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-600"
                >
                  Select Date*
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  className="w-full border border-[rgb(107,71,55)] rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[rgb(107,71,55)]"
                />
              </div>
              <div className="pb-3">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-600"
                >
                  Select Department*
                </label>
                <select
                  id="department"
                  required
                  className="w-full border border-[rgb(107,71,55)] rounded-lg p-2 mt-1  focus:outline-none focus:ring-1 focus:ring-[rgb(107,71,55)]"
                >
                  <option value="">Choose a department</option>
                  <option value="gynecology">Gynecology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="cardiology">Cardiology</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(107,71,55)] text-white py-2 rounded-lg shadow-md hover:bg-[#C5A572] transition-colors"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            BOOK AN <span className="text-[rgb(107,71,55)]">APPOINTMENT</span>
          </h2>
          <p className="text-lg font-serif text-gray-600">
            We are available 24/7 round the clock
          </p>
        </div>
      </div>
    </section>
  );
}
