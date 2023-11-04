import useQuestionForm from '../../hooks/useQuestionForm';

interface QuestionFormSelectItemProps {
  answer: string;
  itemIndex: number;
}

const QuestionFormSelectItem = ({
  answer,
  itemIndex,
}: QuestionFormSelectItemProps) => {
  const { userAnswer, setUserAnswer } = useQuestionForm();
  const activeStyle =
    itemIndex === userAnswer
      ? 'border-none bg-primary text-base-white hover:bg-base-secondary'
      : 'border border-grey-200  hover:bg-grey-100';

  return (
    <div
      onClick={() => setUserAnswer(itemIndex)}
      className={`flex flex-grow cursor-pointer items-center justify-center rounded-xl py-3 ${activeStyle}`}
    >
      {answer}
    </div>
  );
};

export default QuestionFormSelectItem;
