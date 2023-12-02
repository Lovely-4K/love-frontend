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
        {!editable && diary.pictures.firstImage === null ? (
          <span className="text-center text-sm text-grey-300">
            함께 찍은 사진들을 공유하세요!
          </span>
        ) : (
          <DiaryContentImgs />
        )}
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
