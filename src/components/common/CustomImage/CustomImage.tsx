import { Image, ImageProps, StyleProps } from '@chakra-ui/react';
import { memo } from 'react';

interface CustomImageProps extends ImageProps {
  type: 'rectangle' | 'square' | 'circle';
}

const styles: Record<CustomImageProps['type'], StyleProps> = {
  rectangle: {
    borderRadius: 'lg',
    width: '17.5rem',
    height: '8rem',
  },
  square: {
    borderRadius: 'lg',
    width: '8rem',
    height: '7rem',
  },
  circle: {
    borderRadius: 'full',
    width: '3.75rem',
    height: '3.75rem',
  },
};

const CustomImage = memo(({ type = 'square', ...rest }: CustomImageProps) => {
  return <Image fit="cover" {...styles[type]} {...rest} />;
});

export default CustomImage;
