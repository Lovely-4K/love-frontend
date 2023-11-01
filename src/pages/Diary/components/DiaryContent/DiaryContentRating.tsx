import { Rating } from '~/components/domain';

interface DiaryContentRatingProps {
  editMode: boolean;
}

const DiaryContentRating = ({ editMode }: DiaryContentRatingProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="font-large font-bold text-base-black">평점</span>
        <div>
          <Rating readonly={!editMode} />
        </div>
      </div>
    </>
  );
};

export default DiaryContentRating;
