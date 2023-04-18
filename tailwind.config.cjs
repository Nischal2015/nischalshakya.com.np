/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    colors: {
      light: '#ffffff',
      white: '#f8f9fa',
      black: '#212529',
      gray: '#646669',
    },
    fontSize: {
      'body-small': [
        '1.2rem',
        {
          lineHeight: '1.5',
        },
      ],
      'body-medium': [
        '1.4rem',
        {
          lineHeight: '1.5',
        },
      ],
      'body-large': [
        '2.25rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.5px',
          fontWeight: '400',
        },
      ],
      'label-small': [
        '',
        {
          lineHeight: '1.5',
        },
      ],
      'label-medium': [
        '',
        {
          lineHeight: '1.5',
        },
      ],
      'label-large': [
        '',
        {
          lineHeight: '1.5',
        },
      ],
      'headline-small': [
        '1.6rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.25px',
          fontWeight: '400',
        },
      ],
      'headline-medium': [
        '2.4rem',
        {
          lineHeight: '1.2',
        },
      ],
      'headline-large': [
        '3.2rem',
        {
          lineHeight: '1.2',
        },
      ],
      'display-small': [
        '3rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.5px',
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
        '11.2rem',
        {
          lineHeight: '1.1',
          fontWeight: '400',
        },
      ],
      'title-small': [
        '1.4rem',
        {
          lineHeight: '1.2',
        },
      ],
      'title-medium': [
        '1.6rem',
        {
          lineHeight: '1.2',
          fontWeight: '500',
        },
      ],
      'title-large': [
        '3rem',
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
      'neue-montreal': ['Neue Montreal', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        'responsive-grid': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
