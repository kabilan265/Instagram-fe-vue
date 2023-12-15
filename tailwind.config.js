module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'black': '#000',
      'light':'rgb(115, 115, 115)',
      'white': {
        'primary': 'rgb(255, 255, 255)',
        'aggresive': '#dfdfdf',
        'msg':"#e0e0e0"
      },
      'warning': 'rgb(237, 73, 86)',
      'blue': {
        'primary': 'rgb(0, 149, 246)',
        'aggresive': 'rgb(24, 119, 242)',
      },
      'others': {
        'inputbox': '#f8f8f8',
        'inpbor': 'rgba(204, 204, 204, 0.144)',
        'loginbor': 'rgba(0, 0, 0, 0.146)',
         'buttonbg':'rgb(239, 239, 239)'
      } //input border
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}