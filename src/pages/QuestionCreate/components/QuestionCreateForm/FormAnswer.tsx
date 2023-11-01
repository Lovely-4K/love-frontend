import React from 'react';
import FormAnswerCard from './FormAnswerCard';
import FormAnswerInput from './FormAnswerInput';

interface FormAnswerProps {
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

const FormAnswer = ({ answers, setAnswers }: FormAnswerProps) => {
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

export default FormAnswer;
