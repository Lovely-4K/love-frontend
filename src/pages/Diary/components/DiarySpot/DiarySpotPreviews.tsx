import DiarySpotPreview from '~/pages/Diary/components/DiarySpot/DiarySpotPreview';

interface DiarySpotPreviewsProps {
  pictures: string[];
  deleteMode: boolean;
}

const DiarySpotPreviews = ({
  pictures,
  deleteMode,
}: DiarySpotPreviewsProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button className="btn-large btn mb-5 w-full bg-base-primary text-base-white">
        다이어리 작성하기
      </button>
      {pictures.map((image, id) => (
        <DiarySpotPreview picture={image} id={id} deleteMode={deleteMode} />
      ))}
    </div>
  );
};

export default DiarySpotPreviews;
