import React, { useRef } from 'react';
import { IconPlus } from '~/assets/icons';

interface FormAnswerInputProps {
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

const FormAnswerInput = ({ answers, setAnswers }: FormAnswerInputProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const inputHideStyle = answers.length >= 4 ? 'hidden' : 'block';

  const handlePlusButton = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const nextAnswers = [...answers];
    if (inputRef.current && inputRef.current.value) {
      nextAnswers.push(inputRef.current.value);
      inputRef.current.value = '';
    }

    setAnswers(nextAnswers);
  };

  return (
    <form onSubmit={handlePlusButton}>
      <label>어떤 선택지가 있나요?</label>
      <div className={`form-control w-full ${inputHideStyle}`}>
        <div className={`input-group`}>
          <input
            ref={inputRef}
            type="text"
            placeholder="답변을 등록해보세요!"
            className="input input-bordered w-full border-dashed focus:outline-none active:border-none"
          />
          <button
            className="btn btn-square relative"
            onClick={handlePlusButton}
          >
            <IconPlus className="absolute left-[50%] top-[50%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] stroke-grey-400" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormAnswerInput;
