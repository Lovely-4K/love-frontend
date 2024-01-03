import { memo } from 'react';
import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';

const DiaryContentDate = memo(() => {
  const { diary, editable, handleChangeDatingDay } = useDiaryForm();
  const { datingDay } = diary;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">날짜</span>
      <div>
        <input
          onChange={handleChangeDatingDay}
          className="font-medium text-base-black focus:outline-none"
          type="date"
          value={datingDay}
          readOnly={!editable}
        />
      </div>
    </div>
  );
});

export default DiaryContentDate;
