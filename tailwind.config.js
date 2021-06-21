module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '280px',
      'sm': '580px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundImage: theme => ({
        'background-img1': "url('/src/images/clouds-02.png')",
        'background-img2': "url('/src/images/img_header.png')",
        'background-img3': "url('/src/images/slider-overlay1.png')",
        'background-img4': "url('/src/images/divider.png')",
        'background-img5': "url('/src/images/agency_2-3_paralax.png')"

      }),
      colors: {
        'custom-yellow': '#BAA333',
        'sylab-blue': '#021940',
        'sylab-orange': '#ff7323',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
