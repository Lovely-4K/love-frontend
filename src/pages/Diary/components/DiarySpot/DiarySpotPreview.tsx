import { useContext } from 'react';
import { Img } from '~/components/common';
import { DiarySpotContext } from '~/pages/Diary/contexts/DiarySpotContent';

interface DiarySpotPreviewProps {
  picture: string;
  id: number;
  date: string;
  onClick: () => void;
}

const DiarySpotPreview = ({
  picture,
  id,
  date,
  onClick,
}: DiarySpotPreviewProps) => {
  const { deleteMode } = useContext(DiarySpotContext);

  return (
    <div
      key={id}
      id={`item_${id}`}
      className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-grey-200"
      onClick={onClick}
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
            type="checkbox"
            id={`item${id}`}
            className="checkbox-error checkbox relative -top-[95%] left-2 flex h-4 w-4 bg-base-white"
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
