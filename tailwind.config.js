import daisyui from 'daisyui';
import theme from 'daisyui/src/theming/themes';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...theme['[data-theme=light]'],
          primary: '#F95656',
          '.btn-primary': {
            'background-color': '#F95656',
            'border-color': '#F95656',
            width: '100vw',
          },
        },
      },
    ],
  },
};
