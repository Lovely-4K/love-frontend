import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
    width: { sm: 300, md: 1000 },
  },

  sizes: {
    sm: {
      fontSize: 'sm',
      px: 100,
      py: 100,
    },
    md: {
      fontSize: 'md',
      px: 100,
      py: 100,
    },
  },

  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'darkSemantic',
      color: 'primary',
    },
    solid: {
      bg: 'darkSemantic',
      color: 'primary',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

export default Button;
