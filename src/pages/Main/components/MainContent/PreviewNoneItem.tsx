interface MainPreviewNoneItemProps {
  itemName: string;
}

const PreviewNoneItem = ({ itemName }: MainPreviewNoneItemProps) => {
  const placeholder = `아직 등록된 '${itemName}' 이(가) 없어요`;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="text-grey-500">{placeholder}</span>
    </div>
  );
};

export default PreviewNoneItem;
