interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  shape?: 'normal' | 'bottom' | 'ghost';
}

const inputShapes = {
  normal: 'rounded-xl',
  ghost: 'input-ghost',
  bottom: 'border-0 border-b-[1px] rounded-none border-base-black',
};

const Input = ({ className, shape = 'normal', ...props }: InputProps) => {
  return (
    <input className={`input ${inputShapes[shape]} ${className}`} {...props} />
  );
};

export default Input;

// const input = {
//   '.input-bottom': {
//     'border-radius': '0',
//     'border-top-width': '0',
//     'border-left-width': '0',
//     'border-right-width': '0',
//     'border-bottom-width': '1px',
//     'border-bottom-style': 'solid',
//   },
// };

// export default input;
