// import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { useAtomValue } from 'jotai';
import { useToast } from '~/hooks';
import DiaryContentDate from './DiaryContentDate';
import DiaryContentDetail from './DiaryContentDetail';
import DiaryContentEditButton from './DiaryContentEditButton';
import DiaryContentHeader from './DiaryContentHeader';
import DiaryContentRating from './DiaryContentRating';
import { DiaryCategories } from '~/pages/Diary/components/DiaryCommon';
import useDiaryContents from '~/pages/Diary/hooks/DiaryContent/useDiaryContents';
import {
  editDiaryAtom,
  editableAtom,
  originDiaryAtom,
} from '~/stores/diaryContentAtoms';

const DiaryContentBody = () => {
  const editable = useAtomValue(editableAtom);
  const editDiary = useAtomValue(editDiaryAtom);
  const originDiary = useAtomValue(originDiaryAtom);
  const diary = editable ? editDiary : originDiary;
  const { category } = diary;
  const { showToast } = useToast();
  const { handleSubmitForm, handleChangeCategory } = useDiaryContents();

  return (
    <div className="flex w-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
      {showToast && (
        <div className="toast toast-center toast-top">
          <div className="alert flex bg-base-secondary text-base-white">
            <span>텍스트 칸은 비워둘 수 없습니다!</span>
          </div>
        </div>
      )}
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
