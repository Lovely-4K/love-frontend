import { useContext } from 'react';
import DiarySpotPreview from './DiarySpotPreview';
import { Button } from '~/components/common';
import { DiarySpotContext } from '~/pages/Diary/contexts/DiarySpotContent';

const DiarySpotPreviews = () => {
  const { pictures } = useContext(DiarySpotContext);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button size="large" className=" mb-5 bg-base-primary text-base-white">
        다이어리 작성하기
      </Button>
      {pictures.map((image, id) => (
        <DiarySpotPreview picture={image} id={id} />
      ))}
    </div>
  );
};

export default DiarySpotPreviews;
