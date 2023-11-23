interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
}

const loaderSize = {
  small: 'loading-sm',
  medium: 'loading-md',
  large: 'loading-lg',
};

const Loading = ({ size = 'medium' }: LoadingProps) => {
  return (
    <span
      className={`loading loading-dots ${loaderSize[size]} text-center text-base-primary`}
    ></span>
  );
};

export default Loading;
