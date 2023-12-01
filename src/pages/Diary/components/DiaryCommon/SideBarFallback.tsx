import { FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { Button } from '~/components/common';

const SideBarFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { pathname } = location;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="w-full text-center text-2xl">😢</div>
        <div className="w-full p-4 text-center text-grey-400">
          {error.message}
        </div>
      </div>
      <div>
        <Link to={paths.DIARY.ROOT}>
          <Button
            onClick={() => {
              resetErrorBoundary();
              if (pathname === paths.DIARY.ROOT) {
                location.reload();
              }
            }}
            size="large"
            className="bg-base-primary text-base-white"
          >
            처음 화면으로 이동
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SideBarFallBack;
