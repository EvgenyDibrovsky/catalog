/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px', // extra small devices, phones
      sm: '640px', // small devices, tablets
      md: '768px', // medium devices, small laptops
      lg: '1024px', // large devices, laptops
      xl: '1280px', // extra large devices, large laptops, desktops
      xxl: '1440px', // xxl devices, large desktops
      '2xl': '1920px', // Full HD screens
      '3xl': '2560px', // QHD screens
      '4xl': '3840px', // 4K screens
      '5xl': '100%', // covers everything above
    },
    container: {
      center: true,
      padding: {
        xs: '5px', // extra small devices, phones
        sm: '10px', // small devices, tablets
        md: '15px', // medium devices, small laptops
        lg: '20px', // large devices, laptops
        xl: '25px', // extra large devices, large laptops, desktops
        xxl: '30px', // xxl devices, large desktops
        '2xl': '35px', // Full HD screens
        '3xl': '40px', // QHD screens
        '4xl': '45px', // 4K screens
        '5xl': '50px', // covers everything above
      },
    },
    extend: {
      colors: {
        bgBody: '#fff',
        bgHeader: '#e3e3e3',
        darkBgHeader: '#1f1f1f',
        bgFooter: '#e3e3e3',
        darkBgFooter: '#1f1f1f',
        bgSection: '#FAFAFA',
        bgContainer: '#F3F3F3',
        bgCardsItem: '#ffffff',
        textPrimary: '#000',
        textSecondary: '#36a6de',
        colorLoader: '#0A192F',
        bordercardsListItem: '#0A192F',
        bgcardsListItem: '#0A192F',
        hoverMenuHeaader: '#36a6de',
        hoverToggleLang: '#36a6de',
        switherTheme: '#36a6de',
        colorLogo: '#36a6de',
        colorMobileMenuIcon: '#36a6de',
        colorIconAuthHeader: '#36a6de',
        bgModal: 'rgba(0,0,0,0.5)',
        borderLabelForm: '#36a6de',
        btnSignUpForm: '#36a6de',
        btnAuthForm: '#36a6de',
        checkboxColor: '#36a6de',
        titleLine: '#36a6de',
      },
      boxShadow: {
        'md-up':
          '0 0px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 9px 0px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
