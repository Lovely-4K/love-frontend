import { useForm } from '../../hooks';
import FormAnswerInput from './FormAnswerInput';
import FormAnswerItem from './FormAnswerItem';

const FormAnswers = () => {
  const { answers } = useForm();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <FormAnswerInput />
        <div className="flex flex-col gap-3">
          {answers.map((answer, index) => (
            <FormAnswerItem key={index} index={index} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormAnswers;
