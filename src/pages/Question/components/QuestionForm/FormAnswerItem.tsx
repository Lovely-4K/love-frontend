interface QuestionFormSelectItemProps {
  answer: string | null | undefined;
  activeStatus: boolean;
  handleClickAnswer: React.MouseEventHandler<HTMLDivElement>;
}

const FormAnswerItem = ({
  answer,
  activeStatus,
  handleClickAnswer,
}: QuestionFormSelectItemProps) => {
  const activeStyle = activeStatus
    ? 'border-none bg-primary text-base-white hover:bg-base-secondary'
    : 'border border-grey-200  hover:bg-grey-100';

  return (
    answer && (
      <div
        onClick={handleClickAnswer}
        className={`flex flex-grow cursor-pointer items-center justify-center rounded-xl py-3 ${activeStyle}`}
      >
        {answer}
      </div>
    )
  );
};

export default FormAnswerItem;
