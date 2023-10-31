import QuestionSelectItem from './QuestionSelectItem';

const QuestionSelect = () => {
  return (
    <div className="my-3 flex flex-col gap-3 lg:flex-row">
      <QuestionSelectItem active={false} answer={'쓰기'} />
      <QuestionSelectItem active={false} answer={'안 쓰기'} />
    </div>
  );
};

export default QuestionSelect;
