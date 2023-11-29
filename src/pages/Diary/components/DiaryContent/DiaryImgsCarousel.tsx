import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { Carousel } from '~/components/domain';
import { changeImageType } from '~/utils/Diary';

const DiaryImgsCarousel = () => {
  const diaryContentContext = useDiaryContentContext();
  const { diary } = diaryContentContext;
  const { pictures } = diary;
  const imgUrl = changeImageType(pictures);

  return (
    <div className="h-[auto] max-h-[10rem]">
      <Carousel pictures={imgUrl} />
    </div>
  );
};

export default DiaryImgsCarousel;
