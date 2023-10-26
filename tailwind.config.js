import daisyui from 'daisyui';
import theme from 'daisyui/src/theming/themes';
import scrollbar from 'tailwind-scrollbar-hide';
import { avatar, btn, colors, font, img, input } from './src/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors,
    extend: {},
  },
  plugins: [daisyui, scrollbar],
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
