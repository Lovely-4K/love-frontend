import { useFormAnswerInput, useQuestionCreateForm } from '../../hooks';
import { IconPlus } from '~/assets/icons';
import { Button, Input } from '~/components/common';

const FormAnswerInput = () => {
  const { answers, handleAddAnswer } = useQuestionCreateForm();
  const { value, handleInputChange, handleDeleteInputValue } =
    useFormAnswerInput();
  const inputHideStyle = answers.length >= 4 ? 'hidden' : 'block';

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(event) => {
        handleAddAnswer(event, value);
        handleDeleteInputValue();
      }}
    >
      <label className="font-bold">어떤 선택지가 있나요?</label>
      <div className={`form-control w-full ${inputHideStyle}`}>
        <div className={`input-group`}>
          <Input
            value={value}
            onChange={handleInputChange}
            type="text"
            maxLength={20}
            required
            placeholder="답변은 최대 20자까지 작성 가능해요!"
            className="input input-bordered w-full border-dashed text-base font-medium focus:outline-none active:border-none"
          />
          <Button
            className="btn w-fit"
            onClick={(event) => {
              handleAddAnswer(event, value);
              handleDeleteInputValue();
            }}
          >
            <IconPlus className="h-5 w-5 stroke-grey-400" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormAnswerInput;
