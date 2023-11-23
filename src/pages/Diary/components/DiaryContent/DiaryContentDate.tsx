import { memo } from 'react';
import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';

const DiaryContentDate = memo(() => {
  const { data, methods } = useDiaryContent();
  const { datingDay, editable } = data;
  const { handleChangeDatingDay } = methods;

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
