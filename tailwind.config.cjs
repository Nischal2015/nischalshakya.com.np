/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    colors: {
      white: '#f8f9fa',
      black: '#212529',
      source: {
        primary: '#ffc078',
        secondary: '#74c0fc',
        tertiary: '#e599f7',
        green: '#8ce99a',
      },
      sys: {
        light: {
          'surface-tint': '#875200',
          'surface-tint-color': '#875200',
          'on-error-container': '#410002',
          'on-error': '#ffffff',
          'error-container': '#ffdad6',
          'on-tertiary-container': '#340043',
          'on-tertiary': '#ffffff',
          'tertiary-container': '#fbd7ff',
          tertiary: '#864299',
          shadow: '#000000',
          error: '#ba1a1a',
          outline: '#827568',
          'on-background': '#1f1b16',
          background: '#fffbff',
          'inverse-on-surface': '#faefe7',
          'inverse-surface': '#352f2a',
          'on-surface-variant': '#50453a',
          'on-surface': '#1f1b16',
          'surface-variant': '#f1e0d0',
          surface: '#fffbff',
          'on-secondary-container': '#001e31',
          'on-secondary': '#ffffff',
          'secondary-container': '#cce5ff',
          secondary: '#006496',
          'inverse-primary': '#ffb865',
          'on-primary-container': '#2b1700',
          'on-primary': '#ffffff',
          'primary-container': '#ffddba',
          primary: '#875200',
          color: '#006495',
          'on-color': '#ffffff',
          'color-container': '#cbe6ff',
          'on-color-container': '#001e30',
          'custom color 1': '#366a21',
          'on-custom color 1': '#ffffff',
          'custom color 1-container': '#b6f398',
          'on-custom color 1-container': '#062100',
          green: '#006e2e',
          'on-green': '#ffffff',
          'green-container': '#9af7a7',
          'on-green-container': '#002109',
          'custom color 2': '#2a6b28',
          'on-custom color 2': '#ffffff',
          'custom color 2-container': '#acf4a0',
          'on-custom color 2-container': '#002202',
          dark: '#2a6b28',
          'on-dark': '#ffffff',
          'dark-container': '#acf4a0',
          'on-dark-container': '#002202',
        },
        dark: {
          'surface-tint': '#ffb865',
          'surface-tint-color': '#ffb865',
          'on-error-container': '#ffdad6',
          'on-error': '#690005',
          'error-container': '#93000a',
          'on-tertiary-container': '#fbd7ff',
          'on-tertiary': '#520b66',
          'tertiary-container': '#6b297f',
          tertiary: '#f1afff',
          shadow: '#000000',
          error: '#ffb4ab',
          outline: '#9d8e81',
          'on-background': '#ebe1d9',
          background: '#1f1b16',
          'inverse-on-surface': '#1f1b16',
          'inverse-surface': '#ebe1d9',
          'on-surface-variant': '#d4c4b5',
          'on-surface': '#ebe1d9',
          'surface-variant': '#50453a',
          surface: '#1f1b16',
          'on-secondary-container': '#cce5ff',
          'on-secondary': '#003350',
          'secondary-container': '#004b72',
          secondary: '#91cdff',
          'inverse-primary': '#875200',
          'on-primary-container': '#ffddba',
          'on-primary': '#482a00',
          'primary-container': '#663d00',
          primary: '#ffb865',
          color: '#8fcdff',
          'on-color': '#00344f',
          'color-container': '#004b71',
          'on-color-container': '#cbe6ff',
          'custom color 1': '#9bd67f',
          'on-custom color 1': '#0e3900',
          'custom color 1-container': '#1e5108',
          'on-custom color 1-container': '#b6f398',
          green: '#7eda8d',
          'on-green': '#003915',
          'green-container': '#005321',
          'on-green-container': '#9af7a7',
          seed: '#212529',
          value: '#212529',
          'custom color 2': '#91d886',
          'on-custom color 2': '#003a06',
          'custom color 2-container': '#0c5311',
          'on-custom color 2-container': '#acf4a0',
          dark: '#91d886',
          'on-dark': '#003a06',
          'dark-container': '#0c5311',
          'on-dark-container': '#acf4a0',
        },
      },
      ref: {
        primary: {
          0: '#000000',
          5: '#290400',
          10: '#2b1700',
          15: '#4f0c00',
          20: '#482a00',
          25: '#573300',
          30: '#663d00',
          35: '#774800',
          40: '#875200',
          50: '#a96800',
          60: '#c8811f',
          70: '#e79b39',
          80: '#ffb865',
          90: '#ffddba',
          95: '#ffeedf',
          98: '#fff8f4',
          99: '#fffbff',
          100: '#ffffff',
        },
        secondary: {
          0: '#000000',
          5: '#200b06',
          10: '#001e31',
          15: '#381f19',
          20: '#003350',
          25: '#003f61',
          30: '#004b72',
          35: '#005784',
          40: '#006496',
          50: '#157db9',
          60: '#3f97d5',
          70: '#5fb2f1',
          80: '#91cdff',
          90: '#cce5ff',
          95: '#e7f2ff',
          98: '#f7f9ff',
          99: '#fcfcff',
          100: '#ffffff',
        },
        tertiary: {
          0: '#000000',
          5: '#171000',
          10: '#340043',
          15: '#302400',
          20: '#520b66',
          25: '#5e1b73',
          30: '#6b297f',
          35: '#78358c',
          40: '#864299',
          50: '#a15bb4',
          60: '#bd75d0',
          70: '#da8fec',
          80: '#f1afff',
          90: '#fbd7ff',
          95: '#ffebfe',
          98: '#fff7fb',
          99: '#fffbff',
          100: '#ffffff',
        },
        green: {
          0: '#000000',
          5: '#001504',
          10: '#002109',
          15: '#002d0f',
          20: '#003915',
          25: '#00461b',
          30: '#005321',
          35: '#006028',
          40: '#006e2e',
          50: '#2a8844',
          60: '#47a25c',
          70: '#63be74',
          80: '#7eda8d',
          90: '#9af7a7',
          95: '#c5ffc8',
          98: '#ebffe8',
          99: '#f6fff2',
          100: '#ffffff',
        },
      },
    },
    fontSize: {
      'body-small': [
        '1.2rem',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'body-medium': [
        '1.4rem',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'body-large': [
        '1.6rem',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'label-small': [
        '',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'label-medium': [
        '',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'label-large': [
        '',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'headline-small': [
        '1.6rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'headline-medium': [
        '2.4rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'headline-large': [
        '3.2rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'display-small': [
        '3rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.5px',
          fontWeight: '',
        },
      ],
      'display-medium': [
        '6rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        },
      ],
      'display-large': [
        '9.6rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-1.5px',
          fontWeight: '400',
        },
      ],
      'title-small': [
        '1.4rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'title-medium': [
        '1.6rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '500',
        },
      ],
      'title-large': [
        '2.4rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
    },
    spacing: {
      1: '1.2rem',
      2: '2.4rem',
      3: '4.8rem',
      4: '6.4rem',
      5: '9.6rem',
      6: '12.8rem',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    gridTemplateColumns: {
      'responsive-grid': 'repeat(auto-fit, minmax(300px, 1fr))',
    },
  },
  plugins: [],
};