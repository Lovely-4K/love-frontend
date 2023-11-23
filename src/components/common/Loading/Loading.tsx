import { HtmlHTMLAttributes } from 'react';

interface LoadingProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large';
}

const loaderSize = {
  small: 'loading-sm',
  medium: 'loading-md',
  large: 'loading-lg',
};

const Loading = ({ size = 'medium', className, ...props }: LoadingProps) => {
  return (
    <span
      className={`loading loading-dots ${loaderSize[size]} text-center text-base-primary ${className}}`}
      {...props}
    />
  );
};

export default Loading;
