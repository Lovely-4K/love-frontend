import { useContext } from 'react';
import { Rating } from '~/components/domain';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentRating = () => {
  const { editMode } = useContext(DiaryContentContext);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">평점</span>
      <div>
        <Rating readonly={!editMode} />
      </div>
    </div>
  );
};

export default DiaryContentRating;
