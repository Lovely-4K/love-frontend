import { useState } from 'react';
import FormAnswerCard from './FormAnswerCard';
import FormAnswerInput from './FormAnswerInput';

const QuestionCreateFormAnswer = () => {
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <div>
      <div className="flex flex-col gap-3">
        <FormAnswerInput answers={answers} setAnswers={setAnswers} />
        {answers.map((answer, index) => (
          <FormAnswerCard key={index} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default QuestionCreateFormAnswer;
