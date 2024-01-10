import { ChangeEvent } from 'react';

interface DiaryContentTextProps {
  editable: boolean;
  label: string;
  diaryText: string;
  handleChangeText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const DiaryContentText = ({
  editable,
  label,
  diaryText,
  handleChangeText,
}: DiaryContentTextProps) => {
  const handleTextAreaHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target instanceof HTMLTextAreaElement) {
      const { scrollHeight } = event.target;
      event.target.style.height = String(scrollHeight) + 'px';
    }
  };

  return (
    <div>
      <div className="text-lg font-bold">{label}</div>
      <div>
        <textarea
          onChange={(event) => {
            handleTextAreaHeight(event);
            handleChangeText(event);
          }}
          className="h-autos min-h-[4rem] w-[95%] resize-none text-sm placeholder:text-grey-300 focus:outline-none"
          maxLength={200}
          placeholder="데이트를 하며 좋았던 순간을 기록해보세요"
          readOnly={!editable}
          value={diaryText === null ? '' : diaryText}
        >
          {diaryText}
        </textarea>
      </div>
    </div>
  );
};

export default DiaryContentText;
