/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        defaultBlue: '#7695EC',
        defaultGreen: '#47B960',
        defaultRed: '#FF5151',
      },
    },
  },
  plugins: [],
};
