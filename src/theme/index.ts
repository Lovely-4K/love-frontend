import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import config from './config';

const theme = extendTheme({
  colors,
  config,
});

export default theme;
