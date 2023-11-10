import DiaryContentImgs from '~/pages/Diary/components/DiaryContent/DiaryContentImgs';
import DiaryContentText from '~/pages/Diary/components/DiaryContent/DiaryContentText';
import { DiaryImgsProvider } from '~/pages/Diary/contexts/DiaryImgsContext';

const DiaryContentDetail = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-large font-bold text-base-black">
        다이어리 내용
      </span>
      <div className="rounded-xl border border-grey-200 px-3 py-5">
        <DiaryImgsProvider>
          <DiaryContentImgs />
        </DiaryImgsProvider>
        <DiaryContentText />
      </div>
    </div>
  );
};

export default DiaryContentDetail;
