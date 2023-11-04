import QuestionFormSelectItem from './QuestionFormSelectItem';
import useQuestionForm from '~/pages/Question/hooks/useQuestionForm';

const QuestionFormSelect = () => {
  const { answers } = useQuestionForm();

  return (
    <div className="my-3 flex flex-col gap-3 lg:flex-row">
      {answers.map((answer, index) => {
        return (
          answer && (
            <QuestionFormSelectItem itemIndex={index + 1} answer={answer} />
          )
        );
      })}
    </div>
  );
};

export default QuestionFormSelect;
