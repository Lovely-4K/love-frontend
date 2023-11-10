import { useContext } from 'react';
import DiarySpotPreview from './DiarySpotPreview';
import { DiarySpotContext } from '~/pages/Diary/contexts/DiarySpotContent';

const DiarySpotPreviews = () => {
  const { pictures } = useContext(DiarySpotContext);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button className="btn-large btn mb-5 w-full bg-base-primary text-base-white">
        다이어리 작성하기
      </button>
      {pictures.map((image, id) => (
        <DiarySpotPreview picture={image} id={id} />
      ))}
    </div>
  );
};

export default DiarySpotPreviews;
