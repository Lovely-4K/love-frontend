interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string | undefined;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
}

const avatarSizes = {
  small: 'w-[3.125rem] h-[3.125rem]',
  medium: 'w-[4.375rem] h-[4.375rem]',
  large: 'w-[6.25rem] h-[6.25rem]',
  'extra-large': 'w-[9.375rem] h-[9.375rem]',
};

const Avatar = ({ src, size = 'medium', className, ...props }: AvatarProps) => {
  return (
    <div className="avatar" {...props}>
      <div
        className={`rounded-full border border-grey-200 ${avatarSizes[size]} ${className}`}
      >
        <img src={src} />
      </div>
    </div>
  );
};

export default Avatar;
