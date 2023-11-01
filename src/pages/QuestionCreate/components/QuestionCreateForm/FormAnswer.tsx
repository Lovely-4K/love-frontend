import useQuestionCreateForm from '../../hooks/useQuestionCreateForm';
import FormAnswerCard from './FormAnswerCard';
import FormAnswerInput from './FormAnswerInput';

/** @todo-key 값 추후 바꿀 방법 생각해보기 */
const FormAnswer = () => {
  const { answers } = useQuestionCreateForm();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <FormAnswerInput />
        {answers.map((answer, index) => (
          <FormAnswerCard key={index} index={index} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default FormAnswer;
