import daisyui from 'daisyui';
import theme from 'daisyui/src/theming/themes';
import btn from './src/theme/btn';
import colors from './src/theme/colors';

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
          primary: colors.base.primary,
          'primary-content': colors.base.white,
        },
      },
    ],
  },
};
