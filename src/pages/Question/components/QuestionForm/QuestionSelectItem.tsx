interface QuestionSelectItemProps {
  answer: string;
}

const QuestionSelectItem = ({ answer }: QuestionSelectItemProps) => {
  return (
    <div className="flex flex-grow cursor-pointer items-center justify-center rounded-xl border border-grey-200 py-3 hover:bg-grey-100">
      {answer}
    </div>
  );
};

export default QuestionSelectItem;
