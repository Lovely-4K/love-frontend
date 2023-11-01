import FormAnswer from './FormAnswer';
import FormQuestion from './FormQuestion';

const QuestionCreateForm = () => {
  return (
    <div className="flex flex-col gap-3">
      <FormQuestion />
      <FormAnswer />
    </div>
  );
};

export default QuestionCreateForm;
