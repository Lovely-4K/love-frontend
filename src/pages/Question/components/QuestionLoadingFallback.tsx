import { Loading } from '~/components/common';

const QuestionLoadingFallback = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loading size="large" />
    </div>
  );
};

export default QuestionLoadingFallback;
