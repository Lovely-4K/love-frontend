import { Loading } from '~/components/common';

const DiaryMainLoadingFallback = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loading size={'large'} />
    </div>
  );
};

export default DiaryMainLoadingFallback;
