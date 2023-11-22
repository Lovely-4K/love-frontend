import { useState } from 'react';

const useFormAnswerInput = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);
  };

  const handleDeleteInputValue = () => {
    setValue('');
  };

  return { value, handleInputChange, handleDeleteInputValue };
};

export default useFormAnswerInput;
