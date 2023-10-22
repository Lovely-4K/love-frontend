import { Avatar } from '@chakra-ui/react';

interface CustomAvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'extraLarge' | 'large' | 'medium' | 'small';
  name?: string;
  src: string;
}

const sizes = {
  extraLarge: '2xl',
  large: 'xl',
  medium: 'lg',
  small: 'md',
};

const CustomAvatar = ({
  size = 'extraLarge',
  name = '',
  src,
}: CustomAvatarProps) => {
  return <Avatar size={sizes[size]} name={name} src={src} />;
};

export default CustomAvatar;
