/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px", // extra small devices, phones
      sm: "640px", // small devices, tablets
      md: "768px", // medium devices, small laptops
      lg: "1024px", // large devices, laptops
      xl: "1280px", // extra large devices, large laptops, desktops
      xxl: "1440px", // xxl devices, large desktops
      "2xl": "1920px", // Full HD screens
      "3xl": "2560px", // QHD screens
      "4xl": "3840px", // 4K screens
      "5xl": "100%", // covers everything above
    },
    container: {
      center: true,
      padding: {
        xs: "5px", // extra small devices, phones
        sm: "10px", // small devices, tablets
        md: "15px", // medium devices, small laptops
        lg: "20px", // large devices, laptops
        xl: "25px", // extra large devices, large laptops, desktops
        xxl: "30px", // xxl devices, large desktops
        "2xl": "35px", // Full HD screens
        "3xl": "40px", // QHD screens
        "4xl": "45px", // 4K screens
        "5xl": "50px", // covers everything above
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
