import useDiaryContentImgs from '../../hooks/DiaryContent/useDiaryContentImgs';
import { Carousel } from '~/components/domain';

const DiaryImgsCarousel = () => {
  const { images } = useDiaryContentImgs();

  return (
    <div className="h-[auto] max-h-[10rem]">
      <Carousel pictures={images} />
    </div>
  );
};

export default DiaryImgsCarousel;
