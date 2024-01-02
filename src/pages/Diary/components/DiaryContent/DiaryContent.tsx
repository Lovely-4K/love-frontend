import { useToast } from '~/hooks';
import useDiaryContentData from '../../hooks/DiaryContent/useDiaryContentData';
import DiaryContentDate from './DiaryContentDate';
import DiaryContentDetail from './DiaryContentDetail';
import DiaryContentEditButton from './DiaryContentEditButton';
import DiaryContentHeader from './DiaryContentHeader';
import DiaryContentRating from './DiaryContentRating';
import DiaryContentToast from './DiaryContentToast';

const DiaryContent = () => {
  const { showToast } = useToast();
  useDiaryContentData();

  return (
    <div className="flex w-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
      {showToast && <DiaryContentToast />}
      <DiaryContentHeader />
      <div className="flex flex-col gap-6 overflow-y-auto px-3">
        <div className="flex items-center justify-between">
          <DiaryContentDate />
          <DiaryContentRating />
        </div>
        <DiaryContentDetail />
        <DiaryContentEditButton />
      </div>
    </div>
  );
};

export default DiaryContent;
