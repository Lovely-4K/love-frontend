interface QuestionFormSelectItemProps {
  answer: string;
  active: boolean;
}

const QuestionFormSelectItem = ({
  answer,
  active,
}: QuestionFormSelectItemProps) => {
  const activeStyle = active
    ? 'border-none bg-primary text-base-white hover:bg-base-secondary'
    : 'border border-grey-200 py-3 hover:bg-grey-100';

  return (
    <div
      className={`flex flex-grow cursor-pointer items-center justify-center rounded-xl ${activeStyle}`}
    >
      {answer}
    </div>
  );
};

export default QuestionFormSelectItem;
