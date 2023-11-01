import useQuestionCreateForm from '../../hooks/useQuestionCreateForm';
import FormAnswerCard from './FormAnswerCard';
import FormAnswerInput from './FormAnswerInput';

const FormAnswer = () => {
  const { answers } = useQuestionCreateForm();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <FormAnswerInput />
        {answers.map((answer, index) => (
          <FormAnswerCard key={index} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default FormAnswer;
