interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
}

// 해당 클래스 사용하는 곳 변경 필요
// const btn = {
//   '.btn-extra-large': {
//     'max-width': '20rem',
//     height: '3.5rem',
//     'font-size': '1.25rem',
//   },
//   '.btn-large': {
//     'max-width': '12.5rem',
//     height: '2.5rem',
//     'flex-shrink': '1',
//     'font-size': '0.875rem',
//   },
//   '.btn-medium': {
//     'max-width': '6.875rem',
//     height: '2.5rem',
//     'flex-shrink': '1',
//     'font-size': '0.875rem',
//   },
//   '.btn-small': {
//     'max-width': '5rem',
//     height: '1.875rem',
//     'flex-shrink': '1',
//     'font-size': '0.75rem',
//   },
// };

const buttonSizes = {
  small: 'w-20 h-7',
  medium: 'w-28 h-10',
  large: 'w-[12.5rem] h-10',
  'extra-large': 'w-80 h-14',
};

const Button = ({
  size = 'medium',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-xl ${buttonSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
