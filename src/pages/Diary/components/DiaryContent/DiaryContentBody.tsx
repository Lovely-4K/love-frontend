import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import DiaryContentDate from './DiaryContentDate';
import DiaryContentDetail from './DiaryContentDetail';
import DiaryContentEditButton from './DiaryContentEditButton';
import DiaryContentHeader from './DiaryContentHeader';
import DiaryContentRating from './DiaryContentRating';
import { DiaryCategories } from '~/pages/Diary/components/DiaryCommon';

const DiaryContentBody = () => {
  const { diary, editable } = useDiaryContent();

  const Body = () => {
    // if (!diary) return <Loading />;
    if (!diary) return;

    return (
      <div className="flex w-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
        {!editable && <DiaryContentHeader />}
        <div className="flex flex-col gap-6 overflow-y-auto px-3">
          <div className="flex items-center justify-between">
            <DiaryContentDate />
            <DiaryContentRating />
          </div>
          <DiaryCategories
            defaultCategory={diary?.category}
            editable={editable}
          />
          <DiaryContentDetail />
          <DiaryContentEditButton />
        </div>
      </div>
    );
  };

  return <Body />;
};

export default DiaryContentBody;
