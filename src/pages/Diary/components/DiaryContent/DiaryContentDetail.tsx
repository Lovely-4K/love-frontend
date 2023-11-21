import DiaryContentImgs from './DiaryContentImgs';
import DiaryContentText from './DiaryContentText';
import { DiaryImgsProvider } from '~/pages/Diary/contexts/DiaryImgsContext';

const DiaryContentDetail = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">다이어리 내용</span>
      <div className="flex flex-col gap-4 py-2">
        <DiaryImgsProvider>
          <DiaryContentImgs />
        </DiaryImgsProvider>
        <div>
          <div>
            <div className="text-lg font-bold">나의 기록</div>
            <DiaryContentText editable={true} />
          </div>
          <div>
            <div className="text-lg font-bold">상대방의 기록</div>
            <DiaryContentText editable={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryContentDetail;
