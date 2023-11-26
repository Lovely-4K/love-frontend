interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string | undefined;
  chatImage?: boolean;
  size?: 'small' | 'medium' | 'large' | 'extra-large';
}

// 해당 클래스 사용하는 곳 변경 필요
// const avatar = {
//   '.avatar-extra-large': {
//     width: '9.375rem',
//     height: '9.375rem',
//     'border-radius': '50%',
//   },
//   '.avatar-large': {
//     width: '6.25rem',
//     height: '6.25rem',
//     'border-radius': '50%',
//   },
//   '.avatar-medium': {
//     width: '4.375rem',
//     height: '4.375rem',
//     'border-radius': '50%',
//   },
//   '.avatar-small': {
//     width: '3.125rem',
//     height: '3.125rem',
//     'border-radius': '50%',
//   },
// };

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
      <div className={`rounded-full ${avatarSizes[size]} ${className}`}>
        <img src={src} />
      </div>
    </div>
  );
};

export default Avatar;
