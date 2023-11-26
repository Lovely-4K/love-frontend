import { useContext } from 'react';
import { Rating } from '~/components/domain';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentRating = () => {
  const contextValue = useContext(DiaryContentContext);

  if (!contextValue) {
    return null;
  }

  const { editMode } = contextValue;

  return (
    <div className="flex flex-col gap-2">
      <span className="font-large font-bold text-base-black">평점</span>
      <div>
        <Rating readonly={!editMode} />
      </div>
    </div>
  );
};

export default DiaryContentRating;
