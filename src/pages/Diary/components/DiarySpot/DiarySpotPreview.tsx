import { useRef, useEffect } from 'react';
import useDiarySpotContext from '../../hooks/useDiarySpotContext';
import { Img } from '~/components/common';

interface DiarySpotPreviewProps {
  picture: string;
  id: number;
  date: string;
  onClick: () => void;
  isChecked: boolean;
}

const DiarySpotPreview = ({
  picture,
  id,
  date,
  isChecked,
}: DiarySpotPreviewProps) => {
  const diarySpotContext = useDiarySpotContext();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const { deleteMode, handleCheckboxChange } = diarySpotContext;

  const checkboxChange = (id: number) => {
    if (checkboxRef.current) {
      handleCheckboxChange(id, checkboxRef.current.checked);
    }
  };

  const handleDivClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (
      deleteMode &&
      checkboxRef.current &&
      !checkboxRef.current.contains(event.target as Node)
    ) {
      checkboxRef.current.click();
    }
    handleCheckboxChange(id, !isChecked); // 체크박스 상태 변경
  };

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = isChecked;
    }
  }, [isChecked]);

  return (
    <div
      key={id}
      id={`item_${id}`}
      className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-grey-200"
      onClick={handleDivClick}
    >
      <div className="h-32 ">
        <Img
          shape="rectangle"
          className="image-rectangle h-full"
          src={picture}
          alt={`${picture}-${id}`}
        />
        {deleteMode && (
          <input
            ref={checkboxRef}
            type="checkbox"
            id={`item${id}`}
            className="checkbox-error checkbox relative -top-[95%] left-2 flex h-4 w-4 bg-base-white"
            checked={isChecked}
            onChange={() => checkboxChange(id)}
          />
        )}
      </div>
      <div className="font-small py-2">
        <span>{date}</span>
      </div>
    </div>
  );
};

export default DiarySpotPreview;
