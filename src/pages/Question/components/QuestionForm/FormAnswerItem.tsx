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
    ? 'border-base-secondary text-base-primary'
    : 'border-grey-200';

  return (
    answer && (
      <button
        onClick={handleClickAnswer}
        className={`rounded-xl border-2 p-2 transition-colors duration-300 hover:bg-grey-100 ${activeStyle}`}
      >
        {answer}
      </button>
    )
  );
};

export default FormAnswerItem;
