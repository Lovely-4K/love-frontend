import { Input } from '@chakra-ui/react';

// todo: hover & active 처리하기

interface CustomInputProps {
  placeholder: string;
  type?: 'outline' | 'flushed' | 'noneStyle';
  size?: 'medium' | 'large';
  borderColor?: string;
}

const sizes = {
  medium: 'md',
  large: 'lg',
};

const CustomInput = ({
  placeholder,
  type = 'outline',
  size = 'medium',
  borderColor = '#eee',
}: CustomInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      variant={type}
      size={sizes[size]}
      borderColor={borderColor}
    ></Input>
  );
};

export default CustomInput;
