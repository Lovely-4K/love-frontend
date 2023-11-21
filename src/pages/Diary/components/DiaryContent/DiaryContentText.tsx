import { KeyboardEvent } from 'react';
import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';

interface DiaryContentTextProps {
  editable: boolean;
  diaryText?: string;
}

const DiaryContentText = ({ editable, diaryText }: DiaryContentTextProps) => {
  const { editMode } = useDiaryContent();
  const handleTextAreaHeight = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.target instanceof HTMLTextAreaElement) {
      const { scrollHeight } = event.target;
      event.target.style.height = String(scrollHeight) + 'px';
    }
  };

  return (
    <div>
      <textarea
        onInput={handleTextAreaHeight}
        className="h-autos min-h-[4rem] w-[95%] resize-none text-sm placeholder:text-grey-300 focus:outline-none"
        maxLength={200}
        placeholder="데이트를 하며 좋았던 순간을 기록해보세요"
        readOnly={editMode && editable ? true : false}
      >
        {diaryText}
      </textarea>
    </div>
  );
};

export default DiaryContentText;
