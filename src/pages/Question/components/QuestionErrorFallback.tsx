import { FallbackProps } from 'react-error-boundary';
import { Button } from '~/components/common';

const SideBarFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error.message);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="w-full text-center text-2xl">😢</div>
        <div className="w-full p-4 text-center text-grey-400">
          질문을 받아오지 못했어요. 다시 시도해보시겠어요?
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            resetErrorBoundary();
            location.reload();
          }}
          size="large"
          className="bg-base-primary text-base-white"
        >
          새로 고침
        </Button>
      </div>
    </div>
  );
};

export default SideBarFallBack;
