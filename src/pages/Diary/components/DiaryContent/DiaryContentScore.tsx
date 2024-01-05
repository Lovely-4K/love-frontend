import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';
import { Rating } from '~/components/domain';

const DiaryContentScore = () => {
  const { editable, diary, handleChangeScore } = useDiaryForm();
  const { score } = diary;

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

export default DiaryContentScore;
