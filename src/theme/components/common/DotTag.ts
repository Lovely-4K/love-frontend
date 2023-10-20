import { StyleConfig } from '@chakra-ui/react';

const DotTag: StyleConfig = {
  baseStyle: {
    display: 'inline-block',
    borderRadius: '50%',
    bg: 'primary',
    mx: '2px',
    width: '10px',
    height: '10px',
  },
  sizes: {
    sm: {
      width: '5px',
      height: '5px',
    },
    md: {
      width: '100px',
      height: '100px',
    },
  },
};

export default DotTag;
