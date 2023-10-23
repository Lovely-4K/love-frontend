import { Input } from '@chakra-ui/react';

interface CustomInputProps {
  placeholder: string;
  type: 'outline' | 'flushed' | 'noneStyle';
  size?: 'medium' | 'large';
  borderColor?: string;
}

const sizes = {
  medium: 'md',
  large: 'lg',
};

const CustomInput = ({
  placehodler,
  type,
  size = 'medium',
  borderColor = '#eee',
}) => {
  return (
    <Input
      placeholder={placehodler}
      variant={type}
      size={sizes[size]}
      borderColor={borderColor && '#eee'}
    ></Input>
  );
};

export default CustomInput;
