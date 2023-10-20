import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import colors from './colors';
import components from './components';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  colors,
  components,
  config,
});

export default theme;
