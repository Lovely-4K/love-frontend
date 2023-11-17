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
            className="input-bordered w-full border-dashed font-medium focus:outline-none active:border-none"
          />
          <Button
            className="btn btn-square relative"
            onClick={(event) => {
              handleAddAnswer(event, value);
              handleDeleteInputValue();
            }}
          >
            <IconPlus className="absolute left-[50%] top-[50%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] stroke-grey-400" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormAnswerInput;
