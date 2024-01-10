import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/common';
import PATHS from '~/router/paths';

const QuestionCreateErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const navigate = useNavigate();
  console.error(error.message);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="w-full text-center text-2xl">😢</div>
        <div className="w-full p-4 text-center text-grey-400">
          앗! 유효한 접근이 아니에요! 올바른 경로로 접근해주세요!
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            resetErrorBoundary();
            navigate(PATHS.QUESTION);
          }}
          size="large"
          className="bg-base-primary text-base-white"
        >
          질문 페이지로 이동
        </Button>
      </div>
    </div>
  );
};

export default QuestionCreateErrorFallback;
