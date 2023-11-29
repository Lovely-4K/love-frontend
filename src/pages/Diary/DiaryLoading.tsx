import { Loading } from '~/components/common';

const DiaryLoading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loading size="large" />
    </div>
  );
};

export default DiaryLoading;
