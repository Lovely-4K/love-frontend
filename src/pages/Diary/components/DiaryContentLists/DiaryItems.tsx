interface DiaryItemsProps {
  pictures: string[];
  deleteMode: boolean;
}

const DiaryItems = ({ pictures, deleteMode }: DiaryItemsProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button className="btn-large btn mb-5 w-full bg-base-primary text-base-white">
        다이어리 작성하기
      </button>
      {pictures.map((image, id) => (
        <div
          key={id}
          id={`item_${id}`}
          className="group flex flex-col items-center justify-center rounded-xl border border-grey-200"
        >
          <div className="h-32 w-full">
            <img
              src={image}
              className="image-rectangle h-full"
              alt={`${image}-${id}`}
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
      ))}
    </div>
  );
};

export default DiaryItems;
