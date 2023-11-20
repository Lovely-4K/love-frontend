interface DiaryMarkerDataProps {
  content: string;
  address: string;
  phone: string;
}

const DiaryMarkerData = ({ content, address, phone }: DiaryMarkerDataProps) => {
  return (
    <>
      <p className="text-lg text-base-black">{content}</p>
      <p className="text-sm text-grey-400">{address}</p>
      <p className="text-sm text-base-secondary">{phone}</p>
    </>
  );
};

export default DiaryMarkerData;
