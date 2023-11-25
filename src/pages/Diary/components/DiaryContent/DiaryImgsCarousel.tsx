import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { Carousel } from '~/components/domain';

const DiaryImgsCarousel = () => {
  const diaryContentContext = useDiaryContentContext();
  const { diary } = diaryContentContext;
  const { images } = diary;

  return (
    <div className="h-[auto] max-h-[10rem]">
      <Carousel pictures={images} />
    </div>
  );
};

export default DiaryImgsCarousel;
