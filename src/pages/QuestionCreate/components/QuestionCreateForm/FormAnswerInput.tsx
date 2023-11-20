import { useRef } from 'react';
import useQuestionCreateForm from '../../hooks/useQuestionCreateForm';
import { IconPlus } from '~/assets/icons';

const FormAnswerInput = () => {
  const { answers, handleAddAnswer } = useQuestionCreateForm();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const inputHideStyle = answers.length >= 4 ? 'hidden' : 'block';

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(event) => {
        handleAddAnswer(event, inputRef);
      }}
    >
      <label className="font-bold">어떤 선택지가 있나요?</label>
      <div className={`form-control w-full ${inputHideStyle}`}>
        <div className={`input-group`}>
          <input
            ref={inputRef}
            type="text"
            maxLength={20}
            required
            placeholder="답변은 최대 20자까지 작성 가능해요!"
            className="input input-bordered w-full border-dashed font-medium focus:outline-none active:border-none"
          />
          <button
            className="btn btn-square relative"
            onClick={(event) => {
              handleAddAnswer(event, inputRef);
            }}
          >
            <IconPlus className="absolute left-[50%] top-[50%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] stroke-grey-400" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormAnswerInput;
