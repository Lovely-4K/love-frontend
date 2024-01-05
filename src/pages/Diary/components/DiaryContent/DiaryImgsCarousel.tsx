import type { ReadDiary } from '~/types';
import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';
import { Carousel } from '~/components/domain';
import { changeImageType } from '~/utils/Diary';

const DiaryImgsCarousel = () => {
  const { diary } = useDiaryForm();
  const { pictures } = diary as ReadDiary;
  const imgURL = changeImageType(pictures);

  return (
    <>
      {imgURL.length === 0 && (
        <span className="text-center text-sm text-grey-300">
          함께 찍은 사진들을 공유하세요!
        </span>
      )}
      <div className="h-[auto] max-h-[10rem]">
        <Carousel pictures={imgURL} />
      </div>
    </>
  );
};

export default DiaryImgsCarousel;
