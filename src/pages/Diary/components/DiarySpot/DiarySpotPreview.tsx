interface DiarySpotPreviewProps {
  picture: string;
  id: number;
  deleteMode: boolean;
}

const DiarySpotPreview = ({
  picture,
  id,
  deleteMode,
}: DiarySpotPreviewProps) => {
  return (
    <div
      key={id}
      id={`item_${id}`}
      className="group flex flex-col items-center justify-center rounded-xl border border-grey-200"
    >
      <div className="h-32 ">
        <img
          src={picture}
          className="image-rectangle h-full "
          alt={`${picture}-${id}`}
        />
        {deleteMode && (
          <input
            type="checkbox"
            id={`item${id}`}
            className="checkbox-error checkbox relative -top-[95%] left-2 flex h-4 w-4 bg-base-white"
          />
        )}
      </div>
      <div className="font-small py-2">
        <span>2023년 9월 13일</span>
      </div>
    </div>
  );
};

export default DiarySpotPreview;
