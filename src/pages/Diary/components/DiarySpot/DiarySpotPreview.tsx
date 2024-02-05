import { useAtomValue } from 'jotai';
import { useRef, useEffect } from 'react';
import defaultImg from '~/assets/images/couple.jpeg';
import { Img } from '~/components/common';
import useDiarySpot from '~/pages/Diary/hooks/DiarySpot/useDiarySpot';
import { deleteModeAtom } from '~/stores/diarySpotAtoms';

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
  onClick,
  isChecked,
}: DiarySpotPreviewProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const deleteMode = useAtomValue(deleteModeAtom);
  const { handleCheckboxChange } = useDiarySpot();

  const checkboxChange = (id: number) => {
    if (checkboxRef.current) {
      handleCheckboxChange(id, checkboxRef.current.checked);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (deleteMode) {
      if (
        checkboxRef.current &&
        !checkboxRef.current.contains(event.target as Node)
      ) {
        checkboxRef.current.click();
      }
      handleCheckboxChange(id, !isChecked); // 체크박스 상태 변경
    } else {
      onClick(); // deleteMode가 false일 때는 props로 받은 onClick 호출
    }
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
      onClick={handleClick} // 수정된 부분
    >
      <div className="h-32 ">
        <Img
          shape="rectangle"
          className="image-rectangle h-full"
          src={picture || defaultImg}
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
