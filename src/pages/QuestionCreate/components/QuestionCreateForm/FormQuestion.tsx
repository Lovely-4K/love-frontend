import useQuestionCreateForm from '../../hooks/useQuestionCreateForm';

const FormQuestion = () => {
  const { question, handleQuestionChange } = useQuestionCreateForm();

  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">
        상대방에게 물어보고 싶은 질문이 있나요?{' '}
      </label>
      <input
        value={question}
        onChange={handleQuestionChange}
        maxLength={100}
        required
        className="input-bottom font-medium  border-grey-200 p-3 focus:outline-none"
        placeholder="질문은 최대 50자까지 작성 가능해요!"
      />
    </div>
  );
};

export default FormQuestion;
