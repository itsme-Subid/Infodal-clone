/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00b4d8",
        secondary: "rgb(3 4 94)",
        chatIconColor: "#0c31c8",
      },
      backgroundImage: {
        'hero-img': "url('https://www.infodal.com/_next/image?url=%2Fimages%2Fhome%2Flanding-img.png&w=3840&q=75')",
        'point-img': "url('https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy-bg.cc8b0e43.png&w=1080&q=75')",
      }
    },
  },
  plugins: [],
}