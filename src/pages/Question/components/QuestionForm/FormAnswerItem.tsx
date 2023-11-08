interface QuestionFormSelectItemProps {
  answer: string | null | undefined;
  activeStatus: boolean;
  handleClickAnswer: React.MouseEventHandler<HTMLButtonElement>;
}

const FormAnswerItem = ({
  answer,
  activeStatus,
  handleClickAnswer,
}: QuestionFormSelectItemProps) => {
  const activeStyle = activeStatus
    ? 'border-2 border-base-secondary text-base-primary transition-all duration-500'
    : 'border-2 border-grey-200  hover:bg-grey-100';

  return (
    answer && (
      <button
        onClick={handleClickAnswer}
        className={`box-border flex flex-grow cursor-pointer items-center justify-center rounded-xl py-3 ${activeStyle}`}
      >
        {answer}
      </button>
    )
  );
};

export default FormAnswerItem;
