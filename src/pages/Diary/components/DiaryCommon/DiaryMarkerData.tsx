import { HtmlHTMLAttributes } from 'react';

interface DiaryMarkerDataProps extends HtmlHTMLAttributes<HTMLDivElement> {
  content: string;
  address: string;
  phone: string;
}

const DiaryMarkerData = ({
  content,
  address,
  phone,
  onClick,
}: DiaryMarkerDataProps) => {
  return (
    <div onClick={onClick}>
      <p className="text-lg text-base-black">{content}</p>
      <p className="text-sm text-grey-400">{address}</p>
      <p className="text-sm text-base-secondary">{phone}</p>
    </div>
  );
};

export default DiaryMarkerData;
