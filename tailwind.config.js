import daisyui from 'daisyui';
import theme from 'daisyui/src/theming/themes';
import avatar from './src/theme/avatar';
import btn from './src/theme/btn';
import colors from './src/theme/colors';
import font from './src/theme/font';
import img from './src/theme/img';
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
          ...theme['[data-theme=light]'],
          primary: colors.base.primary,
          'primary-content': colors.base.white,
          ...avatar,
          ...input,
          ...btn,
          ...img,
          ...font,
        },
      },
    ],
  },
};
