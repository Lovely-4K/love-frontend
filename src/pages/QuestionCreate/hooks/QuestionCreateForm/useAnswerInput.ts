import { useState } from 'react';

const useAnswerInput = () => {
  const [optionValue, setOptionValue] = useState('');

  const handleInputNewOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setOptionValue(value);
  };

  const handleDeleteOption = () => {
    setOptionValue('');
  };

  return { optionValue, handleInputNewOption, handleDeleteOption };
};

export default useAnswerInput;
