/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerLinks: "#ffffff0a",
        lightBlack: "#0B0D17",
        skyBlue: "#D0D6F9",
        pureWhite: "#FFFFFF",
      },
      // backgroundImage: {
      //   "hero-pattern":
      //     "linear-gradient(to right ,rgb(168 85 247 /800), rgb(236 72 153 /800))",
      // },
    },
    fontFamily: {
      robo: ["var(--font-roboto)"],
      ubun: ["var(--font-ubuntu)"],
      rale: ["var(--font-raleway)"],
      barlow: ["var(--font-barlow)"],
      bellefair: ["var(--font-bellefair)"],
    },
  },
  plugins: [],
};
