import daisyui from 'daisyui';
import theme from 'daisyui/src/theming/themes';
import btn from './src/theme/btn';
import colors from './src/theme/colors';
import input from './src/theme/input';

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
          ...input,
          ...theme['[data-theme=light]'],
        },
      },
    ],
  },
};
