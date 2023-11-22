import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import { Rating } from '~/components/domain';

const DiaryContentRating = () => {
  const { editable, diary } = useDiaryContent();

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">평점</span>
      <div>
        <Rating readonly={!editable} defaultScore={diary?.score} />
      </div>
    </div>
  );
};

export default DiaryContentRating;
