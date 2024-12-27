/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-gradient': 'linear-gradient(45deg, #eee, #1677ff20, #eee);'
      },
      animation: {
        'bounce-mild': 'bounce-mild 4s infinite ease-in-out',
      },
      keyframes: {
        'bounce-mild': {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

