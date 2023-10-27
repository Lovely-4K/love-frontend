interface DiaryPreviewItemProps {
  date: string;
  location: string;
  imgSrc: string;
}

const DiaryPreviewItem = ({
  date,
  location,
  imgSrc,
}: DiaryPreviewItemProps) => {
  return (
    <div className="relative my-2 flex h-32 w-32 flex-shrink-0 cursor-pointer items-center justify-center md:w-full [&>div]:hover:visible">
      <div className="font-medium invisible absolute left-[50%] top-[50%] z-20 flex h-full w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-xl bg-base-deem text-base-white">
        <div>{date}</div>
        <div>{location}</div>
      </div>
      <img
        className="image-square flex-grow lg:image-rectangle"
        src={imgSrc}
        alt="다이어리 미리보기"
      />
    </div>
  );
};

export default DiaryPreviewItem;
