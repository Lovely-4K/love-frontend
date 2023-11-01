import { useState } from 'react';
import FormAnswerCard from './FormAnswerCard';
import FormAnswerInput from './FormAnswerInput';

const QuestionCreateFormAnswer = () => {
  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <div>
      <FormAnswerInput answers={answers} setAnswers={setAnswers} />
      {answers.map((answer, index) => (
        <FormAnswerCard key={index} answer={answer} />
      ))}
    </div>
  );
};

export default QuestionCreateFormAnswer;
