import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { Rating } from '~/components/domain';

const DiaryContentRating = () => {
  const { diary, editable, methods } = useDiaryContentContext();
  const { score } = diary;
  const { handleChangeScore } = methods;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">평점</span>
      <div>
        <Rating
          readonly={!editable}
          score={score}
          handleChangeScore={handleChangeScore}
        />
      </div>
    </div>
  );
};

export default DiaryContentRating;
