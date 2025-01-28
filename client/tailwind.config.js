/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure you have the correct paths for your files
  ],
  theme: {
    extend: {
      // Add custom configurations if needed
      textColor: ['active'],
      fontWeight: ['active'],
      fontFamily: {
        fira: ["'Fira Sans Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [

    // Add any Tailwind plugins if you're using them
  ],
};

