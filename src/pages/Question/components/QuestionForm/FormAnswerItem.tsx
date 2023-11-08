import useUserAnswer from '../../hooks/useUserAnswer';

interface QuestionFormSelectItemProps {
  answer: string | null | undefined;
  itemIndex: number;
}

const FormAnswerItem = ({ answer, itemIndex }: QuestionFormSelectItemProps) => {
  const { userAnswer, setUserAnswer } = useUserAnswer();
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

export default FormAnswerItem;
