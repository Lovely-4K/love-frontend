import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';
import DiaryContentText from './DiaryContentText';

const DiaryContentTextSection = () => {
  const { editable, diary, handleChangeMyText } = useDiaryForm();
  const { myText, opponentText } = diary;

  return (
    <div>
      <DiaryContentText
        label={'나의 기록'}
        editable={editable}
        diaryText={myText}
        handleChangeText={handleChangeMyText}
      />
      <DiaryContentText
        label={'상대방의 기록'}
        editable={false}
        diaryText={opponentText}
        handleChangeText={() => {}}
      />
    </div>
  );
};

export default DiaryContentTextSection;
