interface AvatarProps {
  src: string;
  type?: 'small' | 'medium' | 'large' | 'extra-large';
  className?: string;
}

const avatarSizes = {
  small: 'avatar-small',
  medium: 'avatar-medium',
  large: 'avatar-large',
  'extra-large': 'avatar-extra-large',
};

const Avatar = ({ src, type = 'medium', className }: AvatarProps) => {
  return (
    <div className="avatar">
      <div className={`${avatarSizes[type]} ${className}`}>
        <img src={src} />
      </div>
    </div>
  );
};

export default Avatar;
