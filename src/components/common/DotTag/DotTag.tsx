import { Icon, IconProps } from '@chakra-ui/react';

interface DotTagProps {
  size?: 'sm' | 'md' | 'lg';
  color?: IconProps['color'];
}

const sizes = {
  sm: '0.6rem',
  md: '1rem',
  lg: '2rem',
};

const DotTag = ({ size = 'sm', color = 'black' }: DotTagProps) => {
  return (
    <Icon viewBox="0 0 200 200" boxSize={sizes[size]} color={color}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
};

export default DotTag;
