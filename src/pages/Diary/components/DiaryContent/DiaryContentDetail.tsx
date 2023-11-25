import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import DiaryContentImgs from './DiaryContentImgs';
import DiaryContentText from './DiaryContentText';

const DiaryContentDetail = () => {
  const { editable, diary, methods } = useDiaryContentContext();
  const { myText, opponentText } = diary;
  const { handleChangeMyText } = methods;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">다이어리 내용</span>
      <div className="flex flex-col gap-4 py-2">
        <DiaryContentImgs />
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
