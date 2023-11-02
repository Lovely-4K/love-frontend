import QuestionFormSelectItem from './QuestionFormSelectItem';

const QuestionFormSelect = () => {
  return (
    <div className="my-3 flex flex-col gap-3 lg:flex-row">
      <QuestionFormSelectItem active={false} answer={'쓰기'} />
      <QuestionFormSelectItem active={false} answer={'안 쓰기'} />
    </div>
  );
};

export default QuestionFormSelect;
