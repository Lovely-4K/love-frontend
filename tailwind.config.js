import colors from './src/theme/colors';
import btn from './src/theme/btn';
import daisyui from 'daisyui';
import theme from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors,
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...btn,
          ...theme['[data-theme=light]'],
        },
      },
    ],
  },
};
