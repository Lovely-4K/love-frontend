import { Carousel } from '~/components/domain';

const DiaryImgsCarousel = () => {
  const pictures = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ];

  return (
    <div className="h-[10rem]">
      <Carousel pictures={pictures} />
    </div>
  );
};

export default DiaryImgsCarousel;
