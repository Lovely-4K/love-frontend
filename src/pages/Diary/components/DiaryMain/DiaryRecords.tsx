import { DiaryPreviewItem } from '~/components/domain';

const DiaryRecords = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-large font-bold text-base-black">
            우리의 추억들
          </span>
          <div className="join">
            <input
              className="btn join-item btn-xs rounded-xl bg-base-white"
              type="radio"
              name="options"
              aria-label="날짜 순"
            />
            <input
              className="btn join-item btn-xs rounded-xl bg-base-white"
              type="radio"
              name="options"
              aria-label="평점 순"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <DiaryPreviewItem
            date={'2023월 09월 05일'}
            location={'카페 녹다'}
            imgSrc={'https://picsum.photos/200'}
          />
          <DiaryPreviewItem
            date={'2023월 09월 05일'}
            location={'카페 녹다'}
            imgSrc={'https://picsum.photos/200'}
          />
          <DiaryPreviewItem
            date={'2023월 09월 05일'}
            location={'카페 녹다'}
            imgSrc={'https://picsum.photos/200'}
          />
        </div>
      </div>
    </>
  );
};

export default DiaryRecords;
