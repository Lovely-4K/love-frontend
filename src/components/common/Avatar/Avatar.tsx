interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string | undefined;
  chatImage?: boolean;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
}

const avatarSizes = {
  small: 'w-[3.125rem] h-[3.125rem]',
  medium: 'w-[4.375rem] h-[4.375rem]',
  large: 'w-[6.25rem] h-[6.25rem]',
  'extra-large': 'w-[9.375rem] h-[9.375rem]',
};

const Avatar = ({
  src,
  chatImage = false,
  size = 'medium',
  className,
  ...props
}: AvatarProps) => {
  const chatImageStyle = chatImage ? 'chat-image' : '';

  return (
    <div className={`avatar ${chatImageStyle}`} {...props}>
      <div
        className={`rounded-full border border-grey-100 bg-grey-100 ${avatarSizes[size]} ${className}`}
      >
        <img src={src} />
      </div>
    </div>
  );
};

export default Avatar;
