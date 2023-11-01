const QuestionCreateFormInput = () => {
  return (
    <div className="flex flex-col gap-3">
      <label>상대방에게 물어보고 싶은 질문이 있나요? </label>
      <input
        maxLength={100}
        required
        className="input-bottom font-medium  border-grey-200 p-3 focus:outline-none"
        placeholder="질문은 최대 50자까지 작성 가능해요!"
      />
    </div>
  );
};

export default QuestionCreateFormInput;
