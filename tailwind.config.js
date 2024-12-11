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
        btnColor: '#5065EB'
      },
    },
    fontSize: {
      h1: ['32px', '38px'],
    },
    backgroundImage: {
      'profile-back': "url('./src/assets/BackImage.svg)",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}

