import { memo, useRef, useState } from 'react';

interface CarouselProps {
  pictures?: string[];
}

const Carousel = memo(({ pictures = [] }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current === null) return;

    const { scrollLeft, clientWidth } = carouselRef.current;

    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  const handleButtonClick = (index: number) => {
    if (carouselRef.current === null) return;

    carouselRef.current.scrollTo({
      left: index * carouselRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative h-full">
      <div
        ref={carouselRef}
        className="carousel h-full w-full rounded-[0.625rem]"
        onScroll={handleScroll}
      >
        {pictures.map((picture, index) => (
          <div
            key={index}
            id={`item${index}`}
            className="carousel-item h-full w-full"
          >
            <img src={picture} className="w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-1 left-1/2 flex w-full -translate-x-1/2 justify-center gap-1 py-2">
        {pictures.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`h-3 w-3 rounded-full ${
              index === activeIndex ? 'bg-base-primary' : 'bg-grey-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
});

export default Carousel;
