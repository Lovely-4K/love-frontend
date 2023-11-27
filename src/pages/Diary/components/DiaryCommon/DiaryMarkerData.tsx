import { HtmlHTMLAttributes } from 'react';

interface DiaryMarkerDataProps extends HtmlHTMLAttributes<HTMLDivElement> {
  content: string;
  address: string;
}

const DiaryMarkerData = ({
  content,
  address,
  onClick,
}: DiaryMarkerDataProps) => {
  return (
    <div onClick={onClick} className="flex flex-col justify-center gap-1">
      <p className="text-lg text-base-black">{content}</p>
      <p className="text-sm text-base-secondary">{address}</p>
    </div>
  );
};

export default DiaryMarkerData;
