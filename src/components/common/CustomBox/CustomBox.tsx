import { Box, chakra } from '@chakra-ui/react';

const CustomBox = chakra(Box, {
  baseStyle: {
    bg: 'primary',
    borderRadius: 'md',
    border: '1px solid',
    borderColor: 'gray.100',
  },
});

export default CustomBox;
