import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import DiaryContentDate from './DiaryContentDate';
import DiaryContentDetail from './DiaryContentDetail';
import DiaryContentEditButton from './DiaryContentEditButton';
import DiaryContentHeader from './DiaryContentHeader';
import DiaryContentRating from './DiaryContentRating';
import { DiaryCategories } from '~/pages/Diary/components/DiaryCommon';

const DiaryContentBody = () => {
  const { diary, editable, methods } = useDiaryContentContext();
  const { category } = diary;
  const { handleSubmitForm, handleChangeCategory } = methods;

  return (
    <div className="flex w-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
      <DiaryContentHeader />
      <div
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-6 overflow-y-auto px-3"
      >
        <div className="flex items-center justify-between">
          <DiaryContentDate />
          <DiaryContentRating />
        </div>
        <DiaryCategories
          defaultCategory={category}
          editable={editable}
          handleChangeCategory={handleChangeCategory}
        />
        <DiaryContentDetail />
        <DiaryContentEditButton />
      </div>
    </div>
  );
};

export default DiaryContentBody;
