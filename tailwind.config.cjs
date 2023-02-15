const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          100: '#2a0054',
          200: '#450086',
          300: '#6300bb',
          400: '#8213ed',
          800: '#d9b9ff',
          900: '#eedcff',
        },
        secondary: {
          100: '#1f182a',
          200: '#342d40',
          300: '#4b4357',
          400: '#635b70',
          800: '#cec2db',
          900: '#eadef7',
        },
        tertiary: {
          100: '#002108',
          200: '#003914',
          300: '#005320',
          400: '#006e2c',
          800: '#60df7b',
          900: '#7dfc94',
        },
      },
      borderRadius: {
        none: '0',
        xs: '0.25rem',
        sm: '0.5rem',
        DEFAULT: '0.75rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.75rem',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
