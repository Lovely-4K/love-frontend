import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import DiaryContentImgs from './DiaryContentImgs';
import DiaryContentText from './DiaryContentText';
import { DiaryImgsProvider } from '~/pages/Diary/contexts/DiaryImgsContext';
import { changeImageType } from '~/utils/DiaryContentImgs';

const DiaryContentDetail = () => {
  const { data, methods } = useDiaryContent();
  const { editable, pictures, myText, opponentText } = data;
  const { handleChangeMyText } = methods;
  const imageArray = changeImageType(pictures);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">다이어리 내용</span>
      <div className="flex flex-col gap-4 py-2">
        <DiaryImgsProvider defaultImages={imageArray}>
          <DiaryContentImgs />
        </DiaryImgsProvider>
        <div>
          <div>
            <div className="text-lg font-bold">나의 기록</div>
            <DiaryContentText
              editable={editable}
              diaryText={myText}
              handleChangeText={handleChangeMyText}
            />
          </div>
          <div>
            <div className="text-lg font-bold">상대방의 기록</div>
            <DiaryContentText
              editable={false}
              diaryText={opponentText}
              handleChangeText={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryContentDetail;
