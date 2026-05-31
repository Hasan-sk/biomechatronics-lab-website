/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        miamiRed: '#C41230',
        miamiAccent: '#AD102A',
        miamiWarm: '#FAF9F7',
        miamiTan: '#EDECE2',
      },
    },
  },
  plugins: [],
};
