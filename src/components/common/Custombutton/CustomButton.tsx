import React from 'react';
import { Button } from '@chakra-ui/react';

// todo: color type 으로 지저하기
// todo: active & hover 컬러 지정하기

interface CustomButtonProps {
  size: 'extraLarge' | 'large' | 'medium' | 'small';
  buttonColor: string;
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  borderColor?: string;
  type?: 'icon' | 'origin';
  content?: string;
  contentColor?: string;
  isLoading?: true | false;
  iconImage?: React.ReactElement | undefined;
}

const sizes = {
  extraLarge: {
    width: '370px',
    height: '70px',
  },
  large: {
    width: '200px',
    height: '40px',
  },
  medium: {
    width: '110px',
    height: '40px',
  },
  small: {
    width: '80px',
    height: '30px',
  },
};

const CustomButton = ({
  size,
  buttonColor,
  variant = 'solid',
  borderColor = 'none',
  type = 'origin',
  content = '',
  contentColor = '#000',
  isLoading = false,
  iconImage = undefined,
}: CustomButtonProps) => {
  const buttonWidth = type === 'origin' ? sizes[size].width : '30px';
  const buttonHeight = type === 'origin' ? sizes[size].height : '30px';
  const borderRadius = type === 'origin' ? '10px' : '50%';
  const fontSize =
    size === 'extraLarge' ? '20px' : size === 'small' ? '12px' : '14px';

  return (
    <Button
      width={buttonWidth}
      height={buttonHeight}
      backgroundColor={buttonColor}
      variant={variant}
      borderRadius={borderRadius}
      isLoading={isLoading}
      color={contentColor}
      borderColor={borderColor}
      leftIcon={iconImage}
      fontSize={fontSize}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
