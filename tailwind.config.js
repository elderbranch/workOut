/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inputBg: '#F2F2F2',
        inputBorger: '#5065EB',
        btnColor: '#5065EB',
        textColor: '#F6F6F6'
      },
      fontSize: {
        h1: ['32px', '38px'],
      },
      backgroundImage: {
        'profile-back': "url('./src/assets/BackImage.svg)",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'workoutTitle': ['Helvetica NeueLTW0693BlkExtObl', 'system-ui'],
      },
    },
  },
  plugins: [],
}

