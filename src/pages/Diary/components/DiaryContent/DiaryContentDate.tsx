import { useContext } from 'react';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentDate = () => {
  const { editMode } = useContext(DiaryContentContext);

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="font-large font-bold text-base-black">날짜</span>
        <div>
          <input
            className="font-medium text-base-black focus:outline-none"
            type="date"
            value={'2023-10-31'}
            readOnly={!editMode}
          />
        </div>
      </div>
    </>
  );
};

export default DiaryContentDate;
