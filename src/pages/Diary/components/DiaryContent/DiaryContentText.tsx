import { useContext } from 'react';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentText = () => {
  const { editMode } = useContext(DiaryContentContext);

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl">
      <textarea
        className="font-small placeholder:font-small textarea h-[15rem] w-[95%] resize-none placeholder:text-grey-300 focus:outline-none"
        maxLength={200}
        placeholder="데이트를 하며 좋았던 순간을 기록해보세요"
        readOnly={editMode ? false : true}
      ></textarea>
    </div>
  );
};

export default DiaryContentText;
