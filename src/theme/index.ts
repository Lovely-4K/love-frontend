import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import Button from './components/common/Button';
import Menu from './components/domain/Menu';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  colors: {
    primary: '#F95656',
  },
  // semanticTokens: {
  //   colors: {
  //     darkSemantic: {
  //       default: 'black',
  //       _dark: 'white',
  //     },
  //   },
  // },
  components: {
    Button,
    Menu,
  },
  config,
});

export default theme;
