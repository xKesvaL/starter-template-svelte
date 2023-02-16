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
    colors: {
      primary: {
        10: '#2a0054',
        20: '#450086',
        30: '#6300bb',
        40: '#8213ed',
        80: '#d9b9ff',
        90: '#eedcff',
      },
      secondary: {
        10: '#1f182a',
        20: '#342d40',
        30: '#4b4357',
        40: '#635b70',
        80: '#cec2db',
        90: '#eadef7',
      },
      tertiary: {
        10: '#002108',
        20: '#003914',
        30: '#005320',
        40: '#006e2c',
        80: '#60df7b',
        90: '#7dfc94',
      },
      neutral: {
        10: '#1d1b1e',
        20: '#323033',
        30: '#48464a',
        40: '#605d61',
        50: '#79767a',
        60: '#948f94',
        70: '#aeaaae',
        80: '#cac5ca',
        90: '#e6e1e6',
        95: '#f5eff4',
        98: '#fef8fc',
        99: '#fffbff',
      },
      'neutral-variant': {
        10: '#1d1a22',
        20: '#332f37',
        25: '#3e3a42',
        30: '#49454e',
        35: '#55515a',
        40: '#615c66',
        50: '#7a757f',
        60: '#958e99',
        70: '#afa9b3',
        80: '#cbc4cf',
        90: '#e8e0eb',
        95: '#f6eef9',
        98: '#fef7ff',
        99: '#fffbff',
      },
    },
    extend: {
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
      opacity: {
        8: '0.08',
        11: '0.11',
        12: '0.12',
        14: '0.14',
        16: '0.16',
      },
    },
  },
  plugins: [],
};
