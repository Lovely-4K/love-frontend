import { Button } from '~/components/common';

interface ContentItemProps {
  title: string;
  description: string;
  buttonName: string;
  handleButtonClick: () => void;
}

const ContentItem = ({
  title,
  description,
  buttonName,
  handleButtonClick,
}: ContentItemProps) => {
  return (
    <div className="flex h-4/5 w-full flex-col items-center justify-center">
      <div className="text-[6.25rem]">{title}</div>
      <div className="mb-10 whitespace-pre-line text-center">{description}</div>
      <Button
        size="large"
        className=" bg-base-primary text-base-white"
        onClick={handleButtonClick}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default ContentItem;
