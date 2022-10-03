/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-4": "#240D57",
        "primary-3": "#501FC1",
        "primary-2": "#8456EC",
        "primary-1": "#E87BF8",

        "secondary-3": "#CCB6FF",
        "secondary-2": "#EDE5FF",
        "secondary-1": "#F6F2FF",

        "error-1": "#FFD7E0",
        "error-2": "#E61445",
        "success-1": "#D3FFE2",
        "success-2": "#00805E",

        "txt-1": "#BDBDBD",
        "txt-2": "#F2F2F2",
        "txt-3": "#E0E0E0",
        "txt-4": "#BDBDBD",
        "txt-5": "#828282",
        "txt-6": "#4F4F4F",
      },
    },
  },
  plugins: [],
};
